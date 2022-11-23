import * as tokenService from "./tokenService";
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}api/tickets`;

export const createTickets = async (ticketForm) => {
  console.log(ticketForm, "coming from ticket services");
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

export const deleteOneTickets = async (id) => {
  const deleteTicket = await fetch(`${BASE_URL}/deleteTicket/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify({ id: id }),
  });
  return deleteTicket.json();
};

export const updateTicketStatus = async (ticketId, status) => {
  const lobby = await fetch(`${BASE_URL}/updateTicketStatus`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ _id: ticketId, status: status }),
  });

  return lobby;
};
