import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../firebase/auth/auth.listener.jsx";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState("Patrick");
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    onAuthStateChangedListener(async (users) => {
      setCurrentUser(users);
    });
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};