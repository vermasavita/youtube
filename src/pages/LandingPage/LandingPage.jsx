import { SideBar } from "../../components";
import { VideoCard } from "../../components";
import "./landing-page.css";
import { FeatureCategoryCard } from "./component/FeatureCategoryCard";
import { categories } from "../../backend/db/categories";
import { videos } from "../../backend/db/videos";
const LandingPage = () => {
  return (
    <div className="video-listing-container">
      <div>
        <SideBar />
      </div>
      <div className="video-listing">
        <div className="featured-category">
          <h1>Featured Cateogories</h1>
          <div className="featured-category-banner">
            {categories.map((item) => (
              <FeatureCategoryCard
                key={item._id}
                itemId={item._id}
                imageSrc={item.imageSrc}
                title={item.categoryName}
              />
            ))}
          </div>
        </div>
        <div className="video-listin-flex">
        {videos.map((video) => (
            <VideoCard
              key={video._id}
              imgSrc={video.imgSrc}
              videoTime={video.time}
              title={video.title}
              creator={video.creator}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { LandingPage };
