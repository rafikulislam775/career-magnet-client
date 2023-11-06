import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { auth } from "../../firebase/firebase_config";
import {
  GoogleAuthProvider,
  updateProfile,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  // add loading state    //https://i.ibb.co/b7wWRLD/bannerimg-removebg-preview.png
  const [loading, setLoading] = useState(true);
  //   create users  email and password base 01
  const createUsers = async (email, password, photoUrl, name) => {
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(userCredential.user, {
        displayName: name,
        photoURL: photoUrl,
      });

      return userCredential.user;
    } catch (error) {
      console.error("Error creating user or updating user profile: ", error);
      return null;
    }
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
    login,
    googleLogin,
    user,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.object,
};

export default AuthProvider;
