<script>
	import TopicChoice from '../lib/components/TopicChoice.svelte';
	import { reset } from "../lib/store";

  reset();
</script>

<svelte:head>
  <title>Comp Eng Quiz</title>
</svelte:head>
<main class="flex w-screen flex-col items-center space-y-0">
	<h1 class="font-bold mt-20 mb-10 lg:mt-0 text-2xl md:text-4xl">Choose a topic to study</h1>
	<div class="max-w-screen-sm space-y-4 flex flex-col items-center">
		<TopicChoice topic="Networking" />
    <TopicChoice topic="Electronics" />
    <TopicChoice topic="Coding" />
	</div>
</main>
