import { LikedVideoCard } from "./component/LikedVideoCard";

const LikedVideo = () => {
    return(
        <>
        <h1> 0 Liked Videos</h1>
        <div className="playlist-container">
            <LikedVideoCard/>
            <LikedVideoCard/>
            <LikedVideoCard/>
            <LikedVideoCard/>
            <LikedVideoCard/>
            <LikedVideoCard/>
            <LikedVideoCard/>
            <LikedVideoCard/>
            <LikedVideoCard/>
        </div>
        </>
    )
}

export { LikedVideo};
