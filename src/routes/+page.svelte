<script>
	import TopicChoice from '../lib/components/TopicChoice.svelte';
	import { reset } from "../lib/store";

  reset();
</script>

<main class="flex w-screen flex-col items-center space-y-0">
	<h1 class="font-medium mt-20 mb-10 lg:mt-0">Choose a topic to study</h1>
	<div class="max-w-screen-sm space-y-4 flex flex-col items-center">
		<TopicChoice topic="Networking" />
    <TopicChoice topic="Electronics" />
    <TopicChoice topic="Coding" />
	</div>
</main>
