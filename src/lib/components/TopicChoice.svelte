<script lang="ts">
	import Button from "./ui/button/button.svelte";

  export let topic: string;
</script>

<a href="/test/{topic}" class="w-full flex justify-center">
  <Button variant="ghost" class="space-x-4">
    <h1>{topic}</h1>  
  </Button>
</a>