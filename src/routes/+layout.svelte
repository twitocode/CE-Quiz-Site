<script>
	import '../app.pcss';
	import Navbar from "../lib/components/Navbar.svelte";
  import { ModeWatcher } from "mode-watcher";

</script>

<Navbar />
<ModeWatcher />
<slot />
