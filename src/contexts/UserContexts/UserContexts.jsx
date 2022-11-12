import React, { createContext, useContext, useState } from "react";
import * as authService from "../../services/authService";
import { useNavigate } from "react-router-dom";

const CreateUserContexts = createContext(null);

export const useUserContext = () => useContext(CreateUserContexts);

const UserContexts = ({ children }) => {
  const [user, setUser] = useState(authService.getUser());

  return (
    <CreateUserContexts.Provider value={{ user, setUser }}>
      {children}
    </CreateUserContexts.Provider>
  );
};

export default UserContexts;
