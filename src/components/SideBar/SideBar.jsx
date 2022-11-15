import { Link } from "react-router-dom";
import * as Chakra from "@chakra-ui/react";
import styles from "./SideBar.module.css";
import { AiOutlineHome } from "react-icons/ai";
import { Icon } from "@chakra-ui/react";
import { CiLogout } from "react-icons/ci";
import CrateTicketModel from "../CreateTicketModel/CreateTicketModel";
const SideBar = ({ user, handleLogout }) => {
  // let [firstChar, color] = user.userImage;
  const SidebarContent = () => (
    <Chakra.VStack>
      {user ? (
        <>
          {/* <Chakra.Box
           className={styles.container}
           style={{ background: `rgb(${color})` }}
         >
           <Chakra.Box className={styles.name} id="name">
             {firstChar.toUpperCase()}
           </Chakra.Box>
         </Chakra.Box> */}
          {/*  */}
          <Chakra.Box>
            <Icon color="white" aria-label="Call Sage" fontSize="55px" />
            <Chakra.Badge variant="outline" fontSize="10px" color="white">
              <CrateTicketModel />
            </Chakra.Badge>
          </Chakra.Box>
          <Link to="/" onClick={handleLogout}>
            <Icon
              as={CiLogout}
              color="white"
              aria-label="Call Sage"
              fontSize="55px"
            />
            <Chakra.Badge variant="outline" fontSize="10px" color="white">
              Logout
            </Chakra.Badge>
          </Link>
          <Link to="/">
            {" "}
            <Chakra.Box>
              <Icon
                as={AiOutlineHome}
                color="white"
                aria-label="Call Sage"
                fontSize="55px"
              />
              <Chakra.Badge variant="outline" fontSize="10px" color="white">
                Home
              </Chakra.Badge>
            </Chakra.Box>
          </Link>
        </>
      ) : (
        <>
          <Link to="/signup">
            <Chakra.Button w="100%">signup</Chakra.Button>
          </Link>
          {/*  */}

          <Link to="/login">
            <Chakra.Button w="100%">Login</Chakra.Button>
          </Link>
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
