import { WatchHistoryVideoCard } from "./component/WatchHistoryCard";
import { SideBar } from "../../components";

const WatchHistory = () => {
  return (
    <div className="video-listing-container">
      <div>
        <SideBar />
      </div>
      <div>
        <h1>
          History Videos: 0 <button className="btn">Clear</button>
        </h1>
        <div className="playlist-container">
          <WatchHistoryVideoCard />
          <WatchHistoryVideoCard />
          <WatchHistoryVideoCard />
          <WatchHistoryVideoCard />
          <WatchHistoryVideoCard />
        </div>
      </div>
    </div>
  );
};

export { WatchHistory };
