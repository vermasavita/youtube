import { Routes, Route } from "react-router-dom";
import './App.css';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar } from "./components/navbar/Navbar";
import { VideoListing } from "./pages/VideoListing/VideoListing";
import { Playlist } from "./pages/Playlist/Playlist";
import { SideBar } from './components/sidebar/Sidebar'
import { LikedVideo } from "./pages/Liked/LikedVideos";
import { WatchLaterVideo } from "./pages/WatchLaterVideo/WatchLatedVideos";
import { WatchHistory } from "./pages/WatchHistory/WatchHistory";
import { Login } from "./pages/Authentication/Login/Login";
import { Signup } from "./pages/Authentication/Signup/Signup";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="colored"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/" element={<VideoListing />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/liked" element ={<LikedVideo/>}/>
        <Route path="/watchlater" element ={<WatchLaterVideo/>}/>
        <Route path="/history" element ={<WatchHistory/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/signup" element ={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;
