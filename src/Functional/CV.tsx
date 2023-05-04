// React
import React, {useState, useEffect} from 'react';

// Functional
import cv from './EliWinderickxCurriculumVitae.yml'

// CSS
import styles from '../CSS/styles.module.css';

const CV = () => {



    return (
      <main className={styles.Content} style={{overflow:"hidden"}}>
        {cv.map(item => {

        })}
      </main>
    )
  }

export default CV;