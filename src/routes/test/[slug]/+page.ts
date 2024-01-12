// import { error } from "@sveltejs/kit";
import { questionsStore } from "$lib/store.js";
import type { Question } from "$lib/types.js";
import { shuffleArray } from "../../../lib/utils.js";

async function loadQuestionsAndAnswers(file: string) {
  const loadedQuestions = await import(`../../../${file}.json`);
  return loadedQuestions.default;
}

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  const topic = params.slug;
  const loadedQuestions = await loadQuestionsAndAnswers(topic);

  // if (!loadedQuestions) {
  //   error(404, 'not found');
  // }

  let currentSet: Question[] = [loadedQuestions[0]];

  while (currentSet.length != 4) {
    const randomQuestion = loadedQuestions[Math.floor(Math.random() * loadedQuestions.length)];
    //This makes sure you do not see more than 1 of the answer in the multiple choice
    if (currentSet.includes(randomQuestion)) continue;

    currentSet.push(randomQuestion);
  }

  currentSet = shuffleArray(currentSet);

  questionsStore.update(x => {
    return {
      ...x,
      loaded: loadedQuestions,
      currentQuestion: loadedQuestions[0],
      currentSet: currentSet
    }
  })
}