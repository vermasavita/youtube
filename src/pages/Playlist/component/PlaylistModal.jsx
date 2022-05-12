import { useState } from "react";
import {
  usePlaylistModal,
  usePlaylist,
  useAuth,
  useWatchLater,
} from "../../../context";
import {
  addItemToWatchLaterVideos,
  addNewPlaylistHandler,
  addVideoToPlaylistHandler,
  removeItemFromWatchLaterVideos,
  removeVideoFromPlaylistHandler,
} from "../../../services";
import { toast } from "react-toastify";
const PlaylistModal = () => {
  const [openCreatePlaylist, setOpenCreatePlaylist] = useState(false);
  const { playlistModalState, playlistModalDispatch } = usePlaylistModal();
  const { video } = playlistModalState;
  const {
    authState: { token },
  } = useAuth();

  const { playlistState, playlistDispatch } = usePlaylist();

  const { playlists } = playlistState;

  const {
    watchLaterState: { watchLater },
    watchLaterDispatch,
  } = useWatchLater();

  const [newPlaylist, setNewPlaylist] = useState({
    title: "",
    description: "haha",
  });

  const playlistNameHandler = (event) => {
    setNewPlaylist({ ...newPlaylist, title: event.target.value });
  };

  const checkPlaylistName = (title) => {
    if (playlists.find((item) => item.title === title)) {
      toast.info("Playlist with the same name exists.");
    } else if (title === "") {
      toast.info("Playlist name is required.");
    } else {
      return true;
    }
  };

  const callNewPlaylistCreator = () => {
    if (checkPlaylistName(newPlaylist.title)) {
      addNewPlaylistHandler(newPlaylist, token, playlistDispatch, video);
      setOpenCreatePlaylist(false);
      
      playlistModalDispatch({ type: "CLOSE_MODAL" });
    }
    setNewPlaylist({ ...newPlaylist, title: "" });
  };

  const checkVideoInPlaylist = (_id) => {
    const playlist = playlists.find((item) => item._id === _id);
    return playlist.videos.some((item) => item._id === video._id);
  };

  const callVideoPlaylistAction = (_id) => {
    if (checkVideoInPlaylist(_id)) {
      removeVideoFromPlaylistHandler(_id, video._id, token, playlistDispatch);
    } else {
      addVideoToPlaylistHandler(_id, video, token, playlistDispatch);
    }
  };

  //watchlater

  const checkVideoInWatchLater = (_id) =>
    watchLater.some((item) => item._id === video._id);

  const callWatchLaterAction = () => {
    if (checkVideoInWatchLater()) {
      removeItemFromWatchLaterVideos(video._id, token, watchLaterDispatch);
    } else {
      addItemToWatchLaterVideos(video, token, watchLaterDispatch);
    }
  };

  return (
    <>
      <div
        className="background"
        onClick={() => playlistModalDispatch({ type: "CLOSE_MODAL" })}
      ></div>

      <div className="playlist-modal-box">
        <div className="playlist-modal-title">
          <div className="modal-title">Save video to...</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="action-icons"
            viewBox="0 0 320 512"
            onClick={() => playlistModalDispatch({ type: "CLOSE_MODAL" })}
          >
            <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
          </svg>
        </div>

        <div className="playlist-modal-container">
          <div className="playlist-one">
            <input
              type="checkbox"
              id="watch-later"
              checked={checkVideoInWatchLater()}
              onChange={callWatchLaterAction}
            />
            <label>Watch Later</label>
          </div>
          {playlists.map(({ _id, title }) => (
            <div className="next-playlist" key={_id}>
              <input
                type="checkbox"
                id={title}
                checked={checkVideoInPlaylist(_id)}
                onChange={() => callVideoPlaylistAction(_id)}
              />
              <label htmlFor={title}>{title}</label>
            </div>
          ))}
        </div>
        {!openCreatePlaylist ? (
          <button
            className="create-playlist-btn"
            onClick={() => setOpenCreatePlaylist(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="playlist-action-icons"
              viewBox="0 0 448 512"
            >
              <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
            </svg>
            <span>Create new playlist</span>
          </button>
        ) : (
          <div className="playlist-ipt-container">
            <input
              type="text"
              className="new-playlist"
              placeholder="Enter Playlist Name"
              required
              value={newPlaylist.title}
              onChange={playlistNameHandler}
            />
            <button className="close-ipt" onClick={callNewPlaylistCreator}>
              Create
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export { PlaylistModal };
