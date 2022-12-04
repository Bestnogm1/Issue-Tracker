import Styles from "./Landing.module.css";
import DashBoard from "../../components/DashBoard/DashBoard";
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
