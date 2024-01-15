<script lang="ts">
	import type { Question } from '../types';

	export let question: Question;
  export let incorrect: boolean | undefined;

	let baseStyle =
		'md:text-lg h-fit text-pretty inline-flex items-center rounded-md text-sm font-medium ring-offset-background w-full ';

  //VERY UGLY TERNARY
  $: color = question.correct
    ? 'text-gray-400'
    : incorrect ? 'text-red-500': "text-green-500";

  $: blocks = question.answer.split("\n");
  $: incorrectBlocks = question.incorrectAnswer?.split("\n") ?? [];
</script>
{#if question.type == "code-block"}
  <div class="mockup-code dark:bg-gray-800 dark:text-gray-300 bg-white text-gray-700  dark:ring-0 ring-2 ring-gray-200 shadow-lg">
    {#if !incorrect}
      {#each blocks as block, i}
        <pre class={color} data-prefix={(i + 1).toString()}><code>{block}</code></pre>
      {/each}
    {:else}
      {#each incorrectBlocks as block, i}
        <pre class={color} data-prefix={(i + 1).toString()}><code>{block}</code></pre>
      {/each}
    {/if}
  </div>
{:else}
  <div
    class="{baseStyle} flex items-center space-x-4  {color}"
  >
    {!incorrect ? question.answer : question.incorrectAnswer}
  </div>
{/if}
