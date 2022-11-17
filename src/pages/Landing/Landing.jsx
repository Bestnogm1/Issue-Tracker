import Styles from "./Landing.module.css";
import { Link } from "react-router-dom";
import DashBoard from "../../components/DashBoard/DashBoard";
import * as Chakra from "@chakra-ui/react";
const Landing = ({ user }) => {
  return (
    <main className={Styles.container}>
      <>
        {user ? (
          <>
            <DashBoard />
          </>
        ) : (
          <>
            <div className={Styles.LandingBox}>
              <div>
                <h1 className={Styles.LandingHeaders}> Welcome </h1>
              </div>
              <div className={Styles.LandingSighUp}>
                <Link to="/signup">
                  <Chakra.Button>Signup</Chakra.Button>
                </Link>
                <Link to="/login">
                  <Chakra.Button>login</Chakra.Button>
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
