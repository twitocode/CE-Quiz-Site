<script lang="ts">
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import { ChevronRight } from 'lucide-svelte';
	import { onMount } from 'svelte';
	import AnswerOption from '../../../lib/components/AnswerOption.svelte';
	import Button from '../../../lib/components/ui/button/button.svelte';
	import { newQuestion, questionsStore, reset } from '../../../lib/store';
	import { goto } from "$app/navigation";

	$: questionIndex = $questionsStore.loaded.findIndex((x) => x == $questionsStore.currentQuestion);
	$: locked = false;

	onMount(() => {
		console.log($questionsStore.currentSet);
	});

	function getResults({ detail }: any) {
		locked = true;

		if (detail.correct) {
			$questionsStore.currentQuestion!.correct = true;
		}
	}

	function onNextQuestion() {
		locked = false;
		const done = newQuestion();

		if (done) {
      goto("/test/result").then(() => reset());
		}
	}
</script>

<main class="flex w-screen flex-col items-center">
	{#if $questionsStore.loaded.length <= 20}
    <ProgressBar />
  {/if}
	<h3 class="mt-10 md:mt-20">Question {questionIndex + 1}/{$questionsStore.loaded.length}</h3>
	<div class="mt-10 flex w-10/12 flex-col items-center lg:w-1/2">
		<h1 class="mb-10 scroll-m-20 text-center text-4xl font-medium tracking-tight lg:text-3xl">
			{$questionsStore.currentQuestion?.question}
		</h1>
		<div class="w-full space-y-10">
			{#each $questionsStore.currentSet as question}
				<AnswerOption bind:question {locked} on:lock={getResults} />
			{/each}
			{#if locked}
				<div class="flex justify-center flex-col items-center">
					<Button on:click={onNextQuestion}
						>Next Question
						<ChevronRight className="h-4 w-4" />
					</Button>
				</div>
			{/if}
		</div>
	</div>
</main>
