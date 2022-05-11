import { useContext, createContext, useReducer } from "react";
import { playlistReducer } from "../reducer/playlist-reducer";

const PlaylistContext = createContext(null);

const PlaylistProvider = ({ children }) => {
  const [playlistState, playlistDispatch] = useReducer(playlistReducer, {
    playlists: [],
  });
  return (
    <PlaylistContext.Provider value={{ playlistState, playlistDispatch }}>
      {children}
    </PlaylistContext.Provider>
  );
};

const usePlaylist = () => useContext(PlaylistContext);
export { PlaylistProvider, usePlaylist };
