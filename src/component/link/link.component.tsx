import React from 'react';
import {Props} from "./link.types";
import {StyledLink} from "./link.styled";
import {useTheme} from "styled-components";

export const Link: React.FC<Props> = (
    {
        linkType,
        label
    }
) => {
    const { link } = useTheme();
    const { textAlign, color, backgroundColor } = link[linkType];
    return <StyledLink backgroundColor={backgroundColor} color={color} textAlign={textAlign}>{label}</StyledLink>
}