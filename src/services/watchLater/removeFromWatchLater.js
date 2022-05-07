import axios from "axios";

const removeItemFromWatchLaterVideos = async (
  _id,
  token,
  watchLaterDispatch
) => {
  try {
    const response = await axios.delete(`/api/user/watchlater/${_id}`, {
      headers: { authorization: token },
    });

    if (response.status === 200) {
      watchLaterDispatch({
        type: "REMOVE_FROM_WATCHLATER",
        payload: response.data.watchlater,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { removeItemFromWatchLaterVideos };
