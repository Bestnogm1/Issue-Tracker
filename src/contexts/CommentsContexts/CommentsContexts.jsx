import { useToast } from "@chakra-ui/react";
import React, { createContext, useContext, useState, useEffect } from "react";
import * as messageService from "../../services/messageServices.js";
import * as Chakra from "@chakra-ui/react";

const CreateCommentsContexts = createContext(null);
export const useCreateCommentsContexts = () =>
  useContext(CreateCommentsContexts);

const CommentsContexts = ({ children }) => {
  const [inputData, setInputData] = useState("");
  const [getAllMessage, setGetAllMessage] = useState([]);
  const toast = useToast();

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
    toast({
      position: "bottom-left",
      render: () => (
        <Chakra.Box color="white" p={3} bg="red.500">
          Comment Deleted
        </Chakra.Box>
      ),
    });
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
};

export default CommentsContexts;
