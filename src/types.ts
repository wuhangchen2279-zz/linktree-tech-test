import {DefaultTheme} from "styled-components";

export interface DetailLinkItem {
    title: string;
    subTitle?: string;
    status?: string;
    url: string;
}

export interface LinkItem {
    title: string,
    url?: string,
    providerUrl?: string,
    details: DetailLinkItem[]
}

export interface UserData {
    username: string,
    profileUrl: string,
    preference: {
        theme: DefaultTheme
    },
    links: LinkItem[]
}