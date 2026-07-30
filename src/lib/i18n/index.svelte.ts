import i18next from 'i18next';
import en from './en.json';
import pt from './pt.json';

export const supportedLanguages = ['en', 'pt'] as const;
export type Language = (typeof supportedLanguages)[number];

const STORAGE_KEY = 'cwnt-lang';

function getInitialLanguage(): Language {
	if (typeof window !== 'undefined') {
		const stored = localStorage.getItem(STORAGE_KEY);
		if (stored && supportedLanguages.includes(stored as Language)) {
			return stored as Language;
		}
		const browserLang = window.navigator.language.slice(0, 2);
		if (supportedLanguages.includes(browserLang as Language)) {
			return browserLang as Language;
		}
	}
	return 'en';
}

i18next.init({
	lng: getInitialLanguage(),
	fallbackLng: 'en',
	resources: {
		en: { translation: en },
		pt: { translation: pt }
	},
	interpolation: {
		escapeValue: false
	}
});

let _lang = $state<Language>(getInitialLanguage());

export function t(key: string): string {
	return i18next.t(key, { lng: _lang });
}

export function changeLanguage(lang: Language): void {
	i18next.changeLanguage(lang);
	_lang = lang;
	if (typeof window !== 'undefined') {
		localStorage.setItem(STORAGE_KEY, lang);
		document.documentElement.lang = lang;
	}
}

export function currentLanguage(): Language {
	return _lang;
}

export default i18next;
