<script lang="ts">
	import { goto } from '$app/navigation';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import { ChevronRight } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import AnswerOption from '../../../lib/components/AnswerOption.svelte';
	import Button from '../../../lib/components/ui/button/button.svelte';
	import { newQuestion, questionsStore, reset } from '../../../lib/store';

	export let data: { slug: string };

	$: questionIndex = $questionsStore.loaded.findIndex((x) => x == $questionsStore.currentQuestion);
	$: locked = false;

	onMount(() => {
		console.log($questionsStore.currentSet);
	});

	function getResults({ detail }: any) {
		locked = true;
		$questionsStore.currentQuestion!.correct = detail.correct;

		if (detail.incorrectAnswer) {
			$questionsStore.currentQuestion!.incorrectAnswer = detail.incorrectAnswer;
		}
	}

	function onNextQuestion() {
		locked = false;
		const done = newQuestion();

		if (done) {
			goto('/test/result').then(() => reset());
		}
	}
</script>

<svelte:head>
	<title>{data.slug} Test</title>
</svelte:head>
<main class="flex w-screen flex-col items-center overflow-y-auto">
	<ProgressBar />
	<h3 class="mt-10">Question {questionIndex + 1}/{$questionsStore.loaded.length}</h3>
	<div class="flex flex-col mb-20 w-10/12 items-center lg:mt-10 lg:w-1/2">
		<h1
			class="mb-4 w-full scroll-m-20 text-center text-2xl font-bold tracking-tight md:mb-10 md:text-4xl lg:text-3xl"
		>
			{$questionsStore.currentQuestion?.question}
		</h1>
		<!-- <div class="w-full space-y-4 md:space-y-10 "> -->
		<div class="w-full gap-8 space-y-4 md:grid md:grid-cols-2 md:space-y-0">
			{#each $questionsStore.currentSet as question}
				<AnswerOption bind:question {locked} on:lock={getResults} />
			{/each}
		</div>
		{#if locked}
			<div class="mt-8 flex flex-col items-center justify-center md:mt-10">
				<Button on:click={onNextQuestion} class="h-12 w-full md:w-80"
					>Next Question
					<ChevronRight className="h-4 w-4" />
				</Button>
			</div>
		{/if}
	</div>
</main>
