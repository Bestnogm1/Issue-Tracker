import React from "react";
import * as Chakra from "@chakra-ui/react";

function CommentsTabs(props) {
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
        />
        <Chakra.Button background="lightGreen" width="5rem" size="sm">
          Add
        </Chakra.Button>
      </Chakra.Flex>
    </Chakra.Box>
  );
}

export default CommentsTabs;
