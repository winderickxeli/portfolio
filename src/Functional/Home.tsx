import styles from '../styles.module.css';

import LoremIpsum from 'react-lorem-ipsum';

const Home = () => {
    return (
      <main className={styles.Content}>
        <h2>Hello everyone!</h2>
        <LoremIpsum p={2} />
      </main>
    )
  }

export default Home;