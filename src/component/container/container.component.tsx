import React from "react";
import {ListContainer, Logo, Profile, Row, StyledContainer} from "./container.styled";
import {UserInfo} from "../user-info/user-info.component";
import {Link} from "../link/link.component";
import {LinkType} from "../link/link.types";
import useData from "../../hooks/useData";
import {LinkItem, UserData} from "../../types";
import {LoadingSpin} from "../loading-spin/loading-spin.component";
import {Error} from "../error/error.component";
import {ThemeProvider} from "styled-components";

export const Container: React.FC = () => {
    const [ loading, data, error] = useData<UserData>('user.json');

    const renderRows = (links: LinkItem[]) => {
        return links.map((itm, idx) =>
            <Row key={idx}>
                <Link linkType={LinkType.PRIMARY} label={itm.title} href={itm.url}/>
            </Row>
        )
    }

    const renderContent = () => {
        if(loading) {
            return <LoadingSpin />
        } else {
            if(error) {
                return <Error />
            } else {
                const {username, profileUrl, preference, links} = data!;
                return <ThemeProvider theme={preference.theme}>
                    <Profile>
                        <UserInfo username={username} imageUrl={profileUrl} />
                    </Profile>
                    <ListContainer>
                        {renderRows(links)}
                    </ListContainer>
                    <Logo>
                        <img src={process.env.PUBLIC_URL + '/assets/logo.svg'} alt="logo"/>
                    </Logo>
                </ThemeProvider>
            }
        }
    }
    return (
        <StyledContainer>
            {renderContent()}
        </StyledContainer>
    );
}