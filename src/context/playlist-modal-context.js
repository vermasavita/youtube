import { useContext, createContext, useReducer } from "react";
import { playlistModalReducer } from "../reducer/playlist-modal-reducer";

const PlaylistModalContext = createContext(null);

const PlaylistModalProvider = ({ children }) => {
  const [playlistModalState, playlistModalDispatch] = useReducer(
    playlistModalReducer,
    { isActive: false, video: {} }
  );
  return (
    <PlaylistModalContext.Provider
      value={{ playlistModalState, playlistModalDispatch }}
    >
      {children}
    </PlaylistModalContext.Provider>
  );
};

const usePlaylistModal = () => useContext(PlaylistModalContext);
export { PlaylistModalProvider, usePlaylistModal };
