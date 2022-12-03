import Styles from "./Landing.module.css";
import { Link } from "react-router-dom";
import DashBoard from "../../components/DashBoard/DashBoard";
import * as Chakra from "@chakra-ui/react";
const Landing = ({ user }) => {
  return (
    <main className={Styles.container}>
      <>
        <DashBoard />
      </>
    </main>
  );
};

export default Landing;
