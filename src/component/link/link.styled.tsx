import styled from "styled-components";
import {LinkCustomStyles} from "./link.types";

export const StyledLink = styled.a`
    width: 100%;
    padding: 10px;
    font-size: 14px;
    color: ${(props: LinkCustomStyles) => props.color};
    text-align: ${(props: LinkCustomStyles) => props.textAlign};
    background: ${(props: LinkCustomStyles) => props.backgroundColor};
    border-radius: 5px;
    display: inline-block;
    text-decoration: none;
    
    &:hover {
      background: ${(props: LinkCustomStyles) => props.hoverColor};
    }
    
`