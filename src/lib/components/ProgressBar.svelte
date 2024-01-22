<script lang="ts">
	import { questionsStore } from '../store';
	import {Progress} from './ui/progress';

	$: questionIndex = $questionsStore.loaded.findIndex((x) => x == $questionsStore.currentQuestion);
</script>

<div class="flex w-screen justify-between">
	<div class="md:hidden">
		<Progress max={100}   class="w-[60%]"  value={80} />
	</div>
	<div class="auto-cols-20 hidden w-full grid-flow-col gap-4 px-10 md:grid md:px-40 lg:px-80">
		{#each $questionsStore.loaded as item, index}
			{#if index >= questionIndex}
				<div
					class="{index == questionIndex &&
						'animate-pulse'} h-2 w-full rounded-lg bg-gray-500 dark:bg-white"
				></div>
			{:else}
				<div class="h-2 w-full rounded-lg {item.correct ? 'bg-green-500' : 'bg-red-500'}"></div>
			{/if}
		{/each}
	</div>
</div>
