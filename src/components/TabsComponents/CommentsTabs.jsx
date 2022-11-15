import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as messageService from "../../services/messageServices.js";
import { useCreateCommentsContexts } from "../../contexts/CommentsContexts/CommentsContexts";
import { useUserContext } from "../../contexts/UserContexts/UserContexts.jsx";
import { v4 as uuidv4 } from "uuid";
function CommentsTabs({ ticketDetailId }) {
  const { inputData, setInputData, getAllMessage, setGetAllMessage } =
    useCreateCommentsContexts();
  const { user } = useUserContext();
  console.log(user);
  console.log(getAllMessage);
  function handleSubmit(e) {
    const newMessage = {
      content: inputData,
      ownedBy: { name: user.name, profile: user.profile, email: user.email },
      ticketId: ticketDetailId,
      tempUUID: uuidv4(),
    };

    messageService.createMessage({ ...newMessage, ownedBy: user.profile });
    setGetAllMessage([...getAllMessage, newMessage]);

    console.log(getAllMessage);
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
