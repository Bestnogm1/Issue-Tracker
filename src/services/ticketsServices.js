import * as tokenService from "./tokenService";
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/tickets`;

export async function createTickets(ticketsDetail) {
  const details = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify(ticketsDetail),
  });
  return details.json();
}

export async function getAllTickets() {
  return fetch(BASE_URL).then((res) => res.json());
}

export async function deleteOneTickets(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
  }).then((res) => res.json());
}

export async function updateTickets(ticketDetails) {
  const lobby = await fetch(`${BASE_URL}/${ticketDetails._id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify(ticketDetails),
  });
  return lobby.json();
}

export async function completedOrNot(ticket) {
  ticket.completed = !ticket.completed;
  let data = await fetch(`${BASE_URL}/${ticket._id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${tokenService.getToken()}`,
    },
    body: JSON.stringify(ticket),
  });
  return data.json();
}

export async function getAllTicketsId(id) {
  const tickets = await fetch(`${BASE_URL}/${id}`);
  const data = await tickets.json();
  return data;
}
