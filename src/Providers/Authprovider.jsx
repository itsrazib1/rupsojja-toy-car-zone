import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password, displayName, photoURL) => {
    setLoading(true);
  
    return createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user;
        // Update user's display name and photo URL
        return updateProfile(user, { displayName, photoURL })
          .then(() => {
            setUser(user);
            setLoading(false);
            return result;
          })
          .catch(error => {
            setLoading(false);
            throw error;
          });
      })
      .catch(error => {
        setLoading(false);
        throw error;
      });
  };
  

const singIn = (email,password,photoURL,displayName)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password ,photoURL,displayName)

}
const logOut = () =>{
  setLoading(true);
  return signOut(auth)

}
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("currentUser", currentUser);
      setLoading(false)
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    singIn,
    logOut
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default Authprovider;
