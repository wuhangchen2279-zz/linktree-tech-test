import React from 'react';
import {LinkType, Props} from "./link.types";
import {ArrowBox, StatusBox, StyledLink, StyledLinkContainer, StyledLogo} from "./link.styled";
import {useTheme} from "styled-components";

export const Link: React.FC<Props> = (
    {
        linkType,
        label,
        subLabel,
        href,
        onClick,
        status,
        dataCy,
        logoUrl
    }
) => {
    const { link } = useTheme();
    const { textAlign, color, backgroundColor, hoverColor } = link[linkType];
    const logoComponent = logoUrl && <StyledLogo target="_blank" href={href}><img  src={process.env.PUBLIC_URL + logoUrl} alt="logo" /></StyledLogo>
    const labelComponent = <>
        {label}
        <br/>
        {subLabel}
    </>
    const statusComponent = linkType === LinkType.SECONDARY && <StatusBox>
        {
            status
                ? status
                : <ArrowBox>
                    <img src={process.env.PUBLIC_URL + "/assets/arrow.svg"} alt="arrow"/>
                </ArrowBox>
        }
    </StatusBox>
    return <StyledLinkContainer data-cy={dataCy}>
        {logoComponent}
        <StyledLink
            data-cy={dataCy}
            backgroundColor={backgroundColor}
            color={color}
            textAlign={textAlign}
            href={!logoUrl? href : undefined}
            hoverColor={hoverColor}
            target="_blank"
            onClick={logoUrl || linkType === LinkType.PRIMARY ? onClick : undefined}
            disabled={!!status}
            linkType={linkType}>
            {labelComponent}
            {statusComponent}
        </StyledLink>
    </StyledLinkContainer>
}