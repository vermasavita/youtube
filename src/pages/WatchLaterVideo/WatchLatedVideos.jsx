import { WatchLaterVideoCard } from "./component/WatchLaterVideoCard";

const WatchLaterVideo = () => {
    return(
        <>
        <h1> Watch Later Videos: 0</h1>
        <div className="playlist-container">
            <WatchLaterVideoCard/>
            <WatchLaterVideoCard/>
            <WatchLaterVideoCard/>
            <WatchLaterVideoCard/>
            <WatchLaterVideoCard/>
            <WatchLaterVideoCard/>
            <WatchLaterVideoCard/>
            <WatchLaterVideoCard/>
            <WatchLaterVideoCard/>
        </div>
        </>
    )
}

export { WatchLaterVideo};
