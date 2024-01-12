import { get, writable } from 'svelte/store';
import type { Question } from './types';
import { shuffleArray } from "./utils";

export interface QuestionsStore {
	loaded: Question[];
	currentSet: Question[];
	currentQuestion?: Question;
}

export const questionsStore = writable<QuestionsStore>({
	loaded: [],
	currentSet: [],
	currentQuestion: undefined
});

export function reset() {
	questionsStore.set({ currentSet: [], loaded: [], currentQuestion: undefined });
}

export function newQuestion(): boolean {
	const data = get(questionsStore);

	const loaded = data.loaded;
	const currentQuestion = data.currentQuestion;
	const currentIndex = loaded.findIndex((x) => x == currentQuestion);
	let currentSet: Question[] = [loaded[currentIndex + 1]];

	if (currentIndex == -1 || currentIndex + 1 >= loaded.length) {
		return true;
	}

	while (currentSet.length != 4) {
		const randomQuestion = loaded[Math.floor(Math.random() * loaded.length)];
		//This makes sure you do not see more than 1 of the answer in the multiple choice
		if (currentSet.includes(randomQuestion)) continue;

		currentSet.push(randomQuestion);
	}

	const newQuestion = loaded[currentIndex + 1];
	currentSet = shuffleArray(currentSet);
	questionsStore.update((x) => ({ ...x, currentSet, currentQuestion: newQuestion }));
	return false;
}
