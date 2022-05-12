import axios from "axios";

const removeVideoFromPlaylistHandler = async (
  playlistId,
  videoId,
  token,
  playlistDispatch
) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistId}/${videoId}`,
      { headers: { authorization: token } }
    );

    if (response.status === 200) {
      playlistDispatch({
        type: "REMOVE_VIDEO_FROM_PLAYLISTS",
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

export { removeVideoFromPlaylistHandler };
