<script>
	import '../app.pcss';
	import Navbar from "../lib/components/Navbar.svelte";
  import { ModeWatcher } from "mode-watcher";

</script>


<div class="w-screen overflow-x-hidden">
  <Navbar />
<ModeWatcher />
  <slot />
</div>
