<script lang="ts">
	import type { QuestionResult } from "../types";

  export let currentQuestion: number;
  export let questions: QuestionResult[]

  $: itemsCache = Array(10).fill(0);
</script>

<div class="w-screen flex justify-evenly">
  {#each questions as item, index}
    {#if (index) >= currentQuestion}
      <div class="{index == currentQuestion && "animate-pulse"} w-4 md:w-12 lg:w-32 h-2 rounded-lg bg-gray-500 dark:bg-white"></div>
    {:else}
      <div class="w-4 md:w-12 lg:w-32 h-2 rounded-lg {item.correct ? "bg-green-500" : "bg-red-500"}"></div>
    {/if}
  {/each}
</div>