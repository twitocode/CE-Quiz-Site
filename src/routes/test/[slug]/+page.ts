
/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  async function loadQuestionsAndAnswers(file: string) {
    const loadedQuestions = await import(`../../../${file}.json`);
    return loadedQuestions.default;
  }

  const topic = params.slug;
  const loadedQuestions = await loadQuestionsAndAnswers(topic);
  
	return {
		loadedQuestions
	};
}