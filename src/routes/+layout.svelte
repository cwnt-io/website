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
	<link rel="icon" type="image/x-icon" href="{base}/favicon.ico" />
	<link rel="icon" type="image/png" sizes="32x32" href="{base}/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="{base}/favicon-16x16.png" />
	<link rel="apple-touch-icon" sizes="180x180" href="{base}/apple-touch-icon.png" />
</svelte:head>

{@render children()}
