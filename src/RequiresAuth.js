import { useAuth } from "./context";

const RequiresAuth = ({ children }) => {
  const {
    authState: { token },
  } = useAuth();

  return token ? children : null;
};

export { RequiresAuth };
