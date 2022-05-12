import "./videoCard.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePlaylistModal, useAuth } from "../../context";
import { toast } from "react-toastify";

const VideoCard = ({
  _id,
  title,
  thumbnail,
  channelImg,
  videoLength,
  callAddItemToWatchLaterVideos,
  videos,
}) => {
  const navigate = useNavigate();
  const [actionBox, setActionBox] = useState(false);
  const {
    authState: { token },
  } = useAuth();
  const { playlistModalDispatch } = usePlaylistModal();

  const playlistModal = (event, videoId) => {
    event.stopPropagation();
    if (token) {
      const video = videos.find((item) => item._id === _id);
      playlistModalDispatch({
        type: "OPEN_MODAL",
        payload: { isActive: true, video: video },
      });
      setActionBox(false);
    } else {
      navigate("/login");
      toast.warning("You're not logged in");
    }
  };

  return (
    <div className="video-card-container" key={_id}>
      <div className="video-image" onClick={() => navigate(`/explore/${_id}`)}>
        <img src={thumbnail} alt={title} />
        <div className="video-time">{videoLength}</div>
      </div>
      <div className="video-info">
        <div className="avatar-box">
          <img src={channelImg} alt="avatar image" className="avatar" />
        </div>
        <div className="video-content">{title}</div>
        <div
          className="action-icons"
          onClick={() => setActionBox((prev) => !prev)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon"
            viewBox="0 0 128 512"
          >
            <path d="M64 360C94.93 360 120 385.1 120 416C120 446.9 94.93 472 64 472C33.07 472 8 446.9 8 416C8 385.1 33.07 360 64 360zM64 200C94.93 200 120 225.1 120 256C120 286.9 94.93 312 64 312C33.07 312 8 286.9 8 256C8 225.1 33.07 200 64 200zM64 152C33.07 152 8 126.9 8 96C8 65.07 33.07 40 64 40C94.93 40 120 65.07 120 96C120 126.9 94.93 152 64 152z" />
          </svg>
        </div>
        {actionBox && (
          <div className="action-card">
            <button
              className="action-button btnradius1"
              onClick={() => {
                callAddItemToWatchLaterVideos(_id), setActionBox(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="action-icon"
                viewBox="0 0 384 512"
              >
                <path d="M384 48V512l-192-112L0 512V48C0 21.5 21.5 0 48 0h288C362.5 0 384 21.5 384 48z" />
              </svg>
              <p>Watch Later</p>
            </button>
            <button
              className="action-button btnradius2"
              onClick={(event) => playlistModal(event, _id)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="action-icon"
                viewBox="0 0 448 512"
              >
                <path d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
              </svg>
              <p> Add to Playlist</p>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { VideoCard };
