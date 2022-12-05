import styles from '../styles.module.css';

import LoremIpsum from 'react-lorem-ipsum';

const Contact = () => {
    return (
      <main className={styles.Content}>
        <h1>Contact</h1>
        <LoremIpsum p={2} />
      </main>
    )
  }

export default Contact;