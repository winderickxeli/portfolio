import { IQuestionProps } from "./Interfaces";
import MultipleChoise from "./QuestionTypes/MultipleChoise";
import TrueFalseQuestion from "./QuestionTypes/TrueFalseQuestion";
import styles from "./Question.module.css";

const Question = ({qv, i, setQuizVragen, quizVragen}: IQuestionProps) => {
  const parser = new DOMParser();
  let question = parser.parseFromString(`<p>${qv.question}</p>`, 'text/html');
    if(qv.answer == undefined){
      if(qv.type === "multiple") {
        return (
          <div className="Question">
            <p dangerouslySetInnerHTML={{ __html: qv.question }} />
            <MultipleChoise qv={qv} i={i} setQuizVragen={setQuizVragen} quizVragen={quizVragen}/>
          </div>
        )
      } else if(qv.type === "boolean") {
        return (
          <>
          <p dangerouslySetInnerHTML={{ __html: qv.question }} />
          <TrueFalseQuestion qv={qv} i={i} setQuizVragen={setQuizVragen} quizVragen={quizVragen}/>
          </>
        )
      } else {
        return (
            <>
                <p>Questiontype not supported</p>
            </>
        )
      }
    } else {
      if(qv.answer === qv.correct_answer){
        return (
          <div className={styles.correct}>
            <p dangerouslySetInnerHTML={{ __html: qv.question }} />
            <p dangerouslySetInnerHTML={{__html: `You answered ${qv.correct_answer} which is the correct answer`}} />
          </div>
        )
      } else {
        return (
          <div className={styles.incorrect}>
            <p dangerouslySetInnerHTML={{ __html: qv.question }} />
            <p dangerouslySetInnerHTML={{__html: `You answered ${qv.answer} and the correct answer was ${qv.correct_answer}`}} />
          </div>
        )
      }
      
    }
    
  }

export default Question;