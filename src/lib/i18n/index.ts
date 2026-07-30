import i18next from 'i18next';
import en from './en.json';
import pt from './pt.json';

export const supportedLanguages = ['en', 'pt'] as const;
export type Language = (typeof supportedLanguages)[number];

const browserLang =
	typeof window !== 'undefined' ? window.navigator.language.slice(0, 2) : 'en';
const defaultLang: Language = supportedLanguages.includes(browserLang as Language)
	? (browserLang as Language)
	: 'en';

i18next.init({
	lng: defaultLang,
	fallbackLng: 'en',
	resources: {
		en: { translation: en },
		pt: { translation: pt }
	},
	interpolation: {
		escapeValue: false
	}
});

export function t(key: string): string {
	return i18next.t(key);
}

export function changeLanguage(lang: Language): void {
	i18next.changeLanguage(lang);
}

export function currentLanguage(): Language {
	return (i18next.language?.slice(0, 2) as Language) ?? 'en';
}

export default i18next;
