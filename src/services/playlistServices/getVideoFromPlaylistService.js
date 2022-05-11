import axios from "axios";

const getVideosFromPlaylistHandler = async (playlistId, token, setPlaylist) => {
  if (token) {
    try {
      const response = await axios.get(`/api/user/playlists/${playlistId}`, {
        headers: { authorization: token },
      });

      if (response.status === 200) {
        setPlaylist(response.data.playlist)
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  }
};
export { getVideosFromPlaylistHandler };
