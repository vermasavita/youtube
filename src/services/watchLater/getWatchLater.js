import axios from "axios";

const getWatchLaterVideosHandler = async (token, watchLaterDispatch) => {
  if (token) {
    try {
      const response = await axios.get("/api/user/watchlater", {
        headers: { authorization: token },
      });

      console.log(response)
      if (response.status === 200) {
        watchLaterDispatch({
          type: "GET_WATCHLATER",
          payload: response.data.watchlater,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(response);
    }
  }
};

export { getWatchLaterVideosHandler };
