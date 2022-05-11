import axios from "axios";

const addVideoToPlaylistHandler = async (
  playlistId,
  video,
  token,
  playlistDispatch
) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistId}`,
      { video },
      { headers: { authorization: token } }
    );
    if (response.status === 201) {
      playlistDispatch({
        type: "ADD_VIDEO_TO_PLAYLISTS",
        payload: {
          playlistId: response.data.playlist._id,
          playlistData: response.data.playlist,
        },
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { addVideoToPlaylistHandler };
