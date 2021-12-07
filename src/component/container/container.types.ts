import {DetailLinkItem} from "../expandable-link/expandable-link.types";

export interface LinkItem {
    title: string,
    url?: string,
    providerUrl?: string,
    details: DetailLinkItem[]
}