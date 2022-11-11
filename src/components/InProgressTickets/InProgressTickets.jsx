import React from "react";
import styles from "./InProgressTickets.module.css";
import { useFakeApiTesting } from "../../contexts/FakeApiTesting/FakeApiTesting";

function InProgressTickets(props) {
  const { fakeTickets, setFakeTickets } = useFakeApiTesting();
  function dragDropped(e) {
    let grabData = e.dataTransfer.getData("todoId");
    let editTicket = fakeTickets.map((ticket) => {
      if (ticket.id === Number(grabData)) {
        ticket.status = "InProgressTickets";
      }
      return ticket;
    });
    setFakeTickets(editTicket);
  }
  function draggingOver(e) {
    e.preventDefault();
  }
  const dragHasStarted = (e, id) => {
    e.dataTransfer.setData("todoId", id);
  };
  return (
    <div className={styles.InProgressTickets}>
      <h1>InProgressTickets</h1>
      <div>
        {fakeTickets.map((ticket) => (
          <React.Fragment key={ticket.id}>
            {ticket.status === "InProgressTickets" ? (
              <div
                draggable="true"
                droppable="true"
                onDragOver={(e) => draggingOver(e)}
                onDrop={(e) => dragDropped(e)}
                onDragStart={(e) => dragHasStarted(e, ticket.id)}
              >
                <h1> {ticket.context}</h1>
              </div>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default InProgressTickets;
