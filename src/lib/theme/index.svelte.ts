export type Theme = 'system' | 'light' | 'dark';
export type ResolvedTheme = 'light' | 'dark';

const STORAGE_KEY = 'cwnt-theme';
const THEMES: Theme[] = ['light', 'dark', 'system'];

function getInitialTheme(): Theme {
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
		if (stored && THEMES.includes(stored)) {
			return stored;
		}
	}
	return 'system';
}

function resolveTheme(theme: Theme): ResolvedTheme {
	if (theme !== 'system') return theme;
	if (typeof window !== 'undefined') {
		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
	}
	return 'dark';
}

function applyTheme(theme: Theme): void {
	if (typeof window === 'undefined') return;
	document.documentElement.setAttribute('data-theme', resolveTheme(theme));
}

let _theme = $state<Theme>(getInitialTheme());

export function currentTheme(): Theme {
	return _theme;
}

export function resolvedTheme(): ResolvedTheme {
	return resolveTheme(_theme);
}

export function setTheme(theme: Theme): void {
	_theme = theme;
	if (typeof window !== 'undefined') {
		localStorage.setItem(STORAGE_KEY, theme);
		applyTheme(theme);
	}
}

export function cycleTheme(): void {
	const currentResolved = resolveTheme(_theme);
	let idx = THEMES.indexOf(_theme);
	let next: Theme;
	do {
		idx = (idx + 1) % THEMES.length;
		next = THEMES[idx];
	} while (resolveTheme(next) === currentResolved && next !== _theme);
	setTheme(next);
}

export function initTheme(): void {
	if (typeof window === 'undefined') return;
	applyTheme(_theme);
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
		if (_theme === 'system') {
			applyTheme('system');
		}
	});
}
