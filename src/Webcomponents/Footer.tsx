import { NavLink } from 'react-router-dom';
import styles from '../styles.module.css'

const Footer = () => {
    return(
      <footer className={styles.Footer}>
        <NavLink to="Contact"><p>&copy; 2022 Eli Winderickx</p></NavLink>
      </footer>
    )
  }

  export default Footer;