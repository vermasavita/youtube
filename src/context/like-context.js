import { useContext, createContext, useReducer } from "react";
import { likeReducer } from "../reducer/like-reducer";

const LikeContext = createContext(null);

const LikeProvider = ({ children }) => {
  const [likeState, likeDispatch] = useReducer(likeReducer, {
    like: [],
  });
  return (
    <LikeContext.Provider value={{ likeState, likeDispatch }}>
      {children}
    </LikeContext.Provider>
  );
};

const useLike = () => useContext(LikeContext);
export { LikeProvider, useLike };
