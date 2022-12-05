import { useState } from "react";
import { useNavigate, NavLink, Outlet } from "react-router-dom";

import { IAssignments } from "../Interfaces";
import styles from '../styles.module.css';

const ExtraCredit = ({ArrAssignments}:IAssignments) => {
    const [selectedAssignment, setSelectedAssignment] = useState<string>("Home");
    const navigate = useNavigate();
    const changeAssignment = (e:React.ChangeEvent<HTMLSelectElement>) => {
      navigate(e.target.value);
    }
  
    return (
      <main className={styles.Content}>
        <h1>Extra Credit Assignments</h1>
        <select onChange={(e) => changeAssignment(e)}>
          <option value="Home">Choose an Assignment</option>
          {ArrAssignments.map((a,i) => <option key={i} value={a}><NavLink to={a}>{a}</NavLink></option>)}
        </select>
        <Outlet />
      </main>
    )
  }

export default ExtraCredit;