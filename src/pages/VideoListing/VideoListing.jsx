import { SideBar, VideoCard } from "../../components";
import "./videoListing.css";
import { toast } from "react-toastify";
import {
  getCategoryHandler,
  getVideosHandler,
  addItemToWatchLaterVideos,
} from "../../services";
import { PlaylistModal } from "../Playlist/component/PlaylistModal";
import {
  useAuth,
  usePlaylistModal,
  useVideoCategory,
  useWatchLater,
} from "../../context";
import { useState, useEffect } from "react";
import { filterCategoryVideos } from "../../utils/filerCategoryVideos";
import { useNavigate } from "react-router-dom";

const VideoListing = () => {
  const navigate = useNavigate();
  const {
    authState: { token },
  } = useAuth();
  const [categories, setCategories] = useState([]);
  const [videos, setvideos] = useState([]);
  const { videoCategoryState, videoCategoryDispatch } = useVideoCategory();
  const { watchLaterDispatch } = useWatchLater();
  
  const { category } = videoCategoryState;

  const callGetVideosAndCategoryHandler = () => {
    getCategoryHandler(setCategories);
    getVideosHandler(setvideos);
  };

  const callAddItemToWatchLaterVideos = (_id) => {
    if (token) {
      const video = videos.find((item) => item._id === _id);
      addItemToWatchLaterVideos(video, token, watchLaterDispatch);
      toast.info("Saved to Watch Later");
    } else {
      navigate("/login");
    }
  };

  useEffect(() => callGetVideosAndCategoryHandler(), []);

  const categoryFilteredVideos = filterCategoryVideos(category, videos);

  return (
      <div className="video-listing-container">
        <div>
          <SideBar />
        </div>
        <div className="video-listing">
          <div className="featured-category">
            <div className="btn-flex">
              <button
                className={`btn contained ${category === "" ? "active" : ""}`}
                onClick={() => videoCategoryDispatch({ type: "CLEAR" })}
              >
                All
              </button>
              {categories.map((item) => (
                <button
                  className={`btn contained ${
                    category === item.categoryName ? "active" : ""
                  }`}
                  key={item._id}
                  onClick={() =>
                    videoCategoryDispatch({
                      type: "SELECT_CATEGORY",
                      payload: item.categoryName,
                    })
                  }
                >
                  {item.categoryName}
                </button>
              ))}
            </div>
          </div>
          <div className="video-listin-flex">
            {categoryFilteredVideos.map((video) => (
              <VideoCard
                key={video._id}
                videos={videos}
                videoId={video._id}
                videoTitle={video.title}
                videoView={video.viewCount}
                subsriber={video.subscriber}
                channelImg={video.channelImg}
                videoLength={video.videoLength}
                videothumbnail={video.thumbnail}
                videoCreator={video.creator}
                callAddItemToWatchLaterVideos={callAddItemToWatchLaterVideos}
              />
            ))}
          </div>
        </div>
      </div>
  );
};

export { VideoListing };
