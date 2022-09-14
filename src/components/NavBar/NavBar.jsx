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
              <li>Welcome,{user.name}</li>
              <li>
                <Link to="/profiles">Profiles</Link>
              </li>
              <li>
                <Link to="" onClick={handleLogout}>
                  LOG OUT
                </Link>
              </li>
              <li>
                <Link to="/changePassword">Change Password</Link>
              </li>
              <li>
                <Link to="/CreateTickets">Create</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
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
