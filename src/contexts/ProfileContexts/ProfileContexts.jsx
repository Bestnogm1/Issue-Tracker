import React, { createContext, useContext, useEffect, useState } from "react";
import * as profileService from "../../services/profileService";

const CreateUserContexts = createContext(null);
export const useProfileContext = () => useContext(CreateUserContexts);

function ProfileContexts({ children }) {
  const [profile, setProfiles] = useState();

  useEffect(() => {
    profileService.getAllProfiles().then((profiles) => setProfiles(profiles));
  }, []);

  return (
    <CreateUserContexts.Provider value={{ profile, setProfiles }}>
      {children}
    </CreateUserContexts.Provider>
  );
}

export default ProfileContexts;
