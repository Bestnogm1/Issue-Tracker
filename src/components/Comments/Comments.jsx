import React from "react";
import * as Chakra from "@chakra-ui/react";
import styles from "./Comments.module.css";
function Comments(props) {
  return (
    <Chakra.Box className={styles.CommentsMain}>
      <Chakra.Box w="100%" className={styles.CommentsComp}>
        <Chakra.Flex direction="row" gap="2rem">
          <Chakra.Text>Kevin</Chakra.Text>
          <Chakra.Text>1Hour ago</Chakra.Text>
        </Chakra.Flex>
        <Chakra.Box className={styles.Comments}>
          <Chakra.Flex>
            <Chakra.Text>
              rem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
              sit amet, consectetur adipiscing Lorem ipsum dolor sit amet,
              consectetur adipiscing Lorem ipsum dolor sit amet, consectetur
              adipiscin
            </Chakra.Text>
          </Chakra.Flex>
        </Chakra.Box>
      </Chakra.Box>
    </Chakra.Box>
  );
}

export default Comments;
