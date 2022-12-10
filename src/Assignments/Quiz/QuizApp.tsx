import { useState, useEffect } from "react";
import { quizQuestion } from "./Interfaces";
import Question from "./Question";

const QuizApp = () => {
    const [quizVragen, setQuizVragen] = useState<quizQuestion[]>([]);
  
    const loadQuestions = async () => {
      let result = await (await fetch("https://opentdb.com/api.php?amount=10")).json();
      let quizQs:quizQuestion[] = result.results;
  
      setQuizVragen(PrevQs => [...PrevQs,...quizQs]);
    }
    
    useEffect(() => {
      loadQuestions();
    },[])
  
    return (
      <>
        <div style={{backgroundColor:"light gray"}}>
        {quizVragen.map((qv,i) => <Question key={`Vraag ${qv.question}`} qv={qv} i={i} setQuizVragen={setQuizVragen} quizVragen={quizVragen}/> )}
        </div>
        <input type="button" onClick={loadQuestions} value="Load More"/>
      </>
    )
  }

  export default QuizApp;