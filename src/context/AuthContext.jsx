import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { userObserver } from "../auth/firebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
