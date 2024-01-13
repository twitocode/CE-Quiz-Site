export interface Question {
  correct?: boolean;
  type: "code-block" | "text";
  answer: string;
  question: string;
  incorrectAnswer?: string
}