import React from "react";
import { useFakeApiTesting } from "../../contexts/FakeApiTesting/FakeApiTesting";
import Window from "../Window/Window";
import styles from "./OpenTickets.module.css";
function OpenTickets(props) {
  const { fakeTickets, setFakeTickets } = useFakeApiTesting();

  function dragDropped(e) {
    let grabData = e.dataTransfer.getData("todoId");
    let editTicket = fakeTickets.map((ticket) => {
      if (ticket.id === Number(grabData)) {
        ticket.status = "OpenTickets";
      }
      return ticket;
    });
    setFakeTickets(editTicket);
  }

  const dragHasStarted = (e, id) => {
    e.dataTransfer.setData("todoId", id);
  };

  function draggingOver(e) {
    e.preventDefault();
  }

  return (
    <div className={styles.OpenTickets}>
      <div>OpenTickets</div>
      <div
        className={styles.testAPi3}
        onDrop={(e) => dragDropped(e)}
        droppable="true"
        onDragOver={(e) => draggingOver(e)}
      >
        {fakeTickets.map((tickets) => (
          <React.Fragment key={tickets.id}>
            {tickets.status === "OpenTickets" ? (
              <div
                draggable="true"
                onDragStart={(e) => dragHasStarted(e, tickets.id)}
                className={styles.testAPi}
              >
                <Window name={tickets.context} id={tickets.id} />
                <div></div>
                <h1> {tickets.context}</h1>
              </div>
            ) : null}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default OpenTickets;
