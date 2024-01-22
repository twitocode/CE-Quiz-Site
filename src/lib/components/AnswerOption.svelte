<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { questionsStore } from '../store';
	import type { Question } from '../types';

	export let question: Question;
	export let locked: boolean;
	const answerQuestionDispatch = createEventDispatcher();

	let baseStyle =
		'shadow-xl md:text-lg lg:text-xl min-h-20 text-pretty inline-flex items-center rounded-md text-sm font-medium  ring-offset-background px-4 py-2 w-full ';

	let normalStyle =
		'transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground';

	function onClick() {
		answerQuestionDispatch('lock', {
			correct: $questionsStore.currentQuestion == question,
			incorrectAnswer: $questionsStore.currentQuestion == question ? undefined : question.answer
		});
	}

	$: blocks = question.answer.split('\n');
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if locked}
	{#if question.type == 'code'}
		<div
			class="mockup-code bg-white py-3 text-sm text-gray-700 shadow-lg ring-2 ring-gray-200 dark:bg-gray-800 dark:text-gray-300 {$questionsStore.currentQuestion ==
			question
				? 'ring-green-500'
				: 'ring-red-500'}"
		>
			{#each blocks as block, i}
				<pre data-prefix={(i + 1).toString()}><code>{block}</code></pre>
			{/each}
		</div>
	{:else}
		<div
			class="{baseStyle} flex items-center text-black dark:text-white {$questionsStore.currentQuestion ==
			question
				? 'ring-2 ring-green-500'
				: 'ring-2 ring-red-500'}"
		>
			{question.answer}
		</div>
	{/if}
{:else if question.type == 'code'}
	<div
		on:click={onClick}
		class="mockup-code bg-white py-3 text-sm text-gray-700 shadow-lg ring-2 ring-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:ring-0"
	>
		{#each blocks as block, i}
			<pre data-prefix={(i + 1).toString()}><code>{block}</code></pre>
		{/each}
	</div>
{:else}
	<div on:click={onClick} class={baseStyle + normalStyle}>{question.answer}</div>
{/if}
