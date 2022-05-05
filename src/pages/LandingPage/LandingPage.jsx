import { SideBar } from "../../components";
import { VideoCard } from "../../components";
import './landing-page.css';
import { FeatureCategoryCard } from "./component/FeatureCategoryCard";
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
              <FeatureCategoryCard/>
              <FeatureCategoryCard/>
              <FeatureCategoryCard/>
              <FeatureCategoryCard/>
              <FeatureCategoryCard/>
          </div>
        </div>
        <div className="video-listin-flex">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </div>
  );
};

export { LandingPage };
