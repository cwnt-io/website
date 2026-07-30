<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import '$lib/i18n';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/favicon.svg" />
</svelte:head>

{@render children()}
