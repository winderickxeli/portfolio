import { IQuestionProps } from "../Interfaces";
const TrueFalseQuestion = ({qv, i, setQuizVragen, quizVragen}:IQuestionProps) => {
    const answerQuestion = (a:string) => {
      quizVragen.map((qv, index) => index === i ? qv.answer = a : qv);
      setQuizVragen([...quizVragen]);
    }
  
    return (
      <>
          <label><input type="radio" value="true" onClick={(e) => {answerQuestion("True")}}/>True</label>
          <label><input type="radio" value="false" onClick={(e) => {answerQuestion("False")}}/>False</label>
      </>
    )
    }

    export default TrueFalseQuestion;