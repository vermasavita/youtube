import axios from "axios";
const removeVideoFromHistoryHandler = async (_id, token, historyDispatch) => {
  try {
    const response = await axios.delete(`/api/user/history/${_id}`, {
      headers: { authorization: token },
    });

    if (response.status === 200) {
        historyDispatch({
        type: "REMOVE_FROM_HISTORY",
        payload: response.data.history,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { removeVideoFromHistoryHandler };
