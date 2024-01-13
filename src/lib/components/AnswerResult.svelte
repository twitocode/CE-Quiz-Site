<script lang="ts">
	import type { Question } from '../types';

	export let question: Question;
  export let incorrect: boolean | undefined;

	let baseStyle =
		'md:text-lg  h-fit text-pretty inline-flex items-center rounded-md text-sm font-medium ring-offset-background w-full  ';

  //VERY UGLY TERNARY
  const color = question.correct
    ? 'text-green-500'
    : !incorrect ? "text-gray-500" : 'text-red-500';

</script>
<div
  class="{baseStyle} flex items-center space-x-4 text-white {color}"
>
  {!incorrect ? question.answer : question.incorrectAnswer}
</div>