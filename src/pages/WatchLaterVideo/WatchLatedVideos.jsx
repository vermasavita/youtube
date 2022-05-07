import { WatchLaterVideoCard } from "./component/WatchLaterVideoCard";
import { SideBar } from "../../components";
import { useAuth, useWatchLater } from "../../context";
import {
  getWatchLaterVideosHandler,
  removeItemFromWatchLaterVideos,
} from "../../services";
import { useEffect,useState } from "react";

const WatchLaterVideo = () => {
  const {
    authState: { token },
  } = useAuth();
  console.log(token)

  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { watchLater } = watchLaterState;

  const callRemoveItemFromWatchLaterVideos = (_id) => {
    removeItemFromWatchLaterVideos(_id, token, watchLaterDispatch);
  };

  useEffect(() => getWatchLaterVideosHandler(token, watchLaterDispatch), []);

  return (
    <div className="video-listing-container">
      <div>
        <SideBar />
      </div>
      <div>
        <h1> Watch Later Videos: {watchLater.length}</h1>
        <div className="playlist-container">
          {watchLater.map((watchlaterv) => (
            <WatchLaterVideoCard
              key={watchlaterv._id}
              watchlaterId={watchlaterv._id}
              watchlaterTitle={watchlaterv.title}
              watchlaterThumbnail={watchlaterv.thumbnail}
              watchlaterCreator={watchlaterv.creator}
              callRemoveItemFromWatchLaterVideos={
                callRemoveItemFromWatchLaterVideos
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export { WatchLaterVideo };
