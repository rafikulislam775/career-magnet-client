import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth } from "../../firebase/firebase_config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [userName, setUserName] = useState(null);
  const [user, setUser] = useState(null);
  console.log(user);
  // add loading state
  const [loading, setLoading] = useState(true);
  //create users  email and password base 01
  const createUsers = (email, password, name) => {
    setLoading(true);
    setUserName(name);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Sign in existing users 02
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // handle google log in 03
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //get the existing user and handle loading errors 04
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  //handle logout
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const authInfo = {
    createUsers,
    userName,
    login,
    googleLogin,
    user,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
