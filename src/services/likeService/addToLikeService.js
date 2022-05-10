import axios from "axios";
const addItemToLikedVideos = async (video, token, likeDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/likes",
      { video },
      { headers: { authorization: token } }
    );

    if (response.status === 201) {
      likeDispatch({
        type: "ADD_TO_LIKE",
        payload: response.data.likes,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { addItemToLikedVideos };
