import axios from "axios";

const clearHistoryHandler = async (token, historyDispatch) => {
  try {
    const response = await axios.delete(`/api/user/history/all`, {
      headers: { authorization: token },
    });

    if (response.status === 200) {
        historyDispatch({
        type: "CLEAR_HISTORY",
        payload: response.data.history,
      });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
  }
};

export { clearHistoryHandler };
