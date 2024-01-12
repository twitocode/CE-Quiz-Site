<script lang="ts">
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import AnswerOption from '../../lib/components/AnswerOption.svelte';
	import type { QuestionResult } from '../../lib/types';

	let results: QuestionResult[] = [
		{ correct: false, index: 0 },
		{ correct: true, index: 1 },
		{ correct: false, index: 2 },
		{ correct: false, index: 3 },
		{ correct: false, index: 4 },
		{ correct: false, index: 5 },
		{ correct: false, index: 6 },
		{ correct: false, index: 7 },
		{ correct: false, index: 8 },
		{ correct: false, index: 9 },
		{ correct: false, index: 10 }
	];

	let questions: { question: string; answer: string }[] = [
		{ question: 'What is a coaxial cable?', answer: 'Hello there' },
		{ question: 'What is a coaxial cable?', answer: 'Hello there' },
		{ question: 'What is a coaxial cable?', answer: 'Hello there' },
		{ question: 'What is a coaxial cable?', answer: 'Hello there' },
		{ question: 'What is a coaxial cable?', answer: 'Hello there' },
		{ question: 'What is a coaxial cable?', answer: 'Hello there' },
		{ question: 'What is a coaxial cable?', answer: 'Hello there' },
		{ question: 'What is a coaxial cable?', answer: 'Hello there' },
		{ question: 'What is a coaxial cable?', answer: 'Hello there' },
		{ question: 'What is a coaxial cable?', answer: 'Hello there' }
	];
	let currentQuestion = 0;
</script>

<main class="flex w-screen flex-col items-center">
	<ProgressBar questions={results} {currentQuestion} />
	<h3 class="mt-20">Question {currentQuestion + 1}/{questions.length}</h3>
	<div class="mt-10 flex lg:w-1/2 w-10/12 flex-col items-center">
		<h1 class="text-center mb-10 scroll-m-20 text-4xl font-medium tracking-tight lg:text-3xl">
			{questions[currentQuestion].question}
		</h1>
		<div class="space-y-10 w-full">
			<AnswerOption
				disabled={false}
				answer="A long distance cable that bites the dust"
				isCorrect={true}
			/>
			<AnswerOption
				disabled={false}
				answer="A long distance cable that bites the dust"
				isCorrect={false}
			/>
			<AnswerOption
				disabled={false}
				answer="A long distance cable that bites the dust"
				isCorrect={false}
			/>
			<AnswerOption
				disabled={false}
				answer="A long distance cable that bites the dust"
				isCorrect={true}
			/>
		</div>
	</div>
</main>
