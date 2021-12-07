import React from "react";
import {Props} from "./music-player.types";
import {AlbumBox, MusicBox} from "./music-player.styled"

// @todo implement music player feature
export const MusicPlayer: React.FC<Props> = ({iconUrl}) => <MusicBox>
            <AlbumBox>
                <img src={process.env.PUBLIC_URL + iconUrl} alt="icon" width="80"/>
            </AlbumBox>
            <img src={process.env.PUBLIC_URL + "/assets/play.svg"} alt="play" width="40"/>
    </MusicBox>
