import { PlaylistCard } from "./component/PlaylistComp";
import { DisplayPlaylist } from "./component/DisplayPlaylist";

const Playlist = () => {
    return(
        <>
        <h1>Playlist</h1>
        <div className="playlist-container">
            <DisplayPlaylist/>
            <DisplayPlaylist/>
            <DisplayPlaylist/>
            <DisplayPlaylist/>
            <DisplayPlaylist/>
            <DisplayPlaylist/>
        </div>
        </>
    )
}

export { Playlist};
