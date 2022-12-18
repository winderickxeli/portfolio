import { NavLink } from 'react-router-dom';
import styles from '../CSS/styles.module.css';
const Navbar = () => {
    return(
      <nav className={styles.Nav}>
          <ul>
            <NavLink className={styles.NavLink} to="Me"><li>About me</li></NavLink>
            <NavLink className={styles.NavLink} to="Assignments"><li>Portfolio</li></NavLink>
            <NavLink className={styles.NavLink} to="CV"><li>Curriculum Vitae</li></NavLink>
            <NavLink className={styles.NavLink} to="Contact"><li>Contact me</li></NavLink>
          </ul>
      </nav>
    );
  }

  export default Navbar;