<script lang="ts">
	import { questionsStore } from "../store";
	import type { Question } from '../types';
  import { onDestroy } from 'svelte'

	export let currentQuestion: number;
	let questions: Question[];

  const unsubscribe = questionsStore.subscribe((value) => questions = value)
  onDestroy(unsubscribe)
</script>

<div class="flex w-screen justify-between">
	<div class="auto-cols-20 grid w-full grid-flow-col gap-4 px-80">
		{#each questions as item, index}
			{#if index >= currentQuestion}
				<div
					class="{index == currentQuestion &&
						'animate-pulse'} h-2 w-full rounded-lg bg-gray-500 dark:bg-white"
				></div>
			{:else}
				<div class="h-2 w-full rounded-lg {item.correct ? 'bg-green-500' : 'bg-red-500'}"></div>
			{/if}
		{/each}
	</div>
</div>
