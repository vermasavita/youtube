import { LikedVideoCard } from "./component/LikedVideoCard";

const LikedVideo = () => {
    return(
        <>
        <h1>Liked Videos: 0</h1>
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
