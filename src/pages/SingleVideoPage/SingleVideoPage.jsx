import "./single-video-page.css";
import ReactPlayer from "react-player";
import { ExploreVideo } from "./component/ExploreVideo";
import { SideBar } from "../../components";
import { useParams } from "react-router-dom";
import { getSingleVideoHandler, addItemToWatchLaterVideos } from "../../services";
import { useState, useEffect } from "react";
import { useAuth, useWatchLater } from "../../context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SingleVideoPage = () => {
  const navigate  = useNavigate();
  const { videoId } = useParams();
  const [singleVideo, setSingleVideo] = useState({});
  const {
    authState: { token },
  } = useAuth();
  const {
    watchLaterState: { watchLater },
    watchLaterDispatch,
  } = useWatchLater();

  const callAddItemToWatchLaterVideos = (_id) => {
    if (token) {
      addItemToWatchLaterVideos(singleVideo, token, watchLaterDispatch);
      toast.info("Saved to Watch Later");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => getSingleVideoHandler(videoId, setSingleVideo), []);

  return (
    <div className="video-listing-container">
      <div>
        <SideBar />
      </div>
      <div className="single-video-container">
        <div className="video-play-box">
          <div className="video-player">
            <ReactPlayer
              width="100%"
              height="100%"
              url={`https://www.youtube.com/embed/${singleVideo.youtubeId}`}
              controls="true"
            />
          </div>
          <div className="video-title">{singleVideo.title}</div>
          <div className="single-video-info">
            <p className="total-view">{singleVideo.viewCount}</p>
            <div className="action-items">
              <button className="action-btns">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="action-icons"
                  viewBox="0 0 512 512"
                >
                  <path d="M96 191.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64c17.67 0 32-14.33 32-31.1V223.1C128 206.3 113.7 191.1 96 191.1zM512 227c0-36.89-30.05-66.92-66.97-66.92h-99.86C354.7 135.1 360 113.5 360 100.8c0-33.8-26.2-68.78-70.06-68.78c-46.61 0-59.36 32.44-69.61 58.5c-31.66 80.5-60.33 66.39-60.33 93.47c0 12.84 10.36 23.99 24.02 23.99c5.256 0 10.55-1.721 14.97-5.26c76.76-61.37 57.97-122.7 90.95-122.7c16.08 0 22.06 12.75 22.06 20.79c0 7.404-7.594 39.55-25.55 71.59c-2.046 3.646-3.066 7.686-3.066 11.72c0 13.92 11.43 23.1 24 23.1h137.6C455.5 208.1 464 216.6 464 227c0 9.809-7.766 18.03-17.67 18.71c-12.66 .8593-22.36 11.4-22.36 23.94c0 15.47 11.39 15.95 11.39 28.91c0 25.37-35.03 12.34-35.03 42.15c0 11.22 6.392 13.03 6.392 22.25c0 22.66-29.77 13.76-29.77 40.64c0 4.515 1.11 5.961 1.11 9.456c0 10.45-8.516 18.95-18.97 18.95h-52.53c-25.62 0-51.02-8.466-71.5-23.81l-36.66-27.51c-4.315-3.245-9.37-4.811-14.38-4.811c-13.85 0-24.03 11.38-24.03 24.04c0 7.287 3.312 14.42 9.596 19.13l36.67 27.52C235 468.1 270.6 480 306.6 480h52.53c35.33 0 64.36-27.49 66.8-62.2c17.77-12.23 28.83-32.51 28.83-54.83c0-3.046-.2187-6.107-.6406-9.122c17.84-12.15 29.28-32.58 29.28-55.28c0-5.311-.6406-10.54-1.875-15.64C499.9 270.1 512 250.2 512 227z" />
                </svg>
                <span>Like</span>
              </button>
              <button
                className="action-btns"
                onClick={() => callAddItemToWatchLaterVideos(singleVideo._id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="action-icons"
                  viewBox="0 0 384 512"
                >
                  <path d="M336 0h-288C21.49 0 0 21.49 0 48v431.9c0 24.7 26.79 40.08 48.12 27.64L192 423.6l143.9 83.93C357.2 519.1 384 504.6 384 479.9V48C384 21.49 362.5 0 336 0zM336 452L192 368l-144 84V54C48 50.63 50.63 48 53.1 48h276C333.4 48 336 50.63 336 54V452z" />
                </svg>
                <span>Watch Later</span>
              </button>
              <button className="action-btns">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="action-icons"
                  viewBox="0 0 512 512"
                >
                  <path d="M447.1 96h-172.1L226.7 50.75C214.7 38.74 198.5 32 181.5 32H63.1c-35.35 0-64 28.66-64 64v320c0 35.34 28.65 64 64 64h384c35.35 0 64-28.66 64-64V160C511.1 124.7 483.3 96 447.1 96zM463.1 416c0 8.824-7.178 16-16 16h-384c-8.822 0-16-7.176-16-16V96c0-8.824 7.178-16 16-16h117.5c4.273 0 8.293 1.664 11.31 4.688L255.1 144h192c8.822 0 16 7.176 16 16V416z" />
                </svg>
                <span>Save</span>
              </button>
            </div>
          </div>
          <div className="channel-intro">
            <div className="avatar-box">
              <img
                src={singleVideo.channelImg}
                alt="avatar image"
                className="avatar"
              />
            </div>
            <div className="channel-name">
              <h3>{singleVideo.creator}</h3>
              <span>{singleVideo.subscriber}</span>
            </div>
          </div>
        </div>
        <div className="explore-video">
          <ExploreVideo />
        </div>
      </div>
    </div>
  );
};

export { SingleVideoPage };
