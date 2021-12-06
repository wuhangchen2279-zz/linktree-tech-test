import React from "react";
import {ListContainer, Logo, Profile, Row, StyledContainer} from "./container.styled";
import {UserInfo} from "../user-info/user-info.component";

export const Container: React.FC = () => {
    console.log('aaa');
    return (
        <StyledContainer>
            <Profile>
                <UserInfo username="test" imageUrl="/assets/profile-picture.png" />
            </Profile>
            <ListContainer>
                <Row>11</Row>
                <Row>11</Row>
            </ListContainer>
            <Logo>
                <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt="logo"/>
            </Logo>
        </StyledContainer>
    );
}