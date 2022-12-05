import styles from '../styles.module.css';

import LoremIpsum from 'react-lorem-ipsum';

const Home = () => {
    return (
      <main className={styles.Content}>
        <h1>Hello everyone!</h1>
        <LoremIpsum p={2} />
      </main>
    )
  }

export default Home;