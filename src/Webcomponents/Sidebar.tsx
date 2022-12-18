import { NavLink } from 'react-router-dom';
import styles from '../CSS/styles.module.css';
const Sidebar = () => {
    return(
      <aside className={styles.Pic}>
          <NavLink className={styles.NavLink} to="/">
            <img src={require("../images/ProfilePic.jpg")} alt=""/>
          </NavLink>
      </aside>
    );
  }

  export default Sidebar;