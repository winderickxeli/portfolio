import { NavLink } from 'react-router-dom';
import styles from '../styles.module.css';
const Navbar = () => {
    return(
      <nav className={styles.Nav}>
          <NavLink className={styles.NavLink} to="/">
            <img src={require("../images/ProfilePic.jpg")} alt="Profile picture" />
          </NavLink>
          <ul>
            <NavLink className={styles.NavLink} to="Me"><li>About me</li></NavLink>
            <NavLink className={styles.NavLink} to="Assignments"><li>Assignments</li></NavLink>
            <NavLink className={styles.NavLink} to="ExtraCredit"><li>Extra credits</li></NavLink>
            <NavLink className={styles.NavLink} to="Contact"><li>Contact me</li></NavLink>
          </ul>
      </nav>
    );
  }

  export default Navbar;