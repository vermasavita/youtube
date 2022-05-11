import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth, usePlaylist } from "../../context";
import { PlaylistCard } from "../Playlist/component/PlaylistComp";
import { SideBar } from "../../components";
import {
  getVideosFromPlaylistHandler,
  removePlaylistHandler,
} from "../../services";
const SinglePlaylist = () => {
  const navigate = useNavigate();
  const [playlist, setPlaylist] = useState(null);
  const {
    authState: { token },
  } = useAuth();
  const { playlistDispatch } = usePlaylist();
  const { playlistId } = useParams();

  const callRemoveFromPlaylistHandler = () => {
    removePlaylistHandler(playlistId, token, playlistDispatch);
    navigate("/playlist");
  };

  useEffect(
    () => getVideosFromPlaylistHandler(playlistId, token, setPlaylist),
    []
  );
  return (
    <>
    <div className="video-listing-container">
      <div>
        <SideBar />
      </div>
      <div className="playlist-div">
        {playlist ? <h1> {playlist.title}: {playlist.videos.length}</h1> : null}
        <button className="btn playlist-btn" onClick={callRemoveFromPlaylistHandler}>
          Delete
        </button>
        <div className="playlist-container">
          {playlist
            ? playlist.videos.map((item) => (
                <PlaylistCard
                  key={item._id}
                  {...item}
                  playlistId={playlistId}
                  setPlaylist={setPlaylist}
                />
              ))
            : null}
        </div>
      </div>
    </div>
    </>
  );
};

export { SinglePlaylist };
