import { createContext, useContext, useReducer } from "react";
import { videoCategoryReducer } from "../reducer/category-reducer";

const VideoCatgoryContext = createContext(null);

const VideoCatgoryProvider = ({ children }) => {
  const [videoCategoryState, videoCategoryDispatch] = useReducer(
    videoCategoryReducer,
    { category: "" }
  );
  return (
    <VideoCatgoryContext.Provider
      value={{ videoCategoryState, videoCategoryDispatch }}
    >
      {children}
    </VideoCatgoryContext.Provider>
  );
};

const useVideoCategory = () => useContext(VideoCatgoryContext);

export { VideoCatgoryProvider, useVideoCategory};
