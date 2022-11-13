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
  return (
    <CreateCommentsContexts.Provider
      value={{ inputData, setInputData, getAllMessage, setGetAllMessage }}
    >
      {children}
    </CreateCommentsContexts.Provider>
  );
}

export default CommentsContexts;
