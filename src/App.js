import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import { VideoListing } from "./pages/VideoListing/VideoListing";
import { Playlist } from "./pages/Playlist/Playlist";
import { SideBar } from './components/sidebar/Sidebar'
import { LikedVideo } from "./pages/Liked/LikedVideos";
import { WatchLaterVideo } from "./pages/WatchLaterVideo/WatchLatedVideos";
import { WatchHistory } from "./pages/WatchHistory/WatchHistory";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/liked" element ={<LikedVideo/>}/>
        <Route path="/watchlater" element ={<WatchLaterVideo/>}/>
        <Route path="/history" element ={<WatchHistory/>}/>
      </Routes>
    </div>
  );
}

export default App;
