import React from 'react';
import {Props} from "./link.types";
import {StyledLink} from "./link.styled";
import {useTheme} from "styled-components";

export const Link: React.FC<Props> = (
    {
        linkType,
        label,
        href
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
        target="_blank">
        {label}
    </StyledLink>
}