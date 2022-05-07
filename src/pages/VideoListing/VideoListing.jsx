import { SideBar, VideoCard } from "../../components";
import "./videoListing.css";
import { getCategoryHandler, getVideosHandler } from "../../services";
import { useVideoCategory } from "../../context";
import { useState, useEffect } from "react";
import { filterCategoryVideos } from "../../utils/filerCategoryVideos";

const VideoListing = () => {
  const [categories, setCategories] = useState([]);
  const [videos, setvideos] = useState([]);
  const { videoCategoryState, videoCategoryDispatch } = useVideoCategory();

  const { category } = videoCategoryState;

  const callGetVideosAndCategoryHandler = () => {
    getCategoryHandler(setCategories);
    getVideosHandler(setvideos);
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
          <div>
            <button
              className={`btn contained ${category === "" ? "active" : ""}`}
              onClick={() => videoCategoryDispatch({ type: "CLEAR" })}
            >
              All
            </button>
            {categories.map((item) => (
              <button
                className={`btn contained ${category === item.categoryName ? "active" : ""}`}
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
              videoId={video._id}
              videoTitle={video.title}
              videoLength={video.videoLength}
              videothumbnail={video.thumbnail}
              videoCreator={video.creator}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { VideoListing };
