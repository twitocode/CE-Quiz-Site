<script lang="ts">
	import { goto } from '$app/navigation';
	import { BarChartSimple, ChartTheme, ScaleTypes } from '@carbon/charts-svelte';
	import '@carbon/charts-svelte/styles.css';
	import { mode } from 'mode-watcher';
	import { onMount } from 'svelte';
	import AnswerResult from '../../../lib/components/AnswerResult.svelte';
	import type { Question } from '../../../lib/types.js';

	type QuestionData = { value: number; group: 'Correct' | 'Incorrect' };

	$: chartData = [] as QuestionData[];
	$: loaded = [] as Question[];

	onMount(() => {
		const localData = localStorage.getItem('save-data');

		if (!localData) {
			goto('/');
			return;
		}
		loaded = JSON.parse(localData) as Question[];

		let correct = 0;
		let incorrect = 0;

		loaded.forEach((x) => {
			if (x.correct) correct++;
			else incorrect++;
		});

		chartData = [
			{ group: 'Correct', value: correct },
			{ group: 'Incorrect', value: incorrect }
		];
	});
</script>

<main class="mb-10 flex w-screen flex-col items-center justify-center">
  <h1
  class="tmd:ext-4xl mt-10 w-full scroll-m-20 pb-5 text-center text-2xl font-bold tracking-tight md:m-0 md:mb-10 lg:text-3xl"
  >
    These are your results
  </h1>
  {#if chartData.length != 0}
    <span class="mb-4 md:mb-10"
      >Correct: {chartData[0].value}, Incorrect: {chartData[1].value}</span
    >
    <BarChartSimple
    data={chartData}
    options={{
      height: '400px',
      width: '300px',
      theme: $mode == 'light' ? ChartTheme.WHITE : ChartTheme.G100,
      toolbar: {
        enabled: false
      },
      axes: {
        left: {
            mapsTo: 'value'
          },
          bottom: {
            mapsTo: 'group',
            scaleType: ScaleTypes.LABELS
          }
        }
      }}
    />
    {/if}
    {#if chartData.length != 0 && chartData[0].value > 0}
      <h1
			class="my-10 mb-4 w-full scroll-m-20 text-center text-2xl font-bold tracking-tight md:mb-10 md:text-4xl lg:text-3xl"
      >
			What did you get right?
      </h1>
      <div class="w-10/12 space-y-4 md:space-y-10 lg:w-1/2">
        {#each loaded as question}
        {#if question.correct}
        <div class="">
          <span class="text-lg font-medium md:text-2xl">{question.question}</span>
          <AnswerResult {question} incorrect={false} />
        </div>
        {/if}
        {/each}
      </div>
    {/if}
    {#if chartData.length != 0 && chartData[1].value > 0}
      <h1
        class="tmd:ext-4xl my-10 mb-4 w-full scroll-m-20 text-center text-2xl font-bold tracking-tight md:mb-10 lg:text-3xl"
      >
        What did you get wrong?
      </h1>
      <div class="w-10/12 space-y-8 divide-y-2 md:space-y-4 lg:w-1/2">
        {#each loaded as question}
          {#if !question.correct}
            <div class="space-y-2 pt-8 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:pt-2">
              <div class="flex h-full flex-col justify-center">
                <span class="text-md font-bold md:text-2xl">{question.question}</span>
                <AnswerResult {question} incorrect />
              </div>
              <div class="flex h-full flex-col justify-center">
                <span class="text-md font-medium mt-2 md:mt-0 md:text-2xl">Correct Answer</span>
                <AnswerResult {question} incorrect={false} />
              </div>
            </div>
          {/if}
        {/each}
      </div>
    {/if}
</main>
