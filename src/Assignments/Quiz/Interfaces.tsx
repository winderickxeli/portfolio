export interface quizQuestion {
    categorie: string,
    type: string,
    difficulty: string,
    question: string,
    correct_answer: string,
    incorrect_answers:string[]
    answer?:string
}
  
export interface IQuestionProps {
    qv: quizQuestion,
    i: number,
    setQuizVragen: (quizVragen:quizQuestion[]) => void
    quizVragen: quizQuestion[]
}