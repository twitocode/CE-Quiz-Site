<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { questionsStore } from '../store';
	import type { Question } from '../types';

	export let question: Question;
	export let locked: boolean;
	const answerQuestionDispatch = createEventDispatcher();

	let baseStyle =
		'h-20 text-pretty inline-flex items-center rounded-md text-sm font-medium  ring-offset-background px-4 py-2 w-full ';

	let normalStyle =
		'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground';

	function onClick() {
		answerQuestionDispatch('lock', {
			correct: $questionsStore.currentQuestion == question
		});
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if locked}
  <div
    on:click={onClick}
    class="{baseStyle} flex items-center space-x-4 text-white {$questionsStore.currentQuestion ==
    question
      ? 'bg-green-500'
      : 'bg-red-500'}"
  >
    {question.answer}
  </div>
{:else}
  <div on:click={onClick} class={baseStyle + normalStyle}>{question.answer}</div>
{/if}
