//React
import { useContext } from "react";
import { useNavigate, NavLink, Outlet } from "react-router-dom";

import { IAssignments } from "../Interfaces";

import styles from '../CSS/styles.module.css';
import ThemeContext from "../CSS/ThemeContext";

const Portfolio = ({ArrAssignments}:IAssignments) => {
    const navigate = useNavigate();
    const {theme, setTheme} = useContext(ThemeContext);
    const changeAssignment = (e:React.ChangeEvent<HTMLSelectElement>) => {
      navigate(e.target.value);
    }
  
    return (
      <main className={styles.Content}>
        <h2>Portfolio</h2>
        <nav className="ContentMenu">
          <select onChange={(e) => changeAssignment(e)}>
            <option value="Home">Kies een opdracht</option>
            {ArrAssignments.map((a,i) => <option key={i} value={a}><NavLink to={a}>{a}</NavLink></option>)}
          </select>
        </nav>
        <Outlet />
      </main>
    )
  }

export default Portfolio;