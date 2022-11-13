import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as messageService from "../../services/messageServices.js";
import { useCreateCommentsContexts } from "../../contexts/CommentsContexts/CommentsContexts";
import { useUserContext } from "../../contexts/UserContexts/UserContexts.jsx";

function CommentsTabs({ ticketDetailId }) {
  const { inputData, setInputData, getAllMessage, setGetAllMessage } =
    useCreateCommentsContexts();
  const { user } = useUserContext();

  function handleSubmit(e) {
    const newMessage = {
      content: inputData,
      ownedBy: { name: user.name },
      ticketId: ticketDetailId,
    };
    messageService.createMessage({ ...newMessage, ownedBy: user.profile });
    setGetAllMessage([...getAllMessage, newMessage]);
    setInputData("");
  }

  return (
    <Chakra.Box>
      <Chakra.Flex direction="column" gap="20px">
        <Chakra.Textarea
          required
          type="text"
          name="description"
          variant="filled"
          placeholder="details"
          resize="none"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <Chakra.Button
          background="lightGreen"
          width="5rem"
          size="sm"
          onClick={() => handleSubmit()}
        >
          Add
        </Chakra.Button>
      </Chakra.Flex>
    </Chakra.Box>
  );
}

export default CommentsTabs;
