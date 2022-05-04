import { VideoCard } from "../../components/VideoCard/VideoCard";
// import styles from "./VideoListing.module.css";
import "./videoListing.css"
import { SideBar } from "../../components/sidebar/Sidebar";
const VideoListing = () => {
  return (
    <div className="video-listing-container">
      <div>
        <SideBar />
      </div>
      <div className="video-listing">
        <div className="video-category">
          <button class="btn contained">All</button>
          <button class="btn contained">Non Fiction</button>
          <button class="btn contained">Fiction</button>
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
