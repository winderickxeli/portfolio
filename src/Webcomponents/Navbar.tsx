import { NavLink } from 'react-router-dom';
import styles from '../styles.module.css';
const Navbar = () => {
    return(
      <nav className={styles.Nav}>
          <NavLink className={styles.NavLink} to="/">
            <img src={require("../images/ProfilePic.jpg")} alt="Profile picture" />
          </NavLink>
          <NavLink className={styles.NavLink} to="Me">About me</NavLink>
          <NavLink className={styles.NavLink} to="Assignments">Assignments</NavLink>
          <NavLink className={styles.NavLink} to="ExtraCredit">Extra credits</NavLink>
          <NavLink className={styles.NavLink} to="Contact">Contact me</NavLink>
      </nav>
    );
  }

  export default Navbar;