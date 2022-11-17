import * as tokenService from "../services/tokenService";

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}api/profiles`;

export const getAllProfiles = async () => {
  const allProfiles = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  });
  return allProfiles.json();
};
