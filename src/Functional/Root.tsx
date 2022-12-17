import { Outlet } from 'react-router-dom';

// CSS
import styles from '../styles.module.css';

// Web componenten
import Navbar from '../Webcomponents/Navbar';
import Sidebar from '../Webcomponents/Sidebar';
import Header from '../Webcomponents/Header';
import Footer from '../Webcomponents/Footer';

const Root = () => {
    return (
      <div className={styles.Container}>
        <Sidebar />
        <Navbar />
        <Header />
        <Outlet />
        <Footer />
      </div>
    )
  }

export default Root;