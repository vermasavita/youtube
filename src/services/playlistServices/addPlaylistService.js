import axios from "axios";
import { addVideoToPlaylistHandler } from "./addVideoToPlaylistService";
import { getAllPlaylistsHandler } from "./getPlaylistService";

const addNewPlaylistHandler = async (
  playlist,
  token,
  playlistDispatch,
  video
) => {
  try {
    const response = await axios.post(
      "/api/user/playlists",
      { playlist },
      { headers: { authorization: token } }
    );

    if (response.status === 201) {
      playlistDispatch({
        type: "ADD_NEW_PLAYLISTS",
        payload: response.data.playlists,
      });

      const playlists = await getAllPlaylistsHandler(token, playlistDispatch);
      const newPlaylist = playlists.find(
        (item) => item.title === playlist.title
      );

      addVideoToPlaylistHandler(
        newPlaylist._id,
        video,
        token,
        playlistDispatch
      );
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { addNewPlaylistHandler };
