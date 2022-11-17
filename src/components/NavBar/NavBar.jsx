import * as Chakra from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FaBug } from "react-icons/fa";

const NavBar = () => {
  return (
    <Chakra.Flex bg="#033e38" p={4} color="white" justifyContent="center">
      <Chakra.Center flex="1" h="40px">
        <Chakra.Text fontSize="3rem" fontWeight="bold">
          <Icon
            as={FaBug}
            color="white"
            aria-label="Call Sage"
            fontSize="55px"
          />
          Issue Tracker
        </Chakra.Text>
      </Chakra.Center>
      <Chakra.Box flex="1" />
    </Chakra.Flex>
  );
};

export default NavBar;
