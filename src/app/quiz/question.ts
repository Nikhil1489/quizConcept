export interface Question {
    id: number;
    number: number;
    title: string;
    quizType: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    correctAnswer: string;
    level:number;
  }
  export const QUESTIONS: Question[] = [
    {
    id: 1, 
    number:1,
    title: "What is the Captital City of Uttar Pradesh?", 
    quizType: "Engineering", 
    optionA: "Ghaziabad", 
    optionB: "Meerut", 
    optionC: "Lucknow", 
    optionD: "Kanpur",
    level: 1,
    correctAnswer: "Lucknow"},
    {
      id: 2, 
      number:2,
      title: "What is the Captital City of England?", 
      quizType: "Engineering", 
      optionA: "London", 
      optionB: "Newyork", 
      optionC: "Berlin", 
      optionD: "Moscow",
      level: 1,
      correctAnswer: "London"}
  ];