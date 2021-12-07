import styled from "styled-components";
import {LinkType, StyledLinkProps} from "./link.types";

export const StyledLink = styled.a`
    width: 100%;
    padding: 10px;
    font-size: 14px;
    color: ${({color}: StyledLinkProps) => color};
    text-align: ${({textAlign}: StyledLinkProps) => textAlign};
    background: ${({backgroundColor}: StyledLinkProps) => backgroundColor};
    border-radius: ${({linkType}: StyledLinkProps) => linkType === LinkType.PRIMARY && '5px'};
    border-bottom: ${({linkType}: StyledLinkProps) => linkType === LinkType.SECONDARY && '1px solid #F2F2F2'};
    text-decoration: none;
    display: ${({linkType}: StyledLinkProps) => linkType === LinkType.SECONDARY ? 'flex' : 'inline-block'};
    align-items: center;
    pointer-events: ${({disabled}: StyledLinkProps) => disabled && 'none'};
    
    &:hover {
      background: ${({hoverColor}: StyledLinkProps) => hoverColor};
    }
`

export const StyledLogo = styled.a`
  margin-right: 20px;
`

export const StyledLinkContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`

export const StatusBox = styled.div`
    margin-left: auto;
    `

export const ArrowBox = styled.div`
    transform: rotate(270deg);
    `