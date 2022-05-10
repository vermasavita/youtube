import axios from "axios";
const removeItemFromLikedVideos = async (_id, token, likeDispatch) => {
  try {
    const response = await axios.delete(`/api/user/likes/${_id}`, {
      headers: { authorization: token },
    });

    if (response.status === 200) {
      likeDispatch({
        type: "REMOVE_FROM_LIKE",
        payload: response.data.likes,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { removeItemFromLikedVideos };
