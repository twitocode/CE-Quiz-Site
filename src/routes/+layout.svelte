<script>
	import { ModeWatcher } from 'mode-watcher';
	import '../app.pcss';
	import Navbar from '../lib/components/Navbar.svelte';
</script>

<div class="h-screen w-screen overflow-x-hidden">
	<Navbar />
	<ModeWatcher />
	<slot />
</div>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
