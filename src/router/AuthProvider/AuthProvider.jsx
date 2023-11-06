import { createContext } from "react";
import PropTypes from "prop-types";
import { auth } from "../../firebase/firebase_config";
import { createUserWithEmailAndPassword } from "firebase/auth";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [user, setUser] = useState(null);
  // add loading state
  const [loading, setLoading] = useState(true);
  //create users  email and password base 01
  const createUsers = (email, password, name) => {
    setLoading(true);
    setUserName(name);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    createUsers,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
