import { NavLink } from 'react-router-dom';
import styles from '../styles.module.css';
const Sidebar = () => {
    return(
      <aside className={styles.Pic}>
          <NavLink className={styles.NavLink} to="/">
            <img src={require("../images/ProfilePic.jpg")} alt="Profile picture" />
          </NavLink>
      </aside>
    );
  }

  export default Sidebar;