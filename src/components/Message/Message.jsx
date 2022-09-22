import React, { useState, useEffect } from "react";

import MessageForm from "../../components/MessageForm/MessageForm.jsx";
import * as messageService from "../../services/messageServices.js";

function Message({ ticketDetail, user, ticketId }) {
  const [messages, setMessages] = useState(null);
  function handleCreateMessage(formData, details) {
    messageService.createMessage(formData, details).then((result) => {
      setMessages([...messages, result]);
    });
  }
  const handleDeleteMessage = (id, ticketId) => {
    messageService
      .deleteOneMessage(id, ticketId)
      .then((deleteOneMessage) =>
        setMessages(
          messages.filter((message) => message?._id !== deleteOneMessage._id)
        )
      );
  };
  useEffect(() => {
    async function fetchData() {
      // console.log("From useEffect: ", ticketId);
      const messages = await messageService.getAllMessages(ticketId);
      return setMessages(messages);
    }
    fetchData();
  }, []);

  return (
    <>
      <button
      // onClick={() => handleDeleteMessage(message?._id, ticketDetails?._id)}
      ></button>

      <MessageForm createMessage={handleCreateMessage} details={ticketDetail} />
    </>
  );
}

export default Message;
