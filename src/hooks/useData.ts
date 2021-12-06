import {useCallback, useEffect, useState} from "react";

const useData = <T>(fileName: string): [boolean, T | null, string | null] => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null)
    const fetchJsonData = useCallback(async (name) => {
        try {
            const response = await fetch('data/' + name);
            const data = await response.json();
            setData(data)
        } catch (error: unknown) {
            setError(error as string);
        } finally {
            setLoading(false);
        }
    },[])

    useEffect(() => {
        fetchJsonData(fileName)
    }, [fileName, fetchJsonData])

    return [loading, data, error]
}

export default useData;