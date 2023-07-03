// React
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

//CSS
import styles from '../CSS/styles.module.css';
import ThemeContext from '../CSS/ThemeContext';

const Navbar = () => {
  const {theme, setTheme} = useContext(ThemeContext);
    return(
      <nav className={styles.Nav}>
          <ul>
            <NavLink className={styles.NavLink} to="Me"><li>About me</li></NavLink>
            <NavLink className={styles.NavLink} to="Assignments/Home"><li>Portfolio</li></NavLink>
            <NavLink className={styles.NavLink} to="CV"><li>Curriculum Vitae</li></NavLink>
            <NavLink className={styles.NavLink} to="Blog"><li>Blog</li></NavLink>
            <NavLink className={styles.NavLink} to="Contact"><li>Contact me</li></NavLink>
          </ul>
      </nav>
    );
  }

  export default Navbar;