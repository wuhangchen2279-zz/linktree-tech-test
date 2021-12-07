import React, {useState} from "react";
import {Link} from "../link/link.component";
import {LinkType} from "../link/link.types";
import {Props} from "./expandable-link.types";
import {DetailRow, IconBox, LinkBox, ProviderBox, StyledExpandableBox} from "./expandable-link.styled";
import {SupportedMusicType} from "../music-player/music-player.types";
import {MusicPlayer} from "../music-player/music-player.component";

export const ExpandableLink: React.FC<Props> = ({label, detailItems, providerUrl}) => {
    const [expanded, setExpanded] = useState(false);

    const renderDetailLinks = () => {
        return detailItems.map((itm, index) => {
            const {url, iconUrl, subTitle, status, title} = itm;
            if(url.substring(url.length - 3) === SupportedMusicType.MP3) {
                return <MusicPlayer iconUrl={iconUrl!} musicSrc={url}/>
            } else {
                return <DetailRow>
                    {iconUrl && <IconBox><img src={process.env.PUBLIC_URL + iconUrl} alt="icon"/></IconBox>}
                    <LinkBox>
                        <Link
                            linkType={LinkType.SECONDARY}
                            label={title}
                            subLabel={subTitle}
                            href={url}
                            status={status}
                        />
                    </LinkBox>
                </DetailRow>
            }
        })
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