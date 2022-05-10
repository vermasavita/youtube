import axios from "axios";
const getLikedVideosHandler = async (token, likeDispatch) => {
  if (token) {
    try {
      const response = await axios.get("/api/user/likes", {
        headers: { authorization: token },
      });

      if (response.status === 200) {
        likeDispatch({
          type: "GET_LIKE",
          payload: response.data.likes,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export { getLikedVideosHandler };
