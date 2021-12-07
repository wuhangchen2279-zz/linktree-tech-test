import React from 'react';
import {LinkType, Props} from "./link.types";
import {StatusBox, StyledLink, ArrowBox} from "./link.styled";
import {useTheme} from "styled-components";

export const Link: React.FC<Props> = (
    {
        linkType,
        label,
        subLabel,
        href,
        onClick,
        status
    }
) => {
    const { link } = useTheme();
    const { textAlign, color, backgroundColor, hoverColor } = link[linkType];
    return <StyledLink
        backgroundColor={backgroundColor}
        color={color}
        textAlign={textAlign}
        href={href}
        hoverColor={hoverColor}
        target="_blank"
        onClick={onClick}
        disabled={!!status}
        linkType={linkType}>
        <>
            {label}
            <br/>
            {subLabel}
        </>
        {linkType === LinkType.SECONDARY && <StatusBox>
            {status? status : <ArrowBox><img src={process.env.PUBLIC_URL + "/assets/arrow.svg"} alt="arrow"/></ArrowBox>}
        </StatusBox>}
    </StyledLink>
}