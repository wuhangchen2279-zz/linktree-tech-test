import React from 'react'
import {Props} from "./user-info.types";
import {StyledInfoBox, UserNameBox} from "./user-info.styled";

export const UserInfo: React.FC<Props> = ({username, imageUrl}) => {
    return <StyledInfoBox>
        <img src={process.env.PUBLIC_URL + imageUrl} alt="user image"/>
        <UserNameBox>
            @{username}
        </UserNameBox>
    </StyledInfoBox>
}