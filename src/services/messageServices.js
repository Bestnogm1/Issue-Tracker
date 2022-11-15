import * as tokenService from "./tokenService";
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/messages`;

async function createMessage(messageForm) {
  const message = await fetch(`${BASE_URL}/createMessage`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify(messageForm),
  });
  return message.json();
}

async function getAllMessages() {
  const messages = await fetch(`${BASE_URL}/getAllMessage`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
  });
  const result = await messages.json();
  return result;
}

export async function deleteOneMessage(id) {
  return fetch(`${BASE_URL}/deleteMessage`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify({ tempUUID: id }),
  }).then((res) => res.json());
}
export { createMessage, getAllMessages, deleteOneMessage as delete };
