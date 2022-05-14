import { DisplayPlaylist } from "./component/DisplayPlaylist";
import { Navbar, SideBar } from "../../components";
import { useAuth, usePlaylist } from "../../context";
import { getAllPlaylistsHandler } from "../../services";
import { useEffect } from "react";

const Playlist = () => {
  const {
    authState: { token },
  } = useAuth();
  const { playlistState, playlistDispatch } = usePlaylist();
  const { playlists } = playlistState;

  useEffect(() => getAllPlaylistsHandler(token, playlistDispatch), []);

  return (
    <>
    <Navbar/>
    <div className="video-listing-container">
      <div>
        <SideBar />
      </div>
      <div className="playlist-div">
        <h1>My Playlist: ({playlists.length} Playlist)</h1>
        <div className="playlist-container">
          {playlists.map((item) => (
            <DisplayPlaylist key={item._id} {...item} />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export { Playlist };
