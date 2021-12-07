import "styled-components";
import {StyledLinkProps, LinkType} from "./component/link/link.types";

declare module "styled-components" {
    export interface DefaultTheme {
        link: {
            [key in LinkType]: StyledLinkProps
        }
    }
}