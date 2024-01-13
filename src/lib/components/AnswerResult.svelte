<script lang="ts">
	import type { Question } from '../types';

	export let question: Question;
  export let incorrect: boolean | undefined;

	let baseStyle =
		'md:text-lg lg:text-xl h-20 text-pretty inline-flex items-center rounded-md text-sm font-medium  ring-offset-background px-4 py-2 w-full ';

  //VERY UGLY TERNARY
  const color = question.correct
    ? 'bg-green-500'
    : incorrect ? "bg-gray-500" : 'bg-red-500';

</script>
<div
  class="{baseStyle} flex items-center space-x-4 text-white {color}"
>
  {!incorrect ? question.answer : question.incorrectAnswer}
</div>