import { questionsStore } from "../../../lib/store.js";

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  async function loadQuestionsAndAnswers(file: string) {
    const loadedQuestions = await import(`../../../${file}.json`);
    return loadedQuestions.default;
  }

  const topic = params.slug;
  const loadedQuestions = await loadQuestionsAndAnswers(topic);
  
  let currentSet = [loadedQuestions[0]];

  while (currentSet.length != 4) {
    let randomQuestion = loadedQuestions[Math.floor(Math.random() * loadedQuestions.length)];
    //This makes sure you do not see more than 1 of the answer in the multiple choice
    if (currentSet.includes(randomQuestion)) continue;

    currentSet.push(randomQuestion);
  }

  questionsStore.update(x => {
    return {
      ...x,
      loaded: loadedQuestions,
      currentQuestion: loadedQuestions[0],
      currentSet: currentSet
    }
  })
}