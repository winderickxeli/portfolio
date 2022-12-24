//Functional
import Tweakers from './Extras/Tweakers';
import Nasa from './Extras/Nasa';

// CSS
import styles from '../CSS/styles.module.css';

const Home = () => {
    return (
      <main className={styles.Content} style={{width:"70%"}}>
        <h2>Welcome</h2>
        <p>This portfolio is part of an assignment of a course I'm attending. The course Web Frameworks is taught at AP Highschool college and teaches the React Framework. It is part of an Associate degree; Computer Programming. More information can be found on <a href="https://www.ap.be/graduaat/programmeren">the degree's page</a></p>
        <div style={{display:"flex"}}>
          <Tweakers />
          <Nasa />
        </div>
      </main>
    )
  }

export default Home;