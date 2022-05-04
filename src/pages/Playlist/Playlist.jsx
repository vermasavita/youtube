import { PlaylistCard } from "./component/PlaylistComp";

const Playlist = () => {
    return(
        <>
        <h1>Playlist</h1>
        <div className="playlist-container">
            <PlaylistCard/>
            <PlaylistCard/>
            <PlaylistCard/>
            <PlaylistCard/>
            <PlaylistCard/>
            <PlaylistCard/>
            <PlaylistCard/>
            <PlaylistCard/>
            <PlaylistCard/>
        </div>
        </>
    )
}

export { Playlist};
