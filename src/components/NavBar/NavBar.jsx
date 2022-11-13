import { Box, Center, Text, Flex } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex bg="#033e38" p={4} color="white" justifyContent="center">
      <Center flex="1" h="40px">
        <Text fontSize="xl">Page Title</Text>
      </Center>
      <Box flex="1" />
    </Flex>
  );
};

export default NavBar;
