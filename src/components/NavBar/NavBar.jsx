import { style } from "@mui/system";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <div className={styles.divNav}>
        {user ? (
          <nav className={styles.navBar}>
            <ul>
              <li className={styles.sidebarTags}>Welcome, {user.name}</li>
              <li className={styles.sidebarTags}>
                <Link to="/CreateTickets">Create</Link>
              </li>
              <li className={styles.sidebarTags}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.sidebarTags}>
                <Link to="/profiles">Profiles</Link>
              </li>
              <li className={styles.sidebarTags}>
                <Link to="" onClick={handleLogout}>
                  LOG OUT
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <nav>
            <ul>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </>
  );
};

export default NavBar;
