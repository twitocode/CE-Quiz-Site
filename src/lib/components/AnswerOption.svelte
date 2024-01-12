<script lang="ts">
	export let answer: string;
	export let isCorrect: boolean;
	export let disabled: boolean;

	let baseStyle =
		'inline-flex items-center rounded-md text-sm font-medium whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full';
</script>

{#if disabled}
	<div class="flex items-center space-x-4">{answer}</div>
{:else}
	<div class={baseStyle}>{answer}</div>
{/if}
