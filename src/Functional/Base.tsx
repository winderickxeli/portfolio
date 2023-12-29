// CSS
import { NavLink } from 'react-router-dom';
import styles from '../CSS/styles.module.css';
import Contact from './Contact';

const Base = () => {
    return (
        <main className={styles.Content}>
            <h1>Thanks for dropping by!</h1>
            <p>We're currently undergoing a rougher path causing me to invest less time in this project. Please do check in a while or reach out via the <NavLink to="Contact">Contact form</NavLink> if you have any inquiries. I'm still happy to help in which ever way I can.</p>

            <p>Happy holidays and best wishes for the new year!</p>
            <img src='images/champagne.gif' />
        </main>
    )
}

export default Base;