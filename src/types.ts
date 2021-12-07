import {DefaultTheme} from "styled-components";

export interface LinkItem {
    title: string,
    url: string,
}

export interface UserData {
    username: string,
    profileUrl: string,
    preference: {
        theme: DefaultTheme
    },
    links: LinkItem[]
}