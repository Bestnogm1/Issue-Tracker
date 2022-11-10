import { Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import * as messageService from "../../services/messageServices.js";
import styles from "./Message.module.css";
function Message({ ticketDetail, user, ticket_id }) {
  const [inputData, setInputData] = useState("");
  const [getAllMessage, setGetAllMessage] = useState([]);

  useEffect(() => {
    messageService.getAllMessages().then((res) => setGetAllMessage(res));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const newMessage = {
      content: inputData,
      ownedBy: { name: user.name },
      ticketId: ticket_id,
    };
    messageService.createMessage({ ...newMessage, ownedBy: user.profile });
    setGetAllMessage([...getAllMessage, newMessage]);
    setInputData("");
  }

  return (
    <>
      <div className={styles.MessageMainContainer}>
        <div>
          <textarea
            required="required"
            type="text"
            placeholder="Add A Message"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            className={styles.MessageInput}
          />
          <Button onClick={(e) => handleSubmit(e)}> add a message </Button>
        </div>
        <div>
          {getAllMessage &&
            getAllMessage.map((message) => (
              <React.Fragment key={message._id}>
                {message.ticketId === ticket_id ? (
                  <div>
                    <h1>{message.content}</h1>
                    <h1>{message.ownedBy.name}</h1>
                  </div>
                ) : null}
              </React.Fragment>
            ))}
        </div>
      </div>
    </>
  );
}

export default Message;
