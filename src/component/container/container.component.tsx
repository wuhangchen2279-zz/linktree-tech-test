import React, { useState} from "react";
import {ListContainer, Logo, Profile, Row} from "./container.styled";
import {UserInfo} from "../user-info/user-info.component";
import {Link} from "../link/link.component";
import {LinkType} from "../link/link.types";
import {ThemeProvider} from "styled-components";
import {ExpandableLink} from "../expandable-link/expandable-link.component";
import {LinkItem, Props} from "./container.types";

export const Container: React.FC<Props> = ({data}) => {
    const {username, profileUrl, preference, links} = data;
    const [expandedStates, setExpandedStates] = useState<boolean[]>(() =>
        new Array(
            links.length
        ).fill(false)
    )

    const renderRows = (links: LinkItem[]) => {
        return links.map((itm, idx) => {
             return <Row key={idx}>
                    {
                        !itm.details ?
                            <Link linkType={LinkType.PRIMARY} label={itm.title} href={itm.url}/>
                            : <ExpandableLink
                                label={itm.title}
                                providerUrl={itm.providerUrl}
                                detailItems={itm.details}
                                expanded={expandedStates[idx]}
                                onClick={() => {
                                    setExpandedStates(
                                        expandedStates.map((itm, index) => index === idx)
                                    )
                                }}
                            />
                    }

                </Row>
            }
        )
    }

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
    </ThemeProvider>;
}