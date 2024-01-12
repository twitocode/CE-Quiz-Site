<script lang="ts">
	import ProgressBar from '$lib/components/ProgressBar.svelte';
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
		{ correct: false, index: 9 }
	];

	let questions: { question: string; answer: string }[] = [
    { question: "What is a coaxial cable?", answer: "Hello there"}
  ];
	let currentQuestion = 0;
</script>

<main class="flex w-screen flex-col items-center">
	<ProgressBar questions={results} {currentQuestion} />
  <div class="mt-40">
    <h1 class="scroll-m-20 text-4xl font-medium tracking-tight lg:text-3xl">{questions[currentQuestion].question}</h1>
  </div>
</main>
