// React
import { NavLink } from "react-router-dom";

// Functional
import { IAssignments } from "../Interfaces";

// CSS
import styles from "../CSS/styles.module.css"

const AssignmentHome = ({ArrAssignments}:IAssignments) => {
    return(
        <main>
            <p>In here you'll find a selection of the assignments we've made during the past semester. Select an option in the list above or one of the options below and enjoy!</p>
            <div className={styles.Assignments}>
                {ArrAssignments.map((assignments,index) => <article key={index}><NavLink to={`/Assignments/${assignments}`}>{assignments}</NavLink></article>)}
            </div>
        </main>
    )
}

export default AssignmentHome;