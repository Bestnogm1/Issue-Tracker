import { Link } from "react-router-dom";
import * as Chakra from "@chakra-ui/react";
import styles from "./SideBar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { IoLogOutOutline } from "react-icons/io5";
import { MdPersonAddAlt } from "react-icons/md";
import { FiLogIn } from "react-icons/fi";
import CrateTicketModel from "../CreateTicketModel/CreateTicketModel";

const SideBar = ({ user, handleLogout }) => {
  let [firstChar, color] = user.userImage;
  const SidebarContent = () => (
    <Chakra.VStack>
      {user ? (
        <>
          <Chakra.Box
            className={styles.container}
            style={{ background: `rgb(${color})` }}
          >
            <Chakra.Box className={styles.name} id="name">
              {firstChar.toUpperCase()}
            </Chakra.Box>
          </Chakra.Box>
          {/*  */}
          <Chakra.Box pt="1rem">
            <Link to="/">
              <Chakra.Flex direction="column" justify="center">
                <Icon
                  as={AiOutlineHome}
                  color="white"
                  aria-label="Call Sage"
                  fontSize="85px"
                />
                <Chakra.Badge align="center">Home</Chakra.Badge>
              </Chakra.Flex>
            </Link>
          </Chakra.Box>
          <Chakra.Box pt="1rem">
            <CrateTicketModel />
          </Chakra.Box>
          <Chakra.Box pt="1rem">
            <Link to="/" onClick={handleLogout}>
              <Chakra.Flex direction="column" justify="center">
                <Icon
                  as={IoLogOutOutline}
                  color="white"
                  aria-label="Call Sage"
                  fontSize="85px"
                />
                <Chakra.Badge align="center">Logout</Chakra.Badge>
              </Chakra.Flex>
            </Link>
          </Chakra.Box>
        </>
      ) : (
        <>
          <Chakra.Box pt="3rem">
            <Link to="/signup">
              <Chakra.Flex direction="column" justify="center">
                <Icon
                  as={MdPersonAddAlt}
                  color="white"
                  aria-label="Call Sage"
                  fontSize="85px"
                />
                <Chakra.Badge align="center">Signup</Chakra.Badge>
              </Chakra.Flex>
            </Link>
          </Chakra.Box>
          <Chakra.Box pt="3rem">
            <Link to="/login">
              <Chakra.Flex direction="column" justify="center">
                <Icon
                  as={FiLogIn}
                  color="white"
                  aria-label="Call Sage"
                  fontSize="85px"
                />
                <Chakra.Badge align="center">Login</Chakra.Badge>
              </Chakra.Flex>
            </Link>
          </Chakra.Box>
          {/*  */}
        </>
      )}
    </Chakra.VStack>
  );
  return (
    <>
      <Chakra.Box
        position="fixed"
        left={0}
        p={5}
        w="110px"
        top={0}
        h="100%"
        bg="#334746"
        pt="5rem"
        mr="20rem"
      >
        <SidebarContent />
      </Chakra.Box>
      <Chakra.Drawer placement="left">
        <Chakra.DrawerOverlay>
          <Chakra.DrawerContent>
            <Chakra.DrawerCloseButton />
            <Chakra.DrawerBody>
              <SidebarContent />
            </Chakra.DrawerBody>
          </Chakra.DrawerContent>
        </Chakra.DrawerOverlay>
      </Chakra.Drawer>
    </>
  );
};

export default SideBar;
