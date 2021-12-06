import React from "react";
import {ListContainer, Logo, Profile, Row, StyledContainer} from "./container.styled";

export const Container: React.FC = () => {
    console.log('aaa');
    return (
        <StyledContainer>
            <Profile>
                test
            </Profile>
            <ListContainer>
                <Row>11</Row>
                <Row>11</Row>
            </ListContainer>
            <Logo>
                <img src={process.env.PUBLIC_URL + '/assets/logo.svg'}/>
            </Logo>
        </StyledContainer>
    );
}