<script lang="ts">
	import ProgressBar from '$lib/components/ProgressBar.svelte';
	import { onMount } from "svelte";
	import AnswerOption from '../../../lib/components/AnswerOption.svelte';
	import { questionsStore } from '../../../lib/store';

	$: questionIndex = $questionsStore.loaded.findIndex((x) => x == $questionsStore.currentQuestion);


  onMount(() => {
    console.log($questionsStore.currentSet)
  })
  
	function nextQuestion() {}
</script>

<main class="flex w-screen flex-col items-center">
	<ProgressBar />
	<h3 class="mt-20">Question {questionIndex + 1}/{$questionsStore.loaded.length}</h3>
	<div class="mt-10 flex w-10/12 flex-col items-center lg:w-1/2">
		<h1 class="mb-10 scroll-m-20 text-center text-4xl font-medium tracking-tight lg:text-3xl">
			{$questionsStore.currentQuestion?.question}
		</h1>
		<div class="w-full space-y-10">
			{#each $questionsStore.currentSet as question}
				<AnswerOption
					disabled={false}
					answer={question.answer}
					isCorrect={$questionsStore.currentQuestion == question}
				/>
			{/each}
		</div>
	</div>
</main>
