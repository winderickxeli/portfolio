// React
import { NavLink } from "react-router-dom";

// Functional
import { IAssignments } from "../Interfaces";

// CSS
import styles from "../CSS/styles.module.css"

const AssignmentHome = ({ArrAssignments}:IAssignments) => {
    return(
        <main>
            <p>Eigen stoef stinkt maar ik zet wel graag enkele zaken in de kijker.</p>
            <div className={styles.Assignments}>
                {ArrAssignments.map((assignments,index) => <article key={index}><NavLink to={`/Assignments/${assignments}`}>{assignments}</NavLink></article>)}
            </div>
        </main>
    )
}

export default AssignmentHome;