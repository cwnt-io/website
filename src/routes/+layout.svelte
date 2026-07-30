<script lang="ts">
	import '../app.css';
	import '$lib/i18n';
	import { onMount } from 'svelte';
	import { initTheme } from '$lib/theme';

	let { children } = $props();

	onMount(() => {
		initTheme();
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
</svelte:head>

{@render children()}
