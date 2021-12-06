import {DefaultTheme} from "styled-components";

export interface UserData {
    username: string,
    profileUrl: string,
    preference: {
        theme: DefaultTheme
    }
}