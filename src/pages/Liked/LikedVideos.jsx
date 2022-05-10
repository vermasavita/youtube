import { LikedVideoCard } from "./component/LikedVideoCard";
import { SideBar } from "../../components";
import {
  getLikedVideosHandler,
  removeItemFromLikedVideos,
} from "../../services";
import { useLike, useAuth } from "../../context";
import { useEffect } from "react";

const LikedVideo = () => {
  const {
    authState: { token },
  } = useAuth();
  const {
    likeState: { like },
    likeDispatch,
  } = useLike();

  const callRemoveItemFromLikedVideos = (_id) => {
    removeItemFromLikedVideos(_id, token, likeDispatch);
    toast.info("Removed from Liked Videos");
  };

  useEffect(() => getLikedVideosHandler(token, likeDispatch), []);
  return (
    <div className="video-listing-container">
      <div>
        <SideBar />
      </div>
      <div>
        {like.length !== 0 ? (
          <h1> Liked Videos: {like.length}</h1>
        ) : (
          <h1> No Liked Videos</h1>
        )}
        <div className="playlist-container">
          {like.map((video) => (
            <LikedVideoCard
              key={video._id}
              likedVideoId={video._id}
              likedVideoTitle={video.title}
              likedVideoThumbnail={video.thumbnail}
              likedVideoCreator={video.creator}
              callRemoveItemFromLikedVideos={callRemoveItemFromLikedVideos}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { LikedVideo };
