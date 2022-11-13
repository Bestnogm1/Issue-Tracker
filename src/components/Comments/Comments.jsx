import React from "react";
import * as Chakra from "@chakra-ui/react";
import styles from "./Comments.module.css";
import { useCreateCommentsContexts } from "../../contexts/CommentsContexts/CommentsContexts";
function Comments({ ticketDetailId }) {
  const { getAllMessage } = useCreateCommentsContexts();
  return (
    <Chakra.Box className={styles.CommentsMain}>
      {getAllMessage.map((message, index) => (
        <React.Fragment key={index}>
          {message.ticketId === ticketDetailId ? (
            <Chakra.Box w="100%" className={styles.CommentsComp}>
              <Chakra.Flex direction="row" gap="2rem">
                <Chakra.Text>{message.ownedBy.name}</Chakra.Text>
                <Chakra.Text>1Hour ago</Chakra.Text>
              </Chakra.Flex>
              <Chakra.Box className={styles.Comments}>
                <Chakra.Flex>
                  <Chakra.Text>{message.content}</Chakra.Text>
                </Chakra.Flex>
              </Chakra.Box>
            </Chakra.Box>
          ) : null}
        </React.Fragment>
      ))}
    </Chakra.Box>
  );
}

export default Comments;
