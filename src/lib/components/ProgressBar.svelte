<script lang="ts">
	import type { QuestionResult } from "../types";

  export let currentQuestion: number;
  export let questions: QuestionResult[]

</script>

<div class="flex justify-between w-screen">
    <div class="grid grid-flow-col auto-cols-20  gap-4 w-full px-80">
    {#each questions as item, index}
      {#if (index) >= currentQuestion}
        <div class="{index == currentQuestion && "animate-pulse"} w-full h-2  rounded-lg bg-gray-500 dark:bg-white"></div>
      {:else}
        <div  class="w-full h-2 rounded-lg {item.correct ? "bg-green-500" : "bg-red-500"}"></div>
      {/if}
    {/each}
  </div>
</div>