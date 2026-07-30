<script lang="ts">
	import { t, changeLanguage, currentLanguage, type Language } from '$lib/i18n';

	let lang: Language = $state(currentLanguage());

	function toggleLanguage() {
		lang = lang === 'en' ? 'pt' : 'en';
		changeLanguage(lang);
	}
</script>

<svelte:head>
	<title>{t('meta.title')}</title>
	<meta name="description" content={t('meta.description')} />
</svelte:head>

<nav>
	<div class="nav-content">
		<a href="/" class="logo">cwnt</a>
		<div class="nav-links">
			<a href="#services">{t('nav.services')}</a>
			<a href="#contact">{t('nav.contact')}</a>
			<button class="lang-toggle" onclick={toggleLanguage}>
				{lang === 'en' ? 'PT' : 'EN'}
			</button>
		</div>
	</div>
</nav>

<main>
	<section class="hero">
		<h1>{t('hero.title')}</h1>
		<p>{t('hero.subtitle')}</p>
	</section>

	<section id="services" class="services">
		<h2>{t('services.title')}</h2>
		<div class="services-grid">
			<div class="service-card">
				<div class="service-icon">&#60;/&#62;</div>
				<h3>{t('services.dev.title')}</h3>
				<p>{t('services.dev.description')}</p>
			</div>
			<div class="service-card">
				<div class="service-icon">&#9881;</div>
				<h3>{t('services.consulting.title')}</h3>
				<p>{t('services.consulting.description')}</p>
			</div>
			<div class="service-card">
				<div class="service-icon">&#128274;</div>
				<h3>{t('services.licensing.title')}</h3>
				<p>{t('services.licensing.description')}</p>
			</div>
			<div class="service-card">
				<div class="service-icon">&#9729;</div>
				<h3>{t('services.data.title')}</h3>
				<p>{t('services.data.description')}</p>
			</div>
		</div>
	</section>

	<section id="contact" class="contact">
		<h2>{t('contact.title')}</h2>
		<div class="contact-info">
			<div class="contact-item">
				<span class="contact-label">{t('contact.email')}</span>
				<a href="mailto:contact@cwnt.io">contact@cwnt.io</a>
			</div>
			<div class="contact-item">
				<span class="contact-label">{t('contact.location')}</span>
				<span>{t('contact.locationValue')}</span>
			</div>
		</div>
	</section>
</main>

<footer>
	<div class="footer-content">
		<span class="footer-logo">cwnt</span>
		<span class="footer-rights">&copy; {new Date().getFullYear()} CWNT. {t('footer.rights')}</span>
	</div>
</footer>

<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background: rgba(10, 10, 10, 0.8);
		backdrop-filter: blur(12px);
		border-bottom: 1px solid var(--color-border);
	}

	.nav-content {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 1rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.logo {
		font-size: 1.5rem;
		font-weight: 700;
		color: var(--color-text);
		letter-spacing: -0.02em;
		font-family: monospace;
	}

	.nav-links {
		display: flex;
		align-items: center;
		gap: 2rem;
	}

	.nav-links a {
		color: var(--color-text-muted);
		font-size: 0.9rem;
		font-weight: 500;
		transition: color 0.2s;
	}

	.nav-links a:hover {
		color: var(--color-text);
	}

	.lang-toggle {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		color: var(--color-text-muted);
		padding: 0.35rem 0.75rem;
		border-radius: 6px;
		font-size: 0.8rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.2s;
	}

	.lang-toggle:hover {
		background: var(--color-border);
		color: var(--color-text);
	}

	main {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 2rem;
	}

	.hero {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 1.5rem;
	}

	.hero h1 {
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 700;
		line-height: 1.1;
		letter-spacing: -0.03em;
		max-width: 700px;
	}

	.hero p {
		font-size: clamp(1rem, 2vw, 1.25rem);
		color: var(--color-text-muted);
		max-width: 600px;
		line-height: 1.7;
	}

	.services {
		padding: 8rem 0;
	}

	.services h2 {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 3rem;
		letter-spacing: -0.02em;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		gap: 1.5rem;
	}

	.service-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 12px;
		padding: 2rem;
		transition: border-color 0.2s;
	}

	.service-card:hover {
		border-color: var(--color-text-muted);
	}

	.service-icon {
		font-size: 2rem;
		margin-bottom: 1rem;
	}

	.service-card h3 {
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.75rem;
	}

	.service-card p {
		color: var(--color-text-muted);
		font-size: 0.9rem;
		line-height: 1.6;
	}

	.contact {
		padding: 8rem 0;
	}

	.contact h2 {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 3rem;
		letter-spacing: -0.02em;
	}

	.contact-info {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.contact-item {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.contact-label {
		font-size: 0.85rem;
		color: var(--color-text-muted);
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.contact-item a,
	.contact-item span:last-child {
		font-size: 1.1rem;
	}

	footer {
		border-top: 1px solid var(--color-border);
		padding: 2rem 0;
	}

	.footer-content {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.footer-logo {
		font-family: monospace;
		font-weight: 700;
		font-size: 1.2rem;
	}

	.footer-rights {
		color: var(--color-text-muted);
		font-size: 0.85rem;
	}

	@media (max-width: 640px) {
		.nav-content {
			padding: 1rem;
		}

		main {
			padding: 0 1rem;
		}

		.nav-links {
			gap: 1rem;
		}

		.footer-content {
			flex-direction: column;
			gap: 0.5rem;
			text-align: center;
			padding: 0 1rem;
		}
	}
</style>
