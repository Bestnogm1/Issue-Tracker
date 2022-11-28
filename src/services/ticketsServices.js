import * as tokenService from "./tokenService";
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}api/tickets`;

export const createTickets = async (ticketForm) => {
  const details = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify({ ticketForm }),
  });
  return details.json();
};

export const getAllTickets = async () => {
  const allTickets = await fetch(BASE_URL);
  return allTickets.json();
};

export const deleteOneTickets = async (tempUUID) => {
  const deleteTicket = await fetch(`${BASE_URL}/deleteTicket/${tempUUID}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
  });
  return deleteTicket;
};

export const updateTicketStatus = async (ticketTempUUID, status) => {
  const lobby = await fetch(`${BASE_URL}/updateTicketStatus`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify({ tempUUID: ticketTempUUID, status: status }),
  });

  return lobby;
};
