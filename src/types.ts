import {DefaultTheme} from "styled-components";
import {LinkItem} from "./component/container/container.types";

export interface UserData {
    username: string,
    profileUrl: string,
    preference: {
        theme: DefaultTheme
    },
    links: LinkItem[]
}