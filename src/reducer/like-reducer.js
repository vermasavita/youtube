const likeReducer = (state, action) => {
  switch (action.type) {
    case "GET_LIKE":
      return { ...state, like: action.payload };
    case "ADD_TO_LIKE":
      return { ...state, like: action.payload };
    case "REMOVE_FROM_LIKE":
      return { ...state, like: action.payload };
    default:
      return state;
  }
};

export { likeReducer };
