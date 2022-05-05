import { LikedVideoCard } from "./component/LikedVideoCard";
import { SideBar } from "../../components";

const LikedVideo = () => {
  return (
    <div className="video-listing-container">
      <div>
        <SideBar />
      </div>
      <div>
        <h1>Liked Videos: 0</h1>
        <div className="playlist-container">
          <LikedVideoCard />
          <LikedVideoCard />
          <LikedVideoCard />
          <LikedVideoCard />
          <LikedVideoCard />
          <LikedVideoCard />
          <LikedVideoCard />
          <LikedVideoCard />
          <LikedVideoCard />
        </div>
      </div>
    </div>
  );
};

export { LikedVideo };
