import { WatchHistoryVideoCard } from "./component/WatchHistoryCard";
import { Navbar, SideBar } from "../../components";
import { useAuth, useHistory } from "../../context";
import {
  getHistoryVideosHandler,
  removeVideoFromHistoryHandler,
  clearHistoryHandler,
} from "../../services";
import { useEffect } from "react";
import { toast } from "react-toastify";

const WatchHistory = () => {
  const {
    authState: { token },
  } = useAuth();
  const {
    historyState: { history },
    historyDispatch,
  } = useHistory();

  const callRemoveVideoFromHistoryHandler = (_id) => {
    removeVideoFromHistoryHandler(_id, token, historyDispatch);
    toast.info("Removed from History Videos");
  };

  const callClearHistoryHandler = () => {
    clearHistoryHandler(token, historyDispatch);
    toast.info("Removed All");
  };

  useEffect(() => getHistoryVideosHandler(token, historyDispatch), []);
  return (
    <>
      <Navbar />
      <div className="video-listing-container">
        <div>
          <SideBar />
        </div>
        <div className="playlist-div">
          {history.length !== 0 ? (
            <>
              <h1> History Videos: {history.length}</h1>
              <button className="btn" onClick={callClearHistoryHandler}>
                Clear History
              </button>
            </>
          ) : (
            <h1> No Videos in History</h1>
          )}
          <div className="playlist-container">
            {history.map((video) => (
              <WatchHistoryVideoCard
                key={video._id}
                {...video}
                callRemoveVideoFromHistoryHandler={
                  callRemoveVideoFromHistoryHandler
                }
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export { WatchHistory };
