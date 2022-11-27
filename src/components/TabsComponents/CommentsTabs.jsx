import React from "react";
import * as Chakra from "@chakra-ui/react";
import * as messageService from "../../services/messageServices.js";
import { useCreateCommentsContexts } from "../../contexts/CommentsContexts/CommentsContexts";
import { useUserContext } from "../../contexts/UserContexts/UserContexts.jsx";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "@chakra-ui/react";

const CommentsTabs = ({ ticketDetailId }) => {
  const { user } = useUserContext();
  const { inputData, setInputData, getAllMessage, setGetAllMessage } =
    useCreateCommentsContexts();
  const toast = useToast();

  const handleSubmit = () => {
    const newMessage = {
      content: inputData,
      ownedBy: {
        name: user.name,
        profile: user.profile,
        email: user.email,
        profilePicture: user.profilePicture,
      },
      ticketId: ticketDetailId,
      tempUUID: uuidv4(),
    };
    messageService.createMessage({ ...newMessage, ownedBy: user.profile });
    setGetAllMessage([...getAllMessage, newMessage]);
    setInputData("");
    createdCommentTost();
  };
  function createdCommentTost() {
    toast({
      position: "bottom-left",
      render: () => (
        <Chakra.Box color="white" p={3} bg="green.500">
          Added Comment
        </Chakra.Box>
      ),
    });
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
};

export default CommentsTabs;
