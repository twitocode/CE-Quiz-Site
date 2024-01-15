<script lang="ts">
	import { goto } from '$app/navigation';
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import { ChevronRight } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import AnswerOption from '../../../lib/components/AnswerOption.svelte';
	import Button from '../../../lib/components/ui/button/button.svelte';
	import { newQuestion, questionsStore, reset } from '../../../lib/store';

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

<main class="flex w-screen flex-col items-center">
	<div class="hidden lg:block">
		<ProgressBar />
	</div>
	<h3 class="mt-10">Question {questionIndex + 1}/{$questionsStore.loaded.length}</h3>
	<div class="flexflex-col w-10/12 items-center lg:mt-10 lg:w-1/2 mb-20">
		<h1
			class="mb-4 w-full scroll-m-20 text-center text-2xl font-bold tracking-tight md:mb-10 md:text-4xl lg:text-3xl"
		>
			{$questionsStore.currentQuestion?.question}
		</h1>
		<div class="w-full space-y-4 md:space-y-10">
			{#each $questionsStore.currentSet as question}
				<AnswerOption bind:question {locked} on:lock={getResults} />
			{/each}
			{#if locked}
				<div class="flex flex-col items-center justify-center">
					<Button on:click={onNextQuestion}
						>Next Question
						<ChevronRight className="h-4 w-4" />
					</Button>
				</div>
			{/if}
		</div>
	</div>
</main>
