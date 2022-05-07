import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, SideBar } from "./components";
import {
  Login,
  Signup,
  LandingPage,
  VideoListing,
  Playlist,
  LikedVideo,
  WatchLaterVideo,
  WatchHistory,
} from "./pages";

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
        <Route path="/" element={<LandingPage />} />
        <Route path="/videolisting" element={<VideoListing />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/liked" element={<LikedVideo />} />
        <Route path="/watchlater" element={<WatchLaterVideo />} />
        <Route path="/history" element={<WatchHistory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
