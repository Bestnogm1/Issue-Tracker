import React, { createContext, useContext, useState, useEffect } from "react";
import * as messageService from "../../services/messageServices.js";

const CreateCommentsContexts = createContext(null);
export const useCreateCommentsContexts = () =>
  useContext(CreateCommentsContexts);
function CommentsContexts({ children }) {
  const [inputData, setInputData] = useState("");
  const [getAllMessage, setGetAllMessage] = useState([]);

  useEffect(() => {
    messageService.getAllMessages().then((res) => setGetAllMessage(res));
  }, []);

  const handleDeleteComments = (tempUUID) => {
    messageService
      .deleteOneMessage(tempUUID)
      .then(
        setGetAllMessage(
          getAllMessage?.filter((message) => message?.tempUUID !== tempUUID)
        )
      );
  };

  return (
    <CreateCommentsContexts.Provider
      value={{
        inputData,
        getAllMessage,
        setInputData,
        setGetAllMessage,
        handleDeleteComments,
      }}
    >
      {children}
    </CreateCommentsContexts.Provider>
  );
}

export default CommentsContexts;
