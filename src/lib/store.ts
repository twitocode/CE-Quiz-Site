import { writable } from "svelte/store";
import type { Question } from "./types";

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