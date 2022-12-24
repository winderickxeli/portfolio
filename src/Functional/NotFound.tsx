// React
import { NavLink } from "react-router-dom";

// CSS
import styles from "../CSS/styles.module.css";

const NotFound = () => {
    return (
        <main className={styles.Content}>
            <h2>Space is the final frontier</h2>
            <p>But you seem to have taken a wrong turn. Let me get you back or use the searchbar to find the page you're looking for.</p>
            <p style={{fontSize:"102px"}}>&#128406;ERROR 404&#128406;</p> 
            <NavLink to="/">TAKE ME HOME!!</NavLink>
        </main>   
    )
}

export default NotFound;