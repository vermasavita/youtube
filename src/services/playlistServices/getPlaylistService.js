import axios from "axios";

const getAllPlaylistsHandler = async (token, playlistDispatch) => {
  if (token) {
    try {
      const response = await axios.get("/api/user/playlists", {
        headers: { authorization: token },
      });

      if (response.status === 200) {
        playlistDispatch({
          type: "GET_PLAYLISTS",
          payload: response.data.playlists,
        });
        return response.data.playlists;
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log();
    }
  }
};

export { getAllPlaylistsHandler };
