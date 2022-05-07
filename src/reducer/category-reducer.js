const videoCategoryReducer = (state, action) => {
  switch (action.type) {
    case "SELECT_CATEGORY":
      return { ...state, category: action.payload };
    case "CLEAR":
      return { ...state, category: "" };
    default:
      return category;
  }
};

export { videoCategoryReducer };
