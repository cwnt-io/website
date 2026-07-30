<script lang="ts">
	import '../app.css';
	import '$lib/i18n/index.svelte';
	import { onMount } from 'svelte';
	import { initTheme } from '$lib/theme/index.svelte';

	let { children } = $props();

	onMount(() => {
		initTheme();
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
</svelte:head>

{@render children()}
