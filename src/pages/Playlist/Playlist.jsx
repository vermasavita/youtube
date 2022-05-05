import { PlaylistCard } from "./component/PlaylistComp";
import { DisplayPlaylist } from "./component/DisplayPlaylist";
import { SideBar } from "../../components";

const Playlist = () => {
  return (
    <div className="video-listing-container">
      <div>
        <SideBar />
      </div>
      <div>
        <h1>Playlist</h1>
        <div className="playlist-container">
          <DisplayPlaylist />
          <DisplayPlaylist />
          <DisplayPlaylist />
          <DisplayPlaylist />
          <DisplayPlaylist />
          <DisplayPlaylist />
        </div>
      </div>
    </div>
  );
};

export { Playlist };
