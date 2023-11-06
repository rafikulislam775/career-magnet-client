import { useContext } from "react";
import { AuthContext } from "../router/AuthProvider/AuthProvider";

const useAuth = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuth;
