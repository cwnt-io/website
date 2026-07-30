<script lang="ts">
	import '../app.css';
	import '$lib/i18n/index.svelte';
	import { onMount } from 'svelte';
	import { initTheme } from '$lib/theme/index.svelte';
	import { base } from '$app/paths';

	let { children } = $props();

	onMount(() => {
		initTheme();
	});
</script>

<svelte:head>
	<link rel="icon" href="{base}/favicon.svg" />
</svelte:head>

{@render children()}
