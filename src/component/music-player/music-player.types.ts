export enum SupportedMusicType {
    MP3 = 'mp3'
}

export interface Props {
    iconUrl: string,
    musicSrc: string,
    name: string,
    dataCy?: string,
}