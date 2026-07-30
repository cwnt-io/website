<script lang="ts">
	import { t, changeLanguage, currentLanguage, type Language } from '$lib/i18n/index.svelte';
	import { currentTheme, cycleTheme, type Theme } from '$lib/theme/index.svelte';
	import { onMount } from 'svelte';
	import logo from '$lib/assets/logo.png';
	import logoVlg from '$lib/assets/clients/vlg.png';
	import logoQuadrant from '$lib/assets/clients/quadrant.svg';
	import logoScale from '$lib/assets/clients/scale.svg';
	import logoFleetops from '$lib/assets/clients/fleetops.svg';

	let lang: Language = $derived(currentLanguage());
	let theme: Theme = $derived(currentTheme());

	function toggleLanguage() {
		changeLanguage(lang === 'en' ? 'pt' : 'en');
	}

	const themeIcons: Record<Theme, string> = {
		system: '◐',
		dark: '☾',
		light: '☀'
	};

	let mounted = $state(false);
	let scrolled = $state(false);

	function handleScroll() {
		scrolled = window.scrollY > 50;
	}

	onMount(() => {
		mounted = true;
		handleScroll();
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:head>
	<title>{t('meta.title')}</title>
	<meta name="description" content={t('meta.description')} />
	<meta name="robots" content="index, follow" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={t('meta.title')} />
	<meta property="og:description" content={t('meta.description')} />
	<meta property="og:image" content="https://cwnt.io/logo.png" />
	<meta property="og:image:width" content="460" />
	<meta property="og:image:height" content="460" />
	<meta property="og:site_name" content="CWNT" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={t('meta.title')} />
	<meta name="twitter:description" content={t('meta.description')} />
	<meta name="twitter:image" content="https://cwnt.io/logo.png" />
	<link rel="canonical" href="https://cwnt.io/" />
</svelte:head>

<!-- Navigation -->
<nav class:mounted class:scrolled>
	<div class="nav-content">
		<a href="/" class="nav-brand">
			<img src={logo} alt="CWNT" class="nav-logo" />
			<span class="nav-name">cwnt</span>
		</a>
		<div class="nav-links">
			<a href="#services">{t('nav.services')}</a>
			<a href="#contact">{t('nav.contact')}</a>
			<div class="nav-controls">
				<button
					class="control-btn"
					onclick={cycleTheme}
					title={t(`theme.${theme}`)}
					aria-label="Toggle theme"
				>
					{themeIcons[theme]}
				</button>
				<button class="control-btn" onclick={toggleLanguage} aria-label="Toggle language">
					{lang === 'en' ? 'PT' : 'EN'}
				</button>
			</div>
		</div>
	</div>
</nav>

<!-- Hero -->
<section class="hero">
	<div class="hero-bg">
		<div class="hero-aurora"></div>
		<div class="hero-orb hero-orb-1"></div>
		<div class="hero-orb hero-orb-2"></div>
		<div class="hero-orb hero-orb-3"></div>
		<div class="hero-orb hero-orb-4"></div>
		<div class="hero-grid"></div>
		<div class="hero-noise"></div>
	</div>
	<div class="hero-content" class:mounted>
		<img src={logo} alt="CWNT" class="hero-logo" />
		<h1 class="hero-title">{t('hero.title')}</h1>
		<p class="hero-subtitle">{t('hero.subtitle')}</p>
		<div class="hero-cta">
			<a href="#services" class="btn-primary">{t('nav.services')}</a>
			<a href="#contact" class="btn-secondary">{t('nav.contact')}</a>
		</div>
	</div>
</section>

<!-- Services -->
<main>
	<section id="services" class="services">
		<div class="section-header">
			<span class="section-tag">{t('nav.services')}</span>
			<h2>{t('services.title')}</h2>
		</div>
		<div class="services-grid">
			<div class="service-card">
				<div class="service-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
				</div>
				<h3>{t('services.dev.title')}</h3>
				<p>{t('services.dev.description')}</p>
			</div>
			<div class="service-card">
				<div class="service-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
				</div>
				<h3>{t('services.consulting.title')}</h3>
				<p>{t('services.consulting.description')}</p>
			</div>
			<div class="service-card">
				<div class="service-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
				</div>
				<h3>{t('services.licensing.title')}</h3>
				<p>{t('services.licensing.description')}</p>
			</div>
			<div class="service-card">
				<div class="service-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12H2"></path><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line></svg>
				</div>
				<h3>{t('services.data.title')}</h3>
				<p>{t('services.data.description')}</p>
			</div>
			<div class="service-card">
				<div class="service-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
				</div>
				<h3>{t('services.training.title')}</h3>
				<p>{t('services.training.description')}</p>
			</div>
			<div class="service-card">
				<div class="service-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
				</div>
				<h3>{t('services.opensource.title')}</h3>
				<p>{t('services.opensource.description')}</p>
			</div>
		</div>
	</section>

	<!-- Open Source -->
	<section id="opensource" class="opensource">
		<div class="section-header">
			<span class="section-tag">{t('opensource.tag')}</span>
			<h2>{t('opensource.title')}</h2>
		</div>
		<div class="opensource-grid">
			{#each ['mgmt', 'ripissue', 'ripcards', 'cwnt-io-website', 'candid-gen', 'brag-server'] as repo}
				<a
					href="https://github.com/cwnt-io/{repo}"
					target="_blank"
					rel="noopener noreferrer"
					class="repo-card"
				>
					<div class="repo-header">
						<svg class="repo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
						<span class="repo-name">{repo}</span>
						<span class="external-arrow">&nearr;</span>
					</div>
					<p class="repo-desc">{t(`opensource.${repo}`)}</p>
				</a>
			{/each}
		</div>
	</section>

	<!-- Clients -->
	<section id="clients" class="clients">
		<div class="section-header">
			<span class="section-tag">{t('clients.tag')}</span>
			<h2>{t('clients.title')}</h2>
		</div>
		<div class="clients-grid">
			<div class="client-card">
				<div class="client-logo">
					<img src={logoVlg} alt="VLG Investimentos" />
				</div>
				<h3>{t('clients.vlg.name')}</h3>
				<p>{t('clients.vlg.description')}</p>
			</div>
			<div class="client-card">
				<a href="https://quadrant.health/" target="_blank" rel="noopener noreferrer" class="client-link">
					<div class="client-logo">
						<img src={logoQuadrant} alt="Quadrant Health" />
					</div>
					<h3>{t('clients.quadrant.name')}<span class="external-arrow">&nearr;</span></h3>
					<p>{t('clients.quadrant.description')}</p>
				</a>
			</div>
			<div class="client-card">
				<a href="https://scale.com/" target="_blank" rel="noopener noreferrer" class="client-link">
					<div class="client-logo">
						<img src={logoScale} alt="Scale AI" class="logo-invertible" />
					</div>
					<h3>{t('clients.scale.name')}<span class="external-arrow">&nearr;</span></h3>
					<p>{t('clients.scale.description')}</p>
				</a>
			</div>
			<div class="client-card">
				<a href="https://www.fleetops.com/" target="_blank" rel="noopener noreferrer" class="client-link">
					<div class="client-logo">
						<img src={logoFleetops} alt="FleetOps" class="logo-invertible" />
					</div>
					<h3>{t('clients.fleetops.name')}<span class="external-arrow">&nearr;</span></h3>
					<p>{t('clients.fleetops.description')}</p>
				</a>
			</div>
		</div>
	</section>

	<!-- Contact -->
	<section id="contact" class="contact">
		<div class="section-header">
			<span class="section-tag">{t('nav.contact')}</span>
			<h2>{t('contact.title')}</h2>
		</div>
		<div class="contact-grid">
			<div class="contact-card">
				<div class="contact-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
				</div>
				<span class="contact-label">{t('contact.email')}</span>
				<a href="mailto:root@cwnt.io" class="contact-value">root@cwnt.io</a>
			</div>
			<div class="contact-card">
				<div class="contact-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
				</div>
				<span class="contact-label">{t('contact.location')}</span>
				<span class="contact-value">{t('contact.locationValue')}</span>
			</div>
			<div class="contact-card">
				<div class="contact-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
				</div>
				<span class="contact-label">{t('contact.linkedin')}</span>
				<a href="https://linkedin.com/company/cwnt/" target="_blank" rel="noopener noreferrer" class="contact-value">CWNT<span class="external-arrow">&nearr;</span></a>
			</div>
			<div class="contact-card">
				<div class="contact-icon">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
				</div>
				<span class="contact-label">{t('contact.github')}</span>
				<a href="https://github.com/cwnt-io" target="_blank" rel="noopener noreferrer" class="contact-value">cwnt-io<span class="external-arrow">&nearr;</span></a>
			</div>
		</div>
	</section>
</main>

<!-- Footer -->
<footer>
	<div class="footer-content">
		<div class="footer-brand">
			<img src={logo} alt="CWNT" class="footer-logo" />
			<span class="footer-name">cwnt</span>
		</div>
		<span class="footer-rights">&copy; {new Date().getFullYear()} CWNT. {t('footer.rights')}</span>
	</div>
</footer>

<style>
	/* ========================
	   Navigation
	   ======================== */
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		background: transparent;
		border-bottom: 1px solid transparent;
		transform: translateY(-100%);
		transition:
			transform 0.5s cubic-bezier(0.16, 1, 0.3, 1),
			background 0.3s ease,
			border-color 0.3s ease,
			backdrop-filter 0.3s ease;
	}

	nav.mounted {
		transform: translateY(0);
	}

	nav.scrolled {
		background: var(--nav-bg);
		backdrop-filter: blur(16px);
		-webkit-backdrop-filter: blur(16px);
		border-bottom-color: var(--color-border);
	}

	.nav-content {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0.85rem 2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.nav-brand {
		display: flex;
		align-items: center;
		gap: 0.6rem;
		text-decoration: none;
	}

	.nav-logo {
		width: 36px;
		height: 36px;
		image-rendering: pixelated;
	}

	.nav-name {
		font-family: var(--font-mono);
		font-size: 1.25rem;
		font-weight: 700;
		color: var(--color-text);
		letter-spacing: -0.02em;
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
		transition: color var(--transition);
		text-decoration: none;
	}

	.nav-links a:hover {
		color: var(--color-text);
	}

	.nav-controls {
		display: flex;
		gap: 0.4rem;
	}

	.control-btn {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		color: var(--color-text-muted);
		padding: 0.4rem 0.7rem;
		border-radius: 8px;
		font-size: 0.8rem;
		font-weight: 600;
		font-family: var(--font-mono);
		cursor: pointer;
		transition: all var(--transition);
		line-height: 1;
	}

	.control-btn:hover {
		background: var(--color-surface-hover);
		border-color: var(--color-border-hover);
		color: var(--color-text);
	}

	/* ========================
	   Hero
	   ======================== */
	.hero {
		position: relative;
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.hero-bg {
		position: absolute;
		inset: 0;
		pointer-events: none;
		overflow: hidden;
	}

	.hero-aurora {
		position: absolute;
		inset: -30%;
		background: conic-gradient(
			from 140deg at 50% 30%,
			var(--color-accent) 0%,
			var(--color-green) 25%,
			var(--color-accent) 50%,
			var(--color-green) 75%,
			var(--color-accent) 100%
		);
		filter: blur(100px) saturate(1.5);
		opacity: var(--aurora-opacity);
		animation: aurora-drift 20s ease-in-out infinite alternate;
	}

	@keyframes aurora-drift {
		0% { transform: translate3d(-4%, -2%, 0) rotate(0deg) scale(1); }
		50% { transform: translate3d(2%, 3%, 0) rotate(4deg) scale(1.05); }
		100% { transform: translate3d(4%, -1%, 0) rotate(8deg) scale(1); }
	}

	.hero-orb {
		position: absolute;
		border-radius: 50%;
		filter: blur(80px);
	}

	.hero-orb-1 {
		width: 55vw;
		height: 55vw;
		background: radial-gradient(circle, var(--color-accent), transparent 70%);
		top: -20%;
		left: -15%;
		opacity: var(--orb-opacity);
		animation: orb-drift-1 14s ease-in-out infinite alternate;
	}

	.hero-orb-2 {
		width: 45vw;
		height: 45vw;
		background: radial-gradient(circle, var(--color-green), transparent 70%);
		bottom: -15%;
		right: -10%;
		opacity: var(--orb-opacity);
		animation: orb-drift-2 11s ease-in-out infinite alternate;
		animation-delay: -4s;
	}

	.hero-orb-3 {
		width: 50vw;
		height: 50vw;
		background: radial-gradient(circle, #6d28d9, transparent 70%);
		top: 25%;
		left: 35%;
		opacity: calc(var(--orb-opacity) * 0.7);
		animation: orb-drift-3 16s ease-in-out infinite alternate;
		animation-delay: -7s;
	}

	.hero-orb-4 {
		width: 35vw;
		height: 35vw;
		background: radial-gradient(circle, var(--color-green), transparent 70%);
		top: -5%;
		right: 15%;
		opacity: calc(var(--orb-opacity) * 0.5);
		animation: orb-drift-1 19s ease-in-out infinite alternate;
		animation-delay: -10s;
	}

	@keyframes orb-drift-1 {
		0% { transform: scale(1) translate(0, 0); }
		100% { transform: scale(1.2) translate(12%, -15%); }
	}

	@keyframes orb-drift-2 {
		0% { transform: scale(1) translate(0, 0); }
		100% { transform: scale(0.9) translate(-15%, 18%); }
	}

	@keyframes orb-drift-3 {
		0% { transform: scale(1) translate(0, 0); }
		100% { transform: scale(1.15) translate(8%, -12%); }
	}

	.hero-grid {
		position: absolute;
		inset: 0;
		background-image:
			linear-gradient(rgba(139, 92, 246, 0.08) 1px, transparent 1px),
			linear-gradient(90deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px);
		background-size: 28px 28px;
		mask-image: radial-gradient(ellipse 60% 50% at 50% 45%, black 30%, transparent 100%);
		-webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 45%, black 30%, transparent 100%);
	}

	.hero-noise {
		position: absolute;
		inset: 0;
		opacity: 0.04;
		mix-blend-mode: overlay;
		background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
		background-repeat: repeat;
		background-size: 256px 256px;
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-aurora,
		.hero-orb { animation: none; }
	}

	.hero-content {
		position: relative;
		z-index: 1;
		text-align: center;
		max-width: 750px;
		padding: 0 2rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.5rem;
		opacity: 0;
		transform: translateY(24px);
		transition: opacity 0.8s ease-out, transform 0.8s ease-out;
	}

	.hero-content.mounted {
		opacity: 1;
		transform: translateY(0);
	}

	.hero-logo {
		width: 120px;
		height: 120px;
		image-rendering: pixelated;
		filter: drop-shadow(0 0 40px var(--color-accent-glow));
		animation: logoPulse 4s ease-in-out infinite;
	}

	@keyframes logoPulse {
		0%, 100% { filter: drop-shadow(0 0 30px var(--color-accent-glow)); }
		50% { filter: drop-shadow(0 0 50px var(--color-accent-glow)) drop-shadow(0 0 80px var(--color-green-glow)); }
	}

	.hero-title {
		font-size: clamp(2.5rem, 6vw, 4.2rem);
		font-weight: 800;
		line-height: 1.1;
		letter-spacing: -0.03em;
		background: linear-gradient(135deg, var(--color-text) 0%, var(--color-accent) 50%, var(--color-green) 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.hero-subtitle {
		font-size: clamp(1rem, 2vw, 1.2rem);
		color: var(--color-text-muted);
		max-width: 560px;
		line-height: 1.7;
	}

	.hero-cta {
		display: flex;
		gap: 1rem;
		margin-top: 0.5rem;
	}

	.btn-primary {
		display: inline-flex;
		align-items: center;
		padding: 0.75rem 1.75rem;
		background: var(--color-accent);
		color: #fff;
		font-weight: 600;
		font-size: 0.95rem;
		border-radius: 10px;
		transition: all var(--transition);
		box-shadow: 0 0 20px var(--color-accent-glow);
		text-decoration: none;
	}

	.btn-primary:hover {
		background: var(--color-accent-hover);
		box-shadow: 0 0 30px var(--color-accent-glow);
		transform: translateY(-1px);
		color: #fff;
	}

	.btn-secondary {
		display: inline-flex;
		align-items: center;
		padding: 0.75rem 1.75rem;
		background: transparent;
		color: var(--color-text);
		font-weight: 600;
		font-size: 0.95rem;
		border: 1px solid var(--color-border);
		border-radius: 10px;
		transition: all var(--transition);
		text-decoration: none;
	}

	.btn-secondary:hover {
		border-color: var(--color-border-hover);
		background: var(--color-surface);
		transform: translateY(-1px);
		color: var(--color-text);
	}

	/* ========================
	   Sections shared
	   ======================== */
	main {
		max-width: var(--max-width);
		margin: 0 auto;
		padding: 0 2rem;
	}

	.section-header {
		margin-bottom: 3rem;
	}

	.section-tag {
		display: inline-block;
		font-family: var(--font-mono);
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--color-accent);
		text-transform: uppercase;
		letter-spacing: 0.1em;
		margin-bottom: 0.75rem;
		padding: 0.3rem 0.8rem;
		background: var(--color-accent-glow);
		border-radius: 20px;
	}

	.section-header h2 {
		font-size: clamp(1.8rem, 4vw, 2.5rem);
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	/* ========================
	   Services
	   ======================== */
	.services {
		padding: 6rem 0 8rem;
	}

	.services-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
	}

	.service-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: 2rem;
		transition: all var(--transition);
		position: relative;
		overflow: hidden;
	}

	.service-card::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(circle at 50% 0%, var(--card-glow) 0%, transparent 70%);
		opacity: 0;
		transition: opacity var(--transition);
	}

	.service-card:hover {
		border-color: var(--color-border-hover);
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
	}

	.service-card:hover::before {
		opacity: 1;
	}

	.service-icon {
		width: 44px;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--color-accent-glow);
		border-radius: 10px;
		margin-bottom: 1.25rem;
		color: var(--color-accent);
		position: relative;
	}

	.service-icon svg {
		width: 22px;
		height: 22px;
	}

	.service-card h3 {
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.6rem;
		position: relative;
	}

	.service-card p {
		color: var(--color-text-muted);
		font-size: 0.9rem;
		line-height: 1.65;
		position: relative;
	}

	/* ========================
	   Open Source
	   ======================== */
	.opensource {
		padding: 0 0 8rem;
	}

	.opensource-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	.repo-card {
		display: block;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: 1.5rem;
		text-decoration: none;
		color: inherit;
		transition: all var(--transition);
	}

	.repo-card:hover {
		border-color: var(--color-border-hover);
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
		color: inherit;
	}

	.repo-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
	}

	.repo-icon {
		width: 18px;
		height: 18px;
		color: var(--color-text-muted);
		flex-shrink: 0;
	}

	.repo-name {
		font-family: var(--font-mono);
		font-size: 0.95rem;
		font-weight: 600;
		color: var(--color-accent);
	}

	.repo-header .external-arrow {
		margin-left: auto;
		color: var(--color-text-muted);
	}

	.repo-desc {
		color: var(--color-text-muted);
		font-size: 0.85rem;
		line-height: 1.5;
	}

	/* ========================
	   Clients
	   ======================== */
	.clients {
		padding: 0 0 8rem;
	}

	.clients-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1.25rem;
	}

	.client-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: 2rem;
		transition: all var(--transition);
		position: relative;
		overflow: hidden;
	}

	.client-card:hover {
		border-color: var(--color-border-hover);
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
	}

	.client-link {
		display: block;
		text-decoration: none;
		color: inherit;
	}

	.client-logo {
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		margin-bottom: 1.25rem;
	}

	.client-logo img {
		max-width: 48px;
		max-height: 48px;
		object-fit: contain;
	}

	:global([data-theme='dark']) .logo-invertible {
		filter: invert(1) brightness(1.2);
	}

	.client-card h3 {
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 0.6rem;
		display: flex;
		align-items: center;
		gap: 0.35rem;
	}

	.client-card p {
		color: var(--color-text-muted);
		font-size: 0.9rem;
		line-height: 1.65;
	}

	.external-arrow {
		font-size: 0.85em;
		opacity: 0.5;
		transition: opacity var(--transition);
	}

	.client-card:hover .external-arrow,
	.repo-card:hover .external-arrow {
		opacity: 1;
	}

	/* ========================
	   Contact
	   ======================== */
	.contact {
		padding: 0 0 8rem;
	}

	.contact-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 1.25rem;
	}

	.contact-card {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: 2rem;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		transition: all var(--transition);
	}

	.contact-card:hover {
		border-color: var(--color-border-hover);
	}

	.contact-icon {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--color-green);
		background: var(--color-green-glow);
		border-radius: 10px;
		margin-bottom: 0.5rem;
	}

	.contact-icon svg {
		width: 20px;
		height: 20px;
	}

	.contact-label {
		font-size: 0.8rem;
		color: var(--color-text-muted);
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}

	.contact-value {
		font-size: 0.95rem;
		font-weight: 500;
		color: var(--color-text);
		word-break: break-word;
		overflow-wrap: break-word;
	}

	a.contact-value:hover {
		color: var(--color-accent);
	}

	/* ========================
	   Footer
	   ======================== */
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

	.footer-brand {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.footer-logo {
		width: 22px;
		height: 22px;
		image-rendering: pixelated;
	}

	.footer-name {
		font-family: var(--font-mono);
		font-weight: 700;
		font-size: 1rem;
		color: var(--color-text);
	}

	.footer-rights {
		color: var(--color-text-muted);
		font-size: 0.85rem;
	}

	/* ========================
	   Responsive
	   ======================== */
	@media (max-width: 1024px) {
		.services-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.opensource-grid {
			grid-template-columns: repeat(2, 1fr);
		}

		.contact-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.nav-content {
			padding: 0.75rem 1.25rem;
		}

		.nav-links {
			gap: 1.25rem;
		}

		main {
			padding: 0 1.25rem;
		}

		.hero-logo {
			width: 90px;
			height: 90px;
		}

		.hero-cta {
			flex-direction: column;
			width: 100%;
			max-width: 280px;
		}

		.btn-primary,
		.btn-secondary {
			justify-content: center;
		}

		.services {
			padding: 4rem 0 5rem;
		}

		.opensource,
		.clients {
			padding: 0 0 5rem;
		}

		.contact {
			padding: 0 0 5rem;
		}

		.footer-content {
			flex-direction: column;
			gap: 0.75rem;
			text-align: center;
			padding: 0 1.25rem;
		}
	}

	@media (max-width: 580px) {
		.services-grid,
		.opensource-grid,
		.clients-grid,
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 480px) {
		.nav-links a:not(.control-btn) {
			display: none;
		}

		.nav-links {
			gap: 0.5rem;
		}

		.hero-title {
			font-size: 2rem;
		}
	}
</style>
