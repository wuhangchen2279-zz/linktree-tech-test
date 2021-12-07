import {DetailLinkItem} from "../expandable-link/expandable-link.types";
import {UserData} from "../../types";

export interface LinkItem {
    title: string,
    url?: string,
    providerUrl?: string,
    details: DetailLinkItem[]
}

export interface Props {
    data: UserData
}