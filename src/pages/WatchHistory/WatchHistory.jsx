import { WatchHistoryVideoCard } from "./component/WatchHistoryCard";

const WatchHistory = () => {
    return(
        <>
        <h1>History Videos: 0 <button className="btn">Clear</button></h1>
        <div className="playlist-container">
            <WatchHistoryVideoCard/>
            <WatchHistoryVideoCard/>
            <WatchHistoryVideoCard/>
            <WatchHistoryVideoCard/>
            <WatchHistoryVideoCard/>
         
        </div>
        </>
    )
}

export { WatchHistory};
