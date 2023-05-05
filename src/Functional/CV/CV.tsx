// React
import React, {useState, useEffect} from 'react';

// Functional
import text from './EliWinderickxCurriculumVitae.json';

// CSS
import styles from '../../CSS/styles.module.css';

const CV = () => {

    return (
      <main className={styles.Content} style={{overflow:"hidden"}}>
            <a href='./EliWinderickxCurriculumVitae.yml' style={{textDecoration:"none"}} color='#d5d3c5'>
              <pre><code>{JSON.stringify(text,null,2)}</code></pre>
            </a>
      </main>
    )
  }

export default CV;