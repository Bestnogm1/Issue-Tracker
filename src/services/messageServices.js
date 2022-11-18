import * as tokenService from "./tokenService";

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}api/messages`;

export const createMessage = async (messageForm) => {
  const message = await fetch(`${BASE_URL}/createMessage`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify(messageForm),
  });
  return message.json();
};

export const getAllMessages = async () => {
  const messages = await fetch(`${BASE_URL}/getAllMessage`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
  });
  return messages.json();
};

export const deleteOneMessage = async (id) => {
  const deleteMessage = await fetch(`${BASE_URL}/deleteMessage`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify({ tempUUID: id }),
  });
  return deleteMessage;
};
