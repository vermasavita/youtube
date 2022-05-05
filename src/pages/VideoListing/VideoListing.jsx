import { VideoCard } from "../../components/VideoCard/VideoCard";
import "./videoListing.css";
import { SideBar } from "../../components/sidebar/Sidebar";
const VideoListing = () => {
  return (
    <div className="video-listing-container">
      <div>
        <SideBar />
      </div>
      <div className="video-listing">
        <div className="video-category">
          <button className="btn contained">All</button>
          <button className="btn contained">Non Fiction</button>
          <button className="btn contained">Fiction</button>
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

export { VideoListing };
