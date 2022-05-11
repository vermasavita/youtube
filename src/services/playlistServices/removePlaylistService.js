import axios from "axios";

const removePlaylistHandler = async (playlistId, token, playlistDispatch) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${playlistId}`, {
      headers: { authorization: token },
    });

    if (response.status === 200) {
      playlistDispatch({
        type: "REMOVE_FROM_PLAYLISTS",
        payload: response.data.playlists,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { removePlaylistHandler };
