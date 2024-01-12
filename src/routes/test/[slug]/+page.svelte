<script lang="ts">
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import { onDestroy, onMount } from 'svelte';
	import AnswerOption from '../../../lib/components/AnswerOption.svelte';
	import { questionsStore } from '../../../lib/store';
	import type { Question } from '../../../lib/types';

	/** @type {import('./$types').PageData} */
	export let data: any;

	let currentQuestion = 0;
	let questions: Question[] = [];

	onMount(() => {
		questionsStore.set(data.loadedQuestions);
	});

	const unsubscribe = questionsStore.subscribe((x) => (questions = x));
	onDestroy(unsubscribe);
</script>

<main class="flex w-screen flex-col items-center">
	<ProgressBar {currentQuestion} />
	<h3 class="mt-20">Question {currentQuestion + 1}/{questions.length}</h3>
	<div class="mt-10 flex w-10/12 flex-col items-center lg:w-1/2">
		<h1 class="mb-10 scroll-m-20 text-center text-4xl font-medium tracking-tight lg:text-3xl"></h1>
		<div class="w-full space-y-10">
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
