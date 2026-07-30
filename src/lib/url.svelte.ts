export function setUrlParam(key: string, value: string): void {
	if (typeof window === 'undefined') return;
	const url = new URL(window.location.href);
	url.searchParams.set(key, value);
	window.history.replaceState({}, '', url.toString());
}
