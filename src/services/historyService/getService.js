import axios from "axios";
const getHistoryVideosHandler = async (token, historyDispatch) => {
  if (token) {
    try {
      const response = await axios.get("/api/user/history", {
        headers: { authorization: token },
      });

      if (response.status === 200) {
        historyDispatch({
          type: "GET_HISTORY",
          payload: response.data.history,
        });
      } else {
        throw new Error();
      }
    } catch (error) {
      console.log(error);
    }
  }
};

export { getHistoryVideosHandler };
