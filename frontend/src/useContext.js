import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const getUser = () => {
    let user = sessionStorage.getItem("user");
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  const getCurrentUser = () => {
    let user = sessionStorage.getItem("user");
    if (user) {
      return JSON.parse(user);
    } else {
      return {};
    }
  };

  const [currentUser, setCurrentUser] = useState(getCurrentUser());
  const [loggedin, setLoggedin] = useState(getUser());

  return (
    <UserContext.Provider
      value={{
        loggedin,
        setLoggedin,
        currentUser,
        setCurrentUser,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
