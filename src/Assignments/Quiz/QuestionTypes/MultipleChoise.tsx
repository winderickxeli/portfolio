import { IQuestionProps } from "../Interfaces";

const MultipleChoise = ({qv, i, setQuizVragen, quizVragen}:IQuestionProps) => {
    let answers: string[] = [qv.correct_answer, ...qv.incorrect_answers];
    answers.sort();
  
    const answerQuestion = (a:string) => {
      quizVragen.map((qv, index) => index === i ? qv.answer = a : qv);
      setQuizVragen([...quizVragen]);
    }
  
    return (
      <>
        <select defaultValue={"Select answer"} onChange={(e) => {answerQuestion(e.target.value)}}>
          <option hidden={true}>Select Answer</option>
          {answers.map((a,i) => <option key={`Optie ${a}`} value={a} dangerouslySetInnerHTML={{__html:a}} />)}
        </select>
      </>
    )
  }

  export default MultipleChoise;