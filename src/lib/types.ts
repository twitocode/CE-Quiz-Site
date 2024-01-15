export interface Question {
	correct?: boolean;
	type: 'code' | 'text';
	answer: string;
	question: string;
	incorrectAnswer?: string;
}
