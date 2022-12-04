import React from "react";
import * as Chakra from "@chakra-ui/react";
import styles from "./Comments.module.css";
import { useCreateCommentsContexts } from "../../contexts/CommentsContexts/CommentsContexts";
import { useUserContext } from "../../contexts/UserContexts/UserContexts";
import dayjs from "dayjs";

const Comments = ({ ticketDetailId }) => {
  const { getAllMessage, handleDeleteComments } = useCreateCommentsContexts();
  const { user } = useUserContext();

  return (
    <Chakra.Box className={styles.CommentsMain}>
      {getAllMessage
        ? getAllMessage?.map((message, index) => (
            <React.Fragment key={index}>
              {message?.ticketId === ticketDetailId ? (
                <Chakra.Box w="100%" className={styles.CommentsComp}>
                  <Chakra.Flex direction="row" gap="2rem">
                    <Chakra.Tooltip
                      label={message?.ownedBy.name}
                      aria-label="A tooltip"
                    >
                      <Chakra.Image
                        borderRadius="full"
                        boxSize="30px"
                        src={message.ownedBy.profilePicture}
                        alt={message.ownedBy.name}
                      />
                    </Chakra.Tooltip>
                    <Chakra.Text>
                      {dayjs().to(dayjs(message.createdAt))}
                    </Chakra.Text>
                  </Chakra.Flex>
                  <Chakra.Box className={styles.Comments}>
                    <Chakra.Flex>
                      <Chakra.Text>{message?.content}</Chakra.Text>
                    </Chakra.Flex>
                  </Chakra.Box>
                  {user ? (
                    message?.ownedBy.email === user.email ? (
                      <Chakra.Button
                        size="small"
                        color="red"
                        variant="link"
                        width="4rem"
                        onClick={() => handleDeleteComments(message?.tempUUID)}
                      >
                        Delete
                      </Chakra.Button>
                    ) : null
                  ) : null}
                </Chakra.Box>
              ) : null}
            </React.Fragment>
          ))
        : null}
    </Chakra.Box>
  );
};

export default Comments;
