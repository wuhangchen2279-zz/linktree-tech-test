import React, {useState} from "react";
import {Link} from "../link/link.component";
import {LinkType} from "../link/link.types";
import {Props} from "./expandable-link.types";
import {DetailRow, LinkBox, ProviderBox, StyledExpandableBox} from "./expandable-link.styled";
import {MusicPlayer} from "../music-player/music-player.component";

export const ExpandableLink: React.FC<Props> = ({label, detailItems, providerUrl, expanded, onClick}) => {
    const [musicSrc, setMusicSrc] = useState<string | undefined>(undefined);
    const [musicIcon, setMusicIcon] = useState<string | undefined>(undefined);
    const [musicName, setMusicName] = useState<string | undefined>(undefined);
    const renderDetailLinks = () => {
        return detailItems.map((itm, index) => {
            const {url, iconUrl, subTitle, status, title, logoUrl} = itm;
            return <DetailRow key={index}  data-cy="detailRow">
                <LinkBox>
                    <Link
                        dataCy={title}
                        linkType={LinkType.SECONDARY}
                        label={title}
                        subLabel={subTitle}
                        status={status}
                        href={url}
                        logoUrl={logoUrl}
                        onClick={() => {
                            setMusicIcon(iconUrl)
                            setMusicSrc(url)
                            setMusicName(label)
                        }}
                    />
                </LinkBox>
            </DetailRow>
        })
    }

    return <>
        <Link linkType={LinkType.PRIMARY} label={label} onClick={onClick}/>
        {expanded && <StyledExpandableBox>
            {musicName && musicSrc && musicIcon && <MusicPlayer
              dataCy="musicBox"
              iconUrl={musicIcon}
              musicSrc={musicSrc}
              name={musicName}
            />}
            {renderDetailLinks()}
            {providerUrl && <ProviderBox><img src={process.env.PUBLIC_URL + providerUrl} alt={'provider'}/></ProviderBox>}
        </StyledExpandableBox>
        }
    </>
}