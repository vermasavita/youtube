const playlistModalReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        isActive: true,
        video: action.payload.video,
      };
    case "CLOSE_MODAL":
      return { ...state, isActive: false, video: {} };
    default:
      return state;
  }
};

export { playlistModalReducer };
