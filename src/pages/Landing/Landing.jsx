import Styles from "./Landing.module.css";
import { Link } from "react-router-dom";
import * as Bootstrap from "react-bootstrap";
import DashBoard from "../DashBoard/DashBoard";
import * as Chakra from "@chakra-ui/react";
const Landing = ({
  user,
  allTickets,
  handleDeleteTicket,
  handleGetAllLobby,
  handleCreateTickets,
  completed,
}) => {
  return (
    <main className={Styles.container}>
      <>
        {" "}
        {user ? (
          <>
            {/* <h1>{user.name}</h1> */}
            <DashBoard
              allTickets={allTickets}
              handleDeleteTicket={handleDeleteTicket}
              handleGetAllLobby={handleGetAllLobby}
              handleCreateTickets={handleCreateTickets}
              completed={completed}
            />
          </>
        ) : (
          <>
            <div className={Styles.LandingBox}>
              <div>
                {" "}
                <h1 className={Styles.LandingHeaders}> Welcome </h1>
              </div>
              <div className={Styles.LandingSighUp}>
                <Link to="/signup">
                  <Chakra.Button>Signup</Chakra.Button>{" "}
                </Link>
                <Link to="/login">
                  <Chakra.Button>login</Chakra.Button>{" "}
                </Link>
              </div>
            </div>
          </>
        )}
      </>
    </main>
  );
};

export default Landing;
