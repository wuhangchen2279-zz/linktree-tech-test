import React, {useState} from "react";
import {Link} from "../link/link.component";
import {LinkType} from "../link/link.types";
import {Props} from "./expandable-link.types";
import {DetailRow, IconBox, LinkBox, ProviderBox, StyledExpandableBox} from "./expandable-link.styled";

export const ExpandableLink: React.FC<Props> = ({label, detailItems, providerUrl}) => {
    const [expanded, setExpanded] = useState(false);

    const renderDetailLinks = () => {
        return detailItems.map((itm, index) =>
            <DetailRow key={index}>
                {itm.iconUrl && <IconBox><img src={process.env.PUBLIC_URL + itm.iconUrl} alt="icon"/></IconBox>}
                <LinkBox>
                    <Link
                        linkType={LinkType.SECONDARY}
                        label={itm.title}
                        subLabel={itm.subTitle}
                        href={itm.url}
                        status={itm.status}
                    />
                </LinkBox>
            </DetailRow>
        )
    }

    return <>
        <Link linkType={LinkType.PRIMARY} label={label} onClick={() => setExpanded(!expanded)}/>
        {expanded && <StyledExpandableBox>
            {renderDetailLinks()}
            {providerUrl && <ProviderBox><img src={process.env.PUBLIC_URL + providerUrl} alt={'provider'}/></ProviderBox>}
        </StyledExpandableBox>
        }
    </>
}