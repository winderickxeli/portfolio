// Functional
//import text from './EliWinderickxCurriculumVitae.json';

// CSS
import { useEffect, useState } from 'react';
import styles from '../../CSS/styles.module.css';

const CV = () => {
  const [text, setText] = useState<string[]>();

  useEffect(()=>{
    const getText = async () => {
      let respons = await fetch("./EliWinderickxCurriculumVitae.yml");
      let arrText:string[] = await (await (respons.text())).split("\n")
      arrText.map((s,i) => arrText[i] = s + "\n");
      setText(arrText)
    };
    getText();
  },[])

    return (
      <main className={styles.Content} style={{overflow:"hidden"}}>
        <h1>Curriculum Vitae</h1>
        <p>Download gerust mijn CV in <a href="./EliWinderickxCurriculumVitae.json">JSON</a> of in <a href="./EliWinderickxCurriculumVitae.yml">YAML</a> formaat of vindt alle gegevens op <a href='https://www.linkedin.com/in/eli-winderickx-507944223'>LinkedIn</a></p>
              <pre className='code'>
                {text?.map((s,i) => <code key={`line ${i}`}>{s}
                </code> )}
              </pre>
      </main>
    )
  }

export default CV;