import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navbar, SideBar } from "./components";
import { RequiresAuth } from "./RequiresAuth";
import {
  Login,
  Signup,
  VideoListing,
  Playlist,
  LikedVideo,
  WatchLaterVideo,
  WatchHistory,
  SingleVideoPage,
  SinglePlaylist
} from "./pages";
import { PlaylistModal } from "./pages/Playlist/component/PlaylistModal";
import { usePlaylistModal } from "./context";

function App() {
  const {
    playlistModalState: { isActive },
  } = usePlaylistModal();
  return (
    <div className="App">
      {isActive ? <PlaylistModal /> : null}
      <Routes>
      <Route path="/" element={<VideoListing />} />
      </Routes>
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
        <Route
          path="/playlist"
          element={
            <RequiresAuth>
              <Playlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/liked"
          element={
            <RequiresAuth>
              <LikedVideo />
            </RequiresAuth>
          }
        />
        <Route
          path="/watchlater"
          element={
            <RequiresAuth>
              <WatchLaterVideo />
            </RequiresAuth>
          }
        />
        <Route
          path="/history"
          element={
            <RequiresAuth>
              <WatchHistory />
            </RequiresAuth>
          }
        />
        <Route
          path="/playlist/:playlistId"
          element={
            <RequiresAuth>
              <SinglePlaylist />
            </RequiresAuth>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/explore/:videoId" element={<SingleVideoPage />} />
      </Routes>
    </div>
  );
}

export default App;
