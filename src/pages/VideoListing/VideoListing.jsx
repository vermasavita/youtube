import { Navbar, SideBar, VideoCard } from "../../components";
import "./videoListing.css";
import { toast } from "react-toastify";
import {
  getCategoryHandler,
  getVideosHandler,
  addItemToWatchLaterVideos,
} from "../../services";
import { useAuth, useVideoCategory, useWatchLater } from "../../context";
import { useState, useEffect } from "react";
import { filterCategoryVideos } from "../../utils/filerCategoryVideos";
import { searchFilter } from "../../utils/searchFilter";
import { useNavigate } from "react-router-dom";

const VideoListing = () => {
  const navigate = useNavigate();
  const {
    authState: { token },
  } = useAuth();
  const [categories, setCategories] = useState([]);
  const [videos, setvideos] = useState([]);
  const [videoLoader, setVideoLoader] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { videoCategoryState, videoCategoryDispatch } = useVideoCategory();
  const { watchLaterDispatch } = useWatchLater();

  const { category } = videoCategoryState;

  const callGetVideosAndCategoryHandler = () => {
    getCategoryHandler(setCategories);
    getVideosHandler(setvideos, setVideoLoader);
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
  const searchVideos = searchFilter(categoryFilteredVideos, searchQuery);

  return (
    <>
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="video-listing-container">
        <div>
          <SideBar />
        </div>
        {videoLoader ? (
          <h1>Loading...</h1>
        ) : (
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
              {searchVideos.map((video) => (
                <VideoCard
                  key={video._id}
                  {...video}
                  videos={videos}
                  callAddItemToWatchLaterVideos={callAddItemToWatchLaterVideos}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export { VideoListing };
