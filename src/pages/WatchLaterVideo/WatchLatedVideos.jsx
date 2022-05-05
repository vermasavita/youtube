import { WatchLaterVideoCard } from "./component/WatchLaterVideoCard";
import { SideBar } from "../../components";

const WatchLaterVideo = () => {
  return (
    <div className="video-listing-container">
      <div>
        <SideBar />
      </div>
      <div>
        <h1> Watch Later Videos: 0</h1>
        <div className="playlist-container">
          <WatchLaterVideoCard />
          <WatchLaterVideoCard />
          <WatchLaterVideoCard />
        </div>
      </div>
    </div>
  );
};

export { WatchLaterVideo };
