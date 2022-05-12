import { WatchLaterVideoCard } from "./component/WatchLaterVideoCard";
import { Navbar, SideBar } from "../../components";
import { useAuth, useWatchLater } from "../../context";
import { toast } from "react-toastify";
import {
  getWatchLaterVideosHandler,
  removeItemFromWatchLaterVideos,
} from "../../services";
import { useEffect } from "react";

const WatchLaterVideo = () => {
  const {
    authState: { token },
  } = useAuth();

  const { watchLaterState, watchLaterDispatch } = useWatchLater();
  const { watchLater } = watchLaterState;

  const callRemoveItemFromWatchLaterVideos = (_id) => {
    removeItemFromWatchLaterVideos(_id, token, watchLaterDispatch);
    toast.info("Removed from Watch Later");
  };

  useEffect(() => getWatchLaterVideosHandler(token, watchLaterDispatch), []);

  return (
    <>
      <Navbar />
      <div className="video-listing-container">
        <div>
          <SideBar />
        </div>
        <div className="playlist-div">
          {watchLater.length !== 0 ? (
            <h1> Watch Later Videos: {watchLater.length}</h1>
          ) : (
            <h1> No Videos in Watch Later</h1>
          )}
          <div className="playlist-container">
            {watchLater.map((watchlaterv) => (
              <WatchLaterVideoCard
                key={watchlaterv._id}
                {...watchlaterv}
                callRemoveItemFromWatchLaterVideos={
                  callRemoveItemFromWatchLaterVideos
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { WatchLaterVideo };
