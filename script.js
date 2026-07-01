/*
  Kevin Funnel Website
  --------------------
  Diese Datei enthält nur Styling.
  Du kannst Farben, Abstände und Schriftgrößen später hier ändern.
*/

:root {
  --bg: #06101c;
  --bg-2: #0a1726;
  --card: rgba(12, 25, 40, 0.78);
  --card-solid: #0d1a2a;
  --line: rgba(255, 255, 255, 0.14);
  --line-strong: rgba(255, 255, 255, 0.24);
  --text: #f5f7fb;
  --muted: #aeb9c7;
  --soft: #788799;
  --blue: #2f7dff;
  --blue-2: #75b5ff;
  --gold: #f0bb68;
  --gold-2: #ffd994;
  --danger: #ff7a7a;
  --success: #82f2b1;
  --radius: 28px;
  --radius-small: 18px;
  --shadow: 0 30px 90px rgba(0, 0, 0, 0.45);
  --max: 1180px;
  --header-height: 78px;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 12px;
}

#topics,
#about,
#check-teaser,
#contact {
  scroll-margin-top: 0;
}

body {
  margin: 0;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Arial, sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at 20% 10%, rgba(47, 125, 255, 0.18), transparent 30%),
    radial-gradient(circle at 90% 30%, rgba(240, 187, 104, 0.12), transparent 28%),
    linear-gradient(180deg, #020711 0%, var(--bg) 40%, #040b14 100%);
  min-height: 100vh;
  overflow-x: hidden;
}

body.menu-open,
body.modal-open {
  overflow: hidden;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button,
input,
select,
textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.svg-sprite {
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
}

.container {
  width: min(var(--max), calc(100% - 40px));
  margin: 0 auto;
}

.site-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  min-height: var(--header-height);
  padding: 0 clamp(20px, 5vw, 64px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(3, 10, 20, 0.72);
  border-bottom: 1px solid rgba(255, 255, 255, 0.11);
  backdrop-filter: blur(18px);
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 16px;
  min-width: 0;
}

.brand-name {
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(32px, 4vw, 48px);
  line-height: 1;
  letter-spacing: -0.05em;
  color: #fff6e8;
}

.brand-line {
  display: block;
  width: 1px;
  height: 38px;
  background: rgba(255, 255, 255, 0.22);
}

.brand-sub {
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-size: 12px;
  line-height: 1.35;
}

.main-nav {
  display: flex;
  gap: 28px;
  align-items: center;
  color: rgba(255, 255, 255, 0.82);
  font-size: 15px;
}

.main-nav a {
  position: relative;
  transition: color 180ms ease;
}

.main-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: -9px;
  height: 2px;
  background: linear-gradient(90deg, var(--gold), var(--blue-2));
  opacity: 0;
  transform: scaleX(0.4);
  transition: 180ms ease;
}

.main-nav a:hover {
  color: #fff;
}

.main-nav a:hover::after,
.main-nav a:first-child::after {
  opacity: 1;
  transform: scaleX(1);
}

.menu-button {
  display: none;
  width: 46px;
  height: 46px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
}

.menu-button span {
  width: 22px;
  height: 2px;
  border-radius: 99px;
  background: currentColor;
  transition: 180ms ease;
}

.hero {
  position: relative;
  min-height: 820px;
  padding-top: calc(var(--header-height) + 76px);
  display: flex;
  align-items: center;
  overflow: hidden;
  background-image: url("assets/hero-bg.png");
  background-size: cover;
  background-position: center right;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(3, 9, 18, 0.96) 0%, rgba(3, 9, 18, 0.82) 34%, rgba(3, 9, 18, 0.25) 72%, rgba(3, 9, 18, 0.55) 100%),
    linear-gradient(0deg, #06101c 0%, transparent 25%, transparent 100%);
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 40%, rgba(47, 125, 255, 0.22), transparent 28%),
    radial-gradient(circle at 78% 70%, rgba(240, 187, 104, 0.13), transparent 32%);
  z-index: 1;
  pointer-events: none;
}

.hero-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: minmax(0, 600px) 1fr;
  align-items: center;
  width: min(1260px, calc(100% - 40px));
}

.hero-copy {
  padding: 40px 0 120px;
}

.eyebrow {
  margin: 0 0 16px;
  color: var(--blue-2);
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  font-size: 12px;
}

.eyebrow.gold {
  color: var(--gold-2);
}

h1,
h2,
h3,
p {
  margin-top: 0;
}

h1,
h2 {
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 500;
  letter-spacing: -0.055em;
}

h1 {
  font-size: clamp(48px, 7vw, 92px);
  line-height: 0.95;
  max-width: 780px;
  margin-bottom: 26px;
  text-wrap: balance;
}

h2 {
  font-size: clamp(36px, 5vw, 64px);
  line-height: 1.02;
  margin-bottom: 18px;
  text-wrap: balance;
}

h3 {
  font-size: 22px;
  margin-bottom: 10px;
}

p {
  color: var(--muted);
  line-height: 1.7;
}

.hero-text {
  max-width: 560px;
  font-size: clamp(18px, 2.2vw, 23px);
  color: rgba(255, 255, 255, 0.82);
}

.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 34px;
}

.btn {
  appearance: none;
  border: 0;
  min-height: 54px;
  padding: 0 24px;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #fff;
  font-weight: 750;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease, background 180ms ease;
  user-select: none;
  white-space: nowrap;
}

.btn svg {
  width: 20px;
  height: 20px;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  color: #0a1018;
  background: linear-gradient(135deg, #ffe1a4 0%, var(--gold) 48%, #d8933e 100%);
  box-shadow: 0 18px 45px rgba(240, 187, 104, 0.24), inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.btn-primary:hover {
  box-shadow: 0 24px 60px rgba(240, 187, 104, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.btn-secondary {
  background: linear-gradient(135deg, #1c75ff, #174a99);
  box-shadow: 0 18px 45px rgba(47, 125, 255, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.18);
}

.btn-ghost {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid var(--line);
  color: rgba(255, 255, 255, 0.86);
}

.btn-big {
  min-height: 64px;
  padding-inline: 34px;
  font-size: 18px;
}

.btn-wide {
  width: 100%;
}

.micro-note {
  margin-top: 18px;
  color: var(--soft);
  font-size: 14px;
}

.section {
  position: relative;
  padding: 105px 0;
}

.section-intro {
  padding-top: 70px;
}

.section-heading {
  max-width: 800px;
  margin-bottom: 34px;
}

.section-heading.compact {
  margin-bottom: 24px;
}

.section-heading p {
  font-size: 18px;
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.info-card,
.next-card,
.contact-form,
.disclaimer-box,
.funnel-shell {
  border: 1px solid var(--line);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03)),
    rgba(10, 23, 38, 0.72);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.info-card {
  padding: 28px;
  border-radius: var(--radius-small);
  min-height: 220px;
}

.card-number {
  display: inline-flex;
  margin-bottom: 28px;
  color: var(--gold-2);
  font-weight: 900;
  letter-spacing: 0.12em;
}

.check-container {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 42px;
  align-items: center;
}

.check-left p {
  font-size: 18px;
}

.check-bullets {
  list-style: none;
  padding: 0;
  margin: 26px 0 0;
  display: grid;
  gap: 14px;
  color: rgba(255, 255, 255, 0.84);
}

.check-bullets li {
  display: flex;
  align-items: center;
  gap: 10px;
}

.check-bullets svg,
.trust-row svg {
  width: 18px;
  height: 18px;
  color: var(--gold-2);
  flex: 0 0 auto;
}

.funnel-shell {
  min-height: 520px;
  border-radius: 32px;
  padding: clamp(24px, 4vw, 38px);
  position: relative;
  overflow: hidden;
}

.funnel-shell::before {
  content: "";
  position: absolute;
  inset: -40% -30% auto auto;
  width: 360px;
  height: 360px;
  background: radial-gradient(circle, rgba(47, 125, 255, 0.25), transparent 70%);
  pointer-events: none;
}

.funnel-topline {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 14px;
  margin-bottom: 14px;
}

.progress-track {
  position: relative;
  z-index: 1;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  overflow: hidden;
  margin-bottom: 34px;
}

.progress-fill {
  width: 0%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--blue), var(--blue-2));
  box-shadow: 0 0 24px rgba(47, 125, 255, 0.8);
  transition: width 280ms ease;
}

.question-area {
  position: relative;
  z-index: 1;
  animation: fadeUp 260ms ease both;
}

.question-area h3 {
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 500;
  letter-spacing: -0.04em;
  font-size: clamp(32px, 4vw, 46px);
  line-height: 1.05;
  margin-bottom: 10px;
}

.question-area p {
  margin-bottom: 22px;
}

.is-welcome {
  text-align: center;
  max-width: 520px;
  margin: 0 auto;
  padding-top: 12px;
}

.welcome-icon,
.next-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 20px;
  display: grid;
  place-items: center;
  border-radius: 24px;
  color: var(--blue-2);
  background: rgba(47, 125, 255, 0.14);
  border: 1px solid rgba(117, 181, 255, 0.24);
  box-shadow: 0 0 40px rgba(47, 125, 255, 0.18);
}

.welcome-icon svg,
.next-icon svg {
  width: 34px;
  height: 34px;
}

.answers-grid {
  display: grid;
  gap: 14px;
}

.answer-button {
  width: 100%;
  min-height: 78px;
  padding: 18px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(255, 255, 255, 0.055);
  color: var(--text);
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 16px;
  text-align: left;
  transition: 180ms ease;
}

.answer-button:hover,
.answer-button:focus-visible {
  outline: none;
  transform: translateY(-2px);
  border-color: rgba(117, 181, 255, 0.78);
  background: rgba(47, 125, 255, 0.15);
  box-shadow: 0 16px 45px rgba(47, 125, 255, 0.16);
}

.answer-icon {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 15px;
  background: rgba(47, 125, 255, 0.13);
  color: var(--blue-2);
}

.answer-icon svg {
  width: 24px;
  height: 24px;
}

.answer-text strong {
  display: block;
  font-size: 17px;
  margin-bottom: 4px;
}

.answer-text span {
  color: var(--muted);
  font-size: 14px;
  line-height: 1.45;
}

.answer-arrow {
  color: rgba(255, 255, 255, 0.56);
}

.privacy-line {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 28px 0 0;
  font-size: 13px;
  color: var(--soft);
}

.privacy-line svg {
  width: 16px;
  height: 16px;
}

.result-section {
  position: relative;
  min-height: 760px;
  padding: 120px 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-block: 1px solid var(--line);
}

.result-bg {
  position: absolute;
  inset: 0;
  background-image: url("assets/result-bg.png");
  background-size: cover;
  background-position: center right;
  opacity: 0.95;
}

.result-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(3, 9, 18, 0.94) 0%, rgba(3, 9, 18, 0.78) 43%, rgba(3, 9, 18, 0.34) 100%),
    linear-gradient(0deg, rgba(6, 16, 28, 1) 0%, transparent 18%, transparent 78%, rgba(6, 16, 28, 0.92) 100%);
  z-index: 1;
}

.result-wrap {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 360px minmax(0, 650px);
  gap: 52px;
  align-items: center;
}

.portrait-card {
  border-radius: 32px;
  padding: 10px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.26), rgba(255, 255, 255, 0.04));
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: var(--shadow);
}

.portrait-card img {
  border-radius: 24px;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

.result-content {
  padding: 34px;
  border-radius: 32px;
  background: rgba(6, 16, 28, 0.56);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(14px);
  box-shadow: var(--shadow);
}

.result-text p {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.82);
}

.result-text .result-tagline {
  color: #fff;
  font-size: 22px;
  line-height: 1.45;
  margin-bottom: 16px;
}

.result-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 30px;
}

.trust-row {
  display: flex;
  gap: 18px;
  flex-wrap: wrap;
  margin-top: 22px;
  color: rgba(255, 255, 255, 0.78);
  font-size: 14px;
}

.trust-row span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.next-section {
  padding-top: 80px;
}

.next-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.next-card {
  border-radius: 28px;
  padding: 24px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 18px;
  align-items: center;
}

.next-icon {
  margin: 0;
  width: 64px;
  height: 64px;
}

.video-card {
  grid-template-columns: 150px 1fr auto;
}

.video-thumb {
  position: relative;
  overflow: hidden;
  border-radius: 22px;
  border: 1px solid var(--line);
  min-height: 112px;
}

.video-thumb img {
  width: 100%;
  height: 112px;
  object-fit: cover;
}

.play-bubble {
  position: absolute;
  inset: 0;
  margin: auto;
  width: 58px;
  height: 58px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
}

.play-bubble svg {
  width: 28px;
  height: 28px;
}

.contact-section {
  padding-top: 80px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 38px;
  align-items: start;
}

.contact-copy p {
  font-size: 18px;
}

.disclaimer-box {
  border-radius: 24px;
  padding: 22px;
  margin-top: 26px;
}

.disclaimer-box strong {
  color: #fff;
}

.disclaimer-box p {
  margin: 8px 0 0;
  font-size: 15px;
}

.contact-form {
  border-radius: 32px;
  padding: clamp(22px, 4vw, 36px);
}

.form-row {
  margin-bottom: 18px;
}

.form-row label,
.contact-form > label:not(.hp-field) {
  display: block;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.88);
  font-weight: 700;
}

input,
select,
textarea {
  width: 100%;
  color: var(--text);
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 16px;
  padding: 15px 16px;
  outline: none;
  transition: 160ms ease;
}

input:focus,
select:focus,
textarea:focus {
  border-color: rgba(117, 181, 255, 0.7);
  box-shadow: 0 0 0 4px rgba(47, 125, 255, 0.16);
}

select option {
  background: #0d1a2a;
  color: #fff;
}

textarea {
  resize: vertical;
}

.two-cols {
  display: grid;
  grid-template-columns: 1fr 0.6fr;
  gap: 14px;
}

.checkbox-row {
  display: grid !important;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: start;
  color: var(--muted);
  font-weight: 500 !important;
  margin: 14px 0;
  line-height: 1.5;
}

.checkbox-row input {
  width: 18px;
  height: 18px;
  margin-top: 2px;
}

.checkbox-row a {
  color: var(--blue-2);
  text-decoration: underline;
  text-underline-offset: 3px;
}

.hp-field {
  display: none !important;
}

.form-message {
  min-height: 28px;
  margin: 14px 0 0;
  font-weight: 700;
}

.form-message.success {
  color: var(--success);
}

.form-message.error {
  color: var(--danger);
}

.about-section {
  padding-top: 60px;
}

.about-grid {
  display: grid;
  grid-template-columns: 320px minmax(0, 720px);
  gap: 48px;
  align-items: center;
}

.about-image {
  border-radius: 32px;
  overflow: hidden;
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
}

.about-image img {
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

.site-footer {
  border-top: 1px solid var(--line);
  padding: 60px 0 30px;
  background: rgba(3, 9, 18, 0.82);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr 1fr;
  gap: 30px;
}

.footer-brand .brand-name {
  font-size: 34px;
}

.footer-legal h3 {
  margin: 0 0 10px;
}

.footer-legal p,
.site-footer p {
  font-size: 14px;
}

.legal-bottom {
  margin-top: 28px;
  padding-top: 22px;
  border-top: 1px solid var(--line);
}

.legal-bottom p {
  margin-bottom: 0;
}

.modal {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: grid;
  place-items: center;
  padding: 22px;
}

.modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(12px);
}

.modal-card {
  position: relative;
  width: min(560px, 100%);
  border: 1px solid var(--line);
  border-radius: 28px;
  background: var(--card-solid);
  padding: 28px;
  box-shadow: var(--shadow);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 42px;
  height: 42px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  font-size: 28px;
}

.fake-video {
  height: 230px;
  display: grid;
  place-items: center;
  gap: 12px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(47, 125, 255, 0.22), rgba(240, 187, 104, 0.12));
  border: 1px solid var(--line);
}

.fake-video svg {
  width: 70px;
  height: 70px;
}

.is-hidden {
  display: none !important;
}

.reveal {
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 600ms ease, transform 600ms ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 980px) {
  :root {
    --header-height: 72px;
  }

  .menu-button {
    display: inline-flex;
    z-index: 60;
  }

  .main-nav {
    position: fixed;
    inset: var(--header-height) 16px auto 16px;
    display: grid;
    gap: 0;
    padding: 14px;
    border: 1px solid var(--line);
    border-radius: 24px;
    background: rgba(8, 18, 31, 0.96);
    box-shadow: var(--shadow);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: 180ms ease;
  }

  .main-nav.is-open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .main-nav a {
    padding: 16px;
    border-radius: 14px;
  }

  .main-nav a:hover {
    background: rgba(255, 255, 255, 0.06);
  }

  .main-nav a::after {
    display: none;
  }

  .brand-sub,
  .brand-line {
    display: none;
  }

  .hero {
    min-height: auto;
    padding: calc(var(--header-height) + 50px) 0 72px;
    background-position: center top;
  }

  .hero::before {
    background:
      linear-gradient(180deg, rgba(3, 9, 18, 0.58) 0%, rgba(3, 9, 18, 0.86) 46%, rgba(3, 9, 18, 0.98) 100%),
      linear-gradient(90deg, rgba(3, 9, 18, 0.88) 0%, rgba(3, 9, 18, 0.45) 100%);
  }

  .hero-grid,
  .check-container,
  .result-wrap,
  .contact-grid,
  .about-grid {
    grid-template-columns: 1fr;
  }

  .hero-copy {
    padding: 150px 0 30px;
  }

  .steps-grid,
  .next-grid,
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .result-wrap {
    gap: 24px;
  }

  .portrait-card {
    width: min(320px, 100%);
  }

  .next-card,
  .video-card {
    grid-template-columns: 1fr;
  }

  .video-thumb {
    max-width: 240px;
  }
}

@media (max-width: 640px) {
  .container {
    width: min(100% - 28px, var(--max));
  }

  .site-header {
    padding: 0 14px;
  }

  .brand-name {
    font-size: 34px;
  }

  h1 {
    font-size: clamp(48px, 15vw, 62px);
  }

  h2 {
    font-size: clamp(34px, 10vw, 46px);
  }

  .hero-text {
    font-size: 18px;
  }

  .hero-actions,
  .result-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .section {
    padding: 74px 0;
  }

  .funnel-shell,
  .result-content,
  .contact-form {
    border-radius: 24px;
  }

  .answer-button {
    grid-template-columns: auto 1fr;
  }

  .answer-arrow {
    display: none;
  }

  .two-cols {
    grid-template-columns: 1fr;
  }

  .result-section {
    padding: 82px 0;
  }

  .trust-row {
    display: grid;
  }
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}

/* ------------------------------------------------------------
   Check-Teaser-Basis
   ------------------------------------------------------------
   Nur die normalen Seiten-Elemente des Check-Teasers.
   Die Fokusmodus-/Overlay-Regeln stehen gesammelt im finalen
   Check-CSS darunter, damit keine Doppelregeln greifen.
*/

.section-focus {
  padding-top: 70px;
}

.focus-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 34px;
  align-items: center;
}

.focus-copy p {
  font-size: 18px;
}

.focus-card {
  border: 1px solid var(--line);
  border-radius: 30px;
  padding: 26px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 18px;
  align-items: center;
  background:
    radial-gradient(circle at 20% 20%, rgba(47, 125, 255, 0.18), transparent 32%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.085), rgba(255, 255, 255, 0.035)),
    rgba(10, 23, 38, 0.76);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.focus-card h3 {
  margin-bottom: 6px;
}

.focus-card p {
  margin-bottom: 0;
  color: var(--muted);
}

.focus-icon {
  width: 68px;
  height: 68px;
  display: grid;
  place-items: center;
  border-radius: 24px;
  color: var(--blue-2);
  background: rgba(47, 125, 255, 0.14);
  border: 1px solid rgba(117, 181, 255, 0.24);
  box-shadow: 0 0 40px rgba(47, 125, 255, 0.2);
}

.focus-icon svg {
  width: 32px;
  height: 32px;
}

@keyframes checkEnter {
  from {
    opacity: 0;
    transform: translateY(18px) scale(0.985);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 980px) {
  .focus-grid {
    grid-template-columns: 1fr;
  }

  .focus-card {
    grid-template-columns: auto 1fr;
  }

  .focus-card .btn {
    grid-column: 1 / -1;
    width: 100%;
  }
}

/* =========================================================
   Fokus-Check
   Ziel: Vollbild-Ort, kein Webseiten-Scroll, kurze Buttons,
   klare Trennung, keine überlappenden Texte.
   ========================================================= */

body.check-open {
  overflow: hidden;
}

.check-overlay {
  position: fixed;
  inset: 0;
  z-index: 120;
  display: grid;
  place-items: center;
  padding: clamp(10px, 2vw, 24px);
  overflow: hidden;
  isolation: isolate;
}

.check-overlay.is-hidden {
  display: none;
}

.check-backdrop {
  position: absolute;
  inset: 0;
  background:
    linear-gradient(90deg, rgba(3, 8, 18, 0.98) 0%, rgba(5, 13, 28, 0.86) 52%, rgba(3, 8, 18, 0.96) 100%),
    url("assets/hero-bg.png") center / cover no-repeat;
  filter: saturate(0.9) brightness(0.78);
  transform: scale(1.03);
}

.check-backdrop::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 18% 15%, rgba(47, 125, 255, 0.24), transparent 30%),
    radial-gradient(circle at 82% 78%, rgba(240, 187, 104, 0.16), transparent 27%),
    linear-gradient(180deg, rgba(3, 7, 15, 0.05), rgba(3, 7, 15, 0.48));
  backdrop-filter: blur(11px);
}

.check-stage {
  position: relative;
  z-index: 1;
  width: min(920px, 100%);
  height: min(690px, calc(100dvh - 32px));
  min-height: 0;
  display: grid;
  grid-template-rows: auto auto auto 1fr auto;
  gap: clamp(10px, 1.6vh, 16px);
  border-radius: clamp(22px, 3vw, 34px);
  padding: clamp(16px, 2.4vw, 30px);
  border: 1px solid rgba(255, 255, 255, 0.16);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.105), rgba(255, 255, 255, 0.035)),
    rgba(8, 18, 31, 0.92);
  box-shadow: 0 38px 120px rgba(0, 0, 0, 0.66);
  backdrop-filter: blur(25px);
  animation: checkEnter 280ms ease both;
  outline: none;
  overflow: hidden;
}

.check-stage::before {
  content: "";
  position: absolute;
  top: -180px;
  right: -160px;
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(47, 125, 255, 0.24), transparent 68%);
  pointer-events: none;
}

.check-stage::after {
  content: "";
  position: absolute;
  left: -160px;
  bottom: -220px;
  width: 440px;
  height: 440px;
  background: radial-gradient(circle, rgba(240, 187, 104, 0.12), transparent 68%);
  pointer-events: none;
}

.check-stage-header,
.check-stage .funnel-topline,
.check-stage .progress-track,
.check-stage .question-area,
.check-stage .privacy-line {
  position: relative;
  z-index: 2;
}

.check-stage-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 14px;
  margin: 0;
}

.check-title-block {
  min-width: 0;
  display: flex;
  align-items: baseline;
  gap: 12px;
}

.check-brand-text {
  color: #fffaf0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(26px, 3vw, 38px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1;
}

.check-subtitle {
  color: rgba(230, 238, 250, 0.62);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  white-space: nowrap;
}

.check-close {
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  display: grid;
  place-items: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.07);
  color: #fff;
  font-size: 28px;
  line-height: 1;
  transition: 180ms ease;
}

.check-close:hover,
.check-close:focus-visible {
  outline: none;
  border-color: rgba(117, 181, 255, 0.72);
  background: rgba(47, 125, 255, 0.18);
  transform: translateY(-1px);
}

.check-stage .funnel-topline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin: 0;
  color: rgba(229, 239, 255, 0.72);
  font-size: 14px;
  font-weight: 800;
}


#stepCounter {
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.11);
}

.check-stage .progress-track {
  height: 8px;
  margin: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.11);
  overflow: hidden;
}

.check-stage .progress-fill {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #2f7dff, #79bdff);
  box-shadow: 0 0 20px rgba(47, 125, 255, 0.65);
  transition: width 260ms ease;
}

.check-stage .question-area {
  min-height: 0;
  display: grid;
  grid-template-rows: auto 1fr;
  align-content: center;
  gap: clamp(14px, 2vh, 20px);
  padding: clamp(4px, 0.6vw, 8px) 0 0;
  overflow: hidden;
}

.question-copy {
  max-width: 800px;
}

.question-kicker {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  margin-bottom: 8px;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(47, 125, 255, 0.13);
  border: 1px solid rgba(117, 181, 255, 0.28);
  color: #8cc4ff;
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.check-stage .question-area h3 {
  max-width: 820px;
  margin: 0;
  color: #fffaf0;
  font-size: clamp(28px, 4vw, 46px);
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.check-stage .question-area p {
  max-width: 680px;
  margin: 10px 0 0;
  color: rgba(229, 239, 255, 0.72);
  font-size: clamp(14px, 1.6vw, 17px);
  line-height: 1.45;
}

.check-stage .answers-grid {
  min-height: 0;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-content: center;
  gap: 12px;
}

.check-stage .answer-count-6 .answers-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.check-stage .answer-button {
  min-width: 0;
  min-height: clamp(70px, 10.5vh, 92px);
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: center;
  gap: 12px;
  padding: clamp(12px, 1.7vw, 18px);
  border-radius: 22px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.078), rgba(255, 255, 255, 0.035)),
    rgba(255, 255, 255, 0.045);
  color: #fff;
  text-align: left;
  cursor: pointer;
  transition: transform 170ms ease, border-color 170ms ease, background 170ms ease, box-shadow 170ms ease;
  overflow: hidden;
}

.check-stage .answer-button.is-selected {
  border-color: rgba(117, 181, 255, 0.95);
  background: rgba(47, 125, 255, 0.24);
  box-shadow: 0 16px 50px rgba(47, 125, 255, 0.24);
}

.check-stage .answer-button:disabled {
  cursor: default;
}

.answer-emoji {
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  background: rgba(47, 125, 255, 0.18);
  box-shadow: inset 0 0 0 1px rgba(117, 181, 255, 0.18);
  font-size: 20px;
}

.check-stage .answer-text {
  min-width: 0;
  display: grid;
  gap: 4px;
}

.check-stage .answer-text strong {
  color: #fff;
  font-size: clamp(16px, 1.85vw, 20px);
  line-height: 1.08;
  letter-spacing: -0.02em;
}

.check-stage .answer-text small {
  color: rgba(229, 239, 255, 0.62);
  font-size: clamp(12px, 1.1vw, 14px);
  line-height: 1.25;
}

.check-stage .answer-arrow {
  width: 24px;
  height: 24px;
  color: rgba(229, 239, 255, 0.58);
}

.check-stage .answer-arrow svg {
  width: 100%;
  height: 100%;
}

.check-stage .privacy-line {
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  color: rgba(229, 239, 255, 0.54);
  font-size: 13px;
  text-align: center;
}

.check-stage .privacy-line svg {
  width: 16px;
  height: 16px;
  color: #74b4ff;
}

.question-area.is-welcome {
  display: grid;
  place-items: center;
}

.finish-card {
  width: min(520px, 100%);
  display: grid;
  justify-items: center;
  gap: 12px;
  padding: clamp(22px, 4vw, 34px);
  border-radius: 28px;
  border: 1px solid rgba(117, 181, 255, 0.28);
  background: rgba(255, 255, 255, 0.065);
  text-align: center;
}

.question-area.is-welcome h3 {
  font-size: clamp(28px, 5vw, 44px);
  text-align: center;
}

.question-area.is-welcome p {
  margin-top: 0;
  text-align: center;
}

.welcome-icon {
  width: 62px;
  height: 62px;
  display: grid;
  place-items: center;
  border-radius: 22px;
  background: rgba(47, 125, 255, 0.18);
  color: #8cc4ff;
  border: 1px solid rgba(117, 181, 255, 0.25);
  box-shadow: 0 0 42px rgba(47, 125, 255, 0.24);
}

.welcome-icon svg {
  width: 30px;
  height: 30px;
}


/* Check: Text darf sauber umbrechen; echte Auswahl ist nur .is-selected. */
.check-stage .answer-button {
  -webkit-tap-highlight-color: transparent;
}

.check-stage .answer-text,
.check-stage .answer-text strong,
.check-stage .answer-text small {
  min-width: 0;
  max-width: 100%;
}

.check-stage .answer-text strong {
  overflow-wrap: anywhere;
  word-break: normal;
  hyphens: auto;
}

.check-stage .answer-text small {
  display: block;
  overflow-wrap: break-word;
}

@media (hover: hover) and (pointer: fine) {
  .check-stage .answer-button:hover:not(.is-selected) {
    transform: translateY(-2px);
    border-color: rgba(117, 181, 255, 0.78);
    background: rgba(47, 125, 255, 0.14);
    box-shadow: 0 16px 44px rgba(47, 125, 255, 0.18);
  }
}

.check-stage .answer-button:focus-visible:not(.is-selected) {
  outline: none;
  transform: none;
  border-color: rgba(240, 187, 104, 0.68);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.078), rgba(255, 255, 255, 0.035)),
    rgba(255, 255, 255, 0.045);
  box-shadow: 0 0 0 3px rgba(240, 187, 104, 0.14);
}

@media (hover: none), (pointer: coarse) {
  .check-stage .answer-button:hover:not(.is-selected),
  .check-stage .answer-button:focus:not(:focus-visible):not(.is-selected) {
    transform: none;
    border-color: rgba(255, 255, 255, 0.14);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.078), rgba(255, 255, 255, 0.035)),
      rgba(255, 255, 255, 0.045);
    box-shadow: none;
  }
}

@media (max-width: 860px) {
  .check-stage {
    width: min(680px, 100%);
    height: min(720px, calc(100dvh - 22px));
  }

  .check-stage .answer-count-6 .answers-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .check-overlay {
    padding: 10px;
  }

  .check-stage {
    height: calc(100dvh - 20px);
    grid-template-rows: auto auto auto minmax(0, 1fr) auto;
    gap: 10px;
    padding: 16px;
    border-radius: 25px;
  }

  .check-title-block {
    display: grid;
    gap: 2px;
  }

  .check-brand-text {
    font-size: 28px;
  }

  .check-subtitle {
    font-size: 10px;
    letter-spacing: 0.12em;
  }

  .check-close {
    width: 40px;
    height: 40px;
    flex-basis: 40px;
    border-radius: 14px;
  }

  .check-stage .funnel-topline {
    font-size: 12px;
    justify-content: flex-end;
  }

  #stepCounter {
    padding: 5px 8px;
  }

  .check-stage .progress-track {
    height: 7px;
  }

  .question-kicker {
    margin-bottom: 6px;
    padding: 5px 8px;
    font-size: 10px;
  }

  .check-stage .question-area {
    align-content: start;
    justify-content: stretch;
    gap: 12px;
    padding: 2px 2px 0 0;
    overflow-y: auto;
  }

  .check-stage .question-area h3 {
    font-size: clamp(25px, 8vw, 36px);
    line-height: 1;
  }

  .check-stage .question-area p {
    margin-top: 7px;
    font-size: 13px;
    line-height: 1.35;
  }

  .check-stage .answers-grid,
  .check-stage .answer-count-6 .answers-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    align-content: start;
    gap: 8px;
  }

  .check-stage .answer-button {
    min-height: 72px;
    grid-template-columns: auto minmax(0, 1fr);
    gap: 10px;
    padding: 11px 12px;
    border-radius: 18px;
  }

  .check-stage .answer-count-6 .answer-button {
    min-height: 76px;
    padding: 10px 9px;
    gap: 8px;
  }

  .answer-emoji {
    width: 34px;
    height: 34px;
    border-radius: 13px;
    font-size: 17px;
  }

  .check-stage .answer-count-6 .answer-emoji {
    width: 30px;
    height: 30px;
    border-radius: 12px;
    font-size: 15px;
  }

  .check-stage .answer-text strong {
    font-size: 15px;
    line-height: 1.12;
  }

  .check-stage .answer-count-6 .answer-text strong {
    font-size: clamp(12.5px, 3.45vw, 14px);
    line-height: 1.1;
    letter-spacing: -0.025em;
  }

  .check-stage .answer-text small,
  .check-stage .answer-count-6 .answer-text small {
    display: block;
    font-size: 11px;
    line-height: 1.18;
  }

  .check-stage .answer-arrow {
    display: none;
  }

  .check-stage .privacy-line {
    font-size: 11px;
  }
}

@media (max-width: 430px) {
  .check-stage .answer-count-6 .answer-button {
    min-height: 76px;
    padding: 9px 8px;
  }

  .check-stage .answer-count-6 .answer-emoji {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }

  .check-stage .answer-count-6 .answer-text strong {
    font-size: clamp(12px, 3.35vw, 13.5px);
  }

  .check-stage .answer-count-6 .answer-text small {
    font-size: 10.7px;
  }
}

@media (max-width: 359px) {
  .check-stage {
    padding: 13px;
  }

  .check-stage .answers-grid,
  .check-stage .answer-count-6 .answers-grid {
    grid-template-columns: 1fr;
  }

  .check-stage .answer-button,
  .check-stage .answer-count-6 .answer-button {
    min-height: 58px;
    padding: 9px 10px;
    gap: 8px;
  }

  .answer-emoji,
  .check-stage .answer-count-6 .answer-emoji {
    width: 30px;
    height: 30px;
    border-radius: 11px;
    font-size: 15px;
  }

  .check-stage .answer-text strong,
  .check-stage .answer-count-6 .answer-text strong {
    font-size: 13px;
  }

  .check-stage .answer-text small,
  .check-stage .answer-count-6 .answer-text small {
    display: block;
    font-size: 11px;
    line-height: 1.16;
  }
}

@media (max-height: 610px) and (max-width: 640px) {
  .check-stage {
    height: calc(100dvh - 14px);
    padding: 12px;
    gap: 8px;
  }

  .check-brand-text {
    font-size: 26px;
  }

  .check-subtitle,
  .question-kicker,
  .check-stage .privacy-line {
    display: none;
  }

  .check-stage .question-area {
    overflow-y: auto;
  }

  .check-stage .question-area h3 {
    font-size: clamp(24px, 6vh, 34px);
  }

  .check-stage .question-area p {
    margin-top: 5px;
    font-size: 12px;
  }

  .check-stage .answer-button,
  .check-stage .answer-count-6 .answer-button {
    min-height: 52px;
    padding: 8px 10px;
    border-radius: 16px;
  }

  .check-stage .answer-text small {
    display: none;
  }
}


/* ------------------------------------------------------------
   Direkt-Kontakt + Datenschutz-/Consent-Erweiterung
   ------------------------------------------------------------ */

.nav-cta {
  appearance: none;
  border: 1px solid rgba(240, 187, 104, 0.45);
  border-radius: 999px;
  padding: 10px 16px;
  color: #07101c;
  font-weight: 800;
  background: linear-gradient(135deg, #ffe1a4, var(--gold));
  box-shadow: 0 12px 30px rgba(240, 187, 104, 0.18);
  cursor: pointer;
}

.nav-cta:hover {
  transform: translateY(-1px);
}

.soft-link {
  opacity: 0.84;
}

.focus-actions-inline,
.about-actions {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.focus-actions-inline {
  justify-content: flex-end;
}

.mini-contact,
.footer-link-button,
.footer-contact-button {
  appearance: none;
  border: 0;
  background: transparent;
  color: var(--blue-2);
  font-weight: 800;
  cursor: pointer;
  padding: 0;
  text-align: left;
}

.mini-contact {
  padding: 10px 12px;
  border-radius: 999px;
  color: rgba(255,255,255,0.85);
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.055);
}

.footer-contact-button {
  color: #0a1018;
  background: linear-gradient(135deg, #ffe1a4, var(--gold));
  border-radius: 14px;
  padding: 12px 14px;
  box-shadow: 0 12px 32px rgba(240, 187, 104, 0.16);
}

.privacy-mini {
  font-size: 13px;
  line-height: 1.55;
  color: rgba(202, 214, 232, 0.74);
  margin: 10px 0 18px;
  padding: 14px;
  border-radius: 16px;
  background: rgba(47, 125, 255, 0.08);
  border: 1px solid rgba(117, 181, 255, 0.16);
}

.legal-section {
  position: relative;
  padding: 90px 0;
  background:
    radial-gradient(circle at 12% 0%, rgba(47, 125, 255, 0.14), transparent 28%),
    linear-gradient(180deg, rgba(4, 11, 22, 0.96), rgba(4, 11, 22, 0.82));
  border-top: 1px solid var(--line);
}

.compact-legal {
  padding-top: 55px;
}

.legal-layout {
  display: grid;
  grid-template-columns: minmax(260px, 0.65fr) minmax(0, 1.35fr);
  gap: 26px;
  align-items: start;
}

.two-column-legal {
  grid-template-columns: 0.75fr 1.25fr;
}

.legal-intro {
  position: sticky;
  top: calc(var(--header-height) + 24px);
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 28px;
  padding: clamp(22px, 3vw, 32px);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.03)),
    rgba(9, 20, 35, 0.72);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.legal-intro p {
  font-size: 16px;
}

.legal-card {
  grid-column: 2;
  border: 1px solid rgba(255, 255, 255, 0.10);
  border-radius: 24px;
  padding: clamp(20px, 2.4vw, 28px);
  margin-bottom: 16px;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.07), rgba(255, 255, 255, 0.025)),
    rgba(10, 23, 38, 0.70);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.24);
}

.two-column-legal .legal-card {
  grid-column: auto;
}

.legal-card h3 {
  margin-bottom: 10px;
}

.legal-card p {
  font-size: 15px;
  margin-bottom: 10px;
}

.legal-card a,
.footer-legal a {
  color: var(--blue-2);
  text-decoration: none;
}

.legal-note {
  color: rgba(255, 219, 156, 0.9) !important;
  border-left: 3px solid var(--gold);
  padding-left: 12px;
}

.consent-banner {
  position: fixed;
  left: 18px;
  right: 18px;
  bottom: 18px;
  z-index: 200;
  display: grid;
  place-items: center;
  pointer-events: none;
}

.consent-content {
  width: min(1040px, 100%);
  pointer-events: auto;
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 22px;
  align-items: center;
  padding: 22px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background:
    radial-gradient(circle at 12% 0%, rgba(47, 125, 255, 0.18), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.11), rgba(255, 255, 255, 0.04)),
    rgba(7, 17, 30, 0.96);
  box-shadow: 0 28px 90px rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(20px);
}

.consent-kicker {
  color: var(--gold);
  text-transform: uppercase;
  letter-spacing: 0.13em;
  font-size: 12px;
  font-weight: 900;
  margin-bottom: 4px;
}

.consent-content h2 {
  font-size: clamp(22px, 3vw, 32px);
  margin-bottom: 8px;
}

.consent-content p {
  margin-bottom: 0;
  font-size: 15px;
}

.consent-actions,
.modal-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.consent-modal-card {
  width: min(680px, 100%);
}

.consent-option {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 18px;
  align-items: center;
  padding: 18px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  background: rgba(255, 255, 255, 0.055);
  margin: 14px 0;
}

.consent-option strong {
  display: block;
  color: #fff;
  margin-bottom: 4px;
}

.consent-option span {
  color: var(--muted);
  font-size: 14px;
}

.consent-option input[type="checkbox"] {
  width: 26px;
  height: 26px;
  accent-color: #2f7dff;
}

.status-pill {
  border: 1px solid rgba(117, 181, 255, 0.22);
  border-radius: 999px;
  padding: 8px 10px;
  color: var(--blue-2) !important;
  background: rgba(47, 125, 255, 0.10);
  white-space: nowrap;
}

@media (max-width: 980px) {
  .nav-cta {
    width: 100%;
    padding: 15px 16px;
    border-radius: 14px;
  }

  .focus-card {
    grid-template-columns: auto 1fr;
  }

  .focus-actions-inline {
    grid-column: 1 / -1;
    justify-content: stretch;
  }

  .focus-actions-inline .btn,
  .focus-actions-inline .mini-contact {
    flex: 1;
  }

  .legal-layout,
  .two-column-legal {
    grid-template-columns: 1fr;
  }

  .legal-intro {
    position: relative;
    top: auto;
  }

  .legal-card {
    grid-column: auto;
  }

  .consent-content {
    grid-template-columns: 1fr;
  }

  .consent-actions {
    justify-content: stretch;
  }

  .consent-actions .btn {
    flex: 1 1 160px;
  }
}

@media (max-width: 640px) {
  .hero-actions .btn {
    width: 100%;
  }

  .legal-section {
    padding: 64px 0;
  }

  .consent-banner {
    left: 10px;
    right: 10px;
    bottom: 10px;
  }

  .consent-content {
    padding: 18px;
    border-radius: 22px;
  }

  .consent-actions .btn,
  .modal-actions .btn {
    width: 100%;
  }
}

/* Separate Datenschutz-/Impressum-Seiten */
.legal-page-main {
  padding-top: var(--header-height);
}

.legal-page-hero {
  position: relative;
  padding: clamp(72px, 10vw, 130px) 0 clamp(40px, 7vw, 76px);
  background:
    linear-gradient(90deg, rgba(3, 8, 17, 0.95) 0%, rgba(6, 16, 28, 0.84) 46%, rgba(6, 16, 28, 0.56) 100%),
    url("assets/hero-bg.png") center / cover no-repeat;
  border-bottom: 1px solid var(--line);
}

.legal-page-hero-inner {
  max-width: 850px;
}

.legal-page-hero h1 {
  margin: 0 0 18px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(48px, 7vw, 88px);
  line-height: 0.95;
  letter-spacing: -0.06em;
}

.legal-page-hero p {
  max-width: 720px;
  color: rgba(234, 241, 250, 0.82);
  font-size: clamp(17px, 2vw, 21px);
  line-height: 1.55;
}

.legal-page-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.legal-page-section {
  border-top: 0;
}

.nav-cta.as-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

@media (max-width: 640px) {
  .legal-page-actions .btn {
    width: 100%;
  }
}


/* ------------------------------------------------------------
   Wer-bin-ich-/Video-Bereich
   ------------------------------------------------------------
   Der Bereich nutzt weiterhin das vorhandene Kevin-Bild.
   Wenn Kevins echtes Video da ist: assets/kevin-video.mp4 ablegen.
*/

.about-grid-enhanced {
  grid-template-columns: 340px minmax(0, 780px);
}

.about-copy > p {
  max-width: 720px;
}

.about-video-panel {
  margin: 26px 0 26px;
  display: grid;
  grid-template-columns: 180px minmax(0, 1fr);
  gap: 18px;
  align-items: center;
  padding: 16px;
  border-radius: 28px;
  border: 1px solid rgba(255, 255, 255, 0.13);
  background:
    radial-gradient(circle at 0% 0%, rgba(47, 125, 255, 0.17), transparent 36%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.075), rgba(255, 255, 255, 0.028)),
    rgba(10, 23, 38, 0.62);
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.30);
}

.about-video-preview {
  position: relative;
  width: 100%;
  min-height: 128px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.055);
  padding: 0;
}

.about-video-preview img {
  width: 100%;
  height: 142px;
  object-fit: cover;
}

.about-video-copy h3 {
  margin-bottom: 6px;
}

.about-video-copy p {
  margin-bottom: 14px;
  font-size: 15px;
  line-height: 1.55;
}

.mini-eyebrow {
  display: inline-flex;
  margin-bottom: 8px;
  color: var(--gold-2);
  font-size: 11px;
  font-weight: 900;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.mini-video-button {
  appearance: none;
  border: 1px solid rgba(117, 181, 255, 0.24);
  border-radius: 999px;
  padding: 10px 14px;
  color: #fff;
  font-weight: 800;
  background: rgba(47, 125, 255, 0.14);
  transition: 180ms ease;
}

.mini-video-button:hover,
.mini-video-button:focus-visible {
  outline: none;
  transform: translateY(-1px);
  border-color: rgba(117, 181, 255, 0.7);
  background: rgba(47, 125, 255, 0.22);
}

.video-modal-card {
  width: min(820px, 100%);
}

.video-frame {
  position: relative;
  margin-top: 18px;
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: #050b14;
}

.video-player {
  width: 100%;
  aspect-ratio: 16 / 9;
  display: block;
  background: #050b14;
}

.video-fallback-note {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 14px 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.10);
  color: rgba(229, 239, 255, 0.72);
  font-size: 13px;
  line-height: 1.45;
}

.video-fallback-note svg {
  width: 22px;
  height: 22px;
  color: var(--gold-2);
  flex: 0 0 auto;
}

@media (max-width: 980px) {
  .about-grid-enhanced,
  .about-video-panel {
    grid-template-columns: 1fr;
  }

  .about-video-preview {
    max-width: 280px;
  }
}

@media (max-width: 640px) {
  .about-video-panel {
    padding: 14px;
    border-radius: 24px;
  }

  .about-video-preview,
  .about-video-preview img {
    max-width: none;
    height: 190px;
  }
}

/* =========================================================
   Sauberer Check-Teaser
   ---------------------------------------------------------
   Der sichtbare 60-Sekunden-Bereich war zu textlastig und
   die Card wirkte versetzt. Diese Overrides machen die Card
   ruhiger, klarer und button-orientierter.
   ========================================================= */

.focus-card-clean {
  min-height: 210px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(230px, 260px);
  gap: clamp(22px, 3vw, 42px);
  align-items: center;
  padding: clamp(28px, 4vw, 44px);
  border-radius: 34px;
  background:
    radial-gradient(circle at 18% 16%, rgba(47, 125, 255, 0.20), transparent 34%),
    radial-gradient(circle at 86% 80%, rgba(240, 187, 104, 0.10), transparent 30%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.085), rgba(255, 255, 255, 0.032)),
    rgba(10, 23, 38, 0.78);
}

.focus-card-main {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: clamp(18px, 2.4vw, 26px);
}

.focus-card-clean .focus-icon {
  width: clamp(66px, 6vw, 86px);
  height: clamp(66px, 6vw, 86px);
  border-radius: 26px;
  flex: 0 0 auto;
}

.focus-card-clean .focus-icon svg {
  width: 38px;
  height: 38px;
}

.focus-card-text {
  min-width: 0;
}

.focus-card-kicker {
  display: inline-flex;
  width: fit-content;
  margin-bottom: 10px;
  padding: 7px 11px;
  border-radius: 999px;
  color: var(--blue-2);
  background: rgba(47, 125, 255, 0.12);
  border: 1px solid rgba(117, 181, 255, 0.24);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.focus-card-clean h3 {
  margin: 0;
  max-width: none;
  color: #fffaf0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(34px, 3.7vw, 54px);
  line-height: 0.98;
  letter-spacing: -0.055em;
}

.focus-card-clean .focus-actions-inline {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  justify-content: stretch;
  align-items: stretch;
  width: 100%;
}

.focus-card-clean .focus-actions-inline .btn,
.focus-card-clean .mini-contact {
  width: 100%;
  min-height: 58px;
}

.focus-card-clean .mini-contact {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 18px;
  border-radius: 16px;
  color: rgba(255, 255, 255, 0.90) !important;
  background: rgba(255, 255, 255, 0.065);
  border: 1px solid rgba(255, 255, 255, 0.16);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.07);
}

.focus-card-clean .mini-contact:hover,
.focus-card-clean .mini-contact:focus-visible {
  outline: none;
  transform: translateY(-1px);
  border-color: rgba(117, 181, 255, 0.52);
  background: rgba(47, 125, 255, 0.13);
}

@media (max-width: 980px) {
  .focus-card-clean {
    grid-template-columns: 1fr;
    min-height: auto;
  }

  .focus-card-clean .focus-actions-inline {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .focus-card-clean {
    padding: 22px;
    border-radius: 26px;
  }

  .focus-card-main {
    align-items: flex-start;
  }

  .focus-card-clean h3 {
    font-size: clamp(34px, 11vw, 46px);
  }

  .focus-card-clean .focus-actions-inline {
    grid-template-columns: 1fr;
  }
}

/* =========================================================
   Check-Teaser final ausgerichtet
   ---------------------------------------------------------
   Der rechte CTA-Kasten wird komplett neu ausgerichtet:
   keine übergroße Headline, keine Überlagerung, klare Buttons.
   ========================================================= */

.section-focus .focus-grid {
  align-items: center;
}

.focus-card-clean {
  width: min(100%, 640px);
  min-height: 300px;
  margin-left: auto;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  gap: 26px;
  padding: clamp(28px, 3.8vw, 46px) !important;
  overflow: hidden;
  border-radius: 34px;
  background:
    radial-gradient(circle at 18% 18%, rgba(47, 125, 255, 0.25), transparent 38%),
    radial-gradient(circle at 86% 82%, rgba(240, 187, 104, 0.12), transparent 32%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.095), rgba(255, 255, 255, 0.035)),
    rgba(10, 23, 38, 0.82);
}

.focus-card-clean .focus-card-main {
  min-width: 0;
  display: grid !important;
  grid-template-columns: auto minmax(0, 1fr);
  align-items: center;
  gap: clamp(18px, 2.6vw, 28px);
}

.focus-card-clean .focus-icon {
  width: clamp(72px, 7vw, 92px);
  height: clamp(72px, 7vw, 92px);
  border-radius: 28px;
}

.focus-card-clean .focus-card-text {
  min-width: 0;
  overflow: hidden;
}

.focus-card-clean .focus-card-kicker {
  margin-bottom: 12px;
}

.focus-card-clean h3 {
  max-width: 390px;
  margin: 0;
  color: #fffaf0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(30px, 2.9vw, 44px);
  line-height: 1.02;
  letter-spacing: -0.052em;
  text-wrap: balance;
  overflow-wrap: normal;
}

.focus-mini-facts {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.focus-mini-facts span {
  display: inline-flex;
  align-items: center;
  min-height: 34px;
  padding: 7px 11px;
  border-radius: 999px;
  color: rgba(232, 241, 255, 0.86);
  background: rgba(255, 255, 255, 0.065);
  border: 1px solid rgba(255, 255, 255, 0.12);
  font-size: 13px;
  font-weight: 800;
  white-space: nowrap;
}

.focus-card-clean .focus-actions-inline {
  width: 100%;
  display: grid !important;
  grid-template-columns: 1fr;
  gap: 12px;
  align-items: stretch;
  justify-content: stretch;
  margin: 0;
}

.focus-card-clean .focus-actions-inline .btn,
.focus-card-clean .mini-contact {
  grid-column: auto !important;
  width: 100% !important;
  min-height: 60px;
  border-radius: 18px;
  white-space: nowrap;
}

.focus-card-clean .mini-contact {
  font-size: 16px;
  font-weight: 850;
}

@media (max-width: 980px) {
  .focus-card-clean {
    width: 100%;
    margin-left: 0;
  }
}

@media (max-width: 640px) {
  .focus-card-clean {
    min-height: auto;
    gap: 20px;
    padding: 22px !important;
    border-radius: 26px;
  }

  .focus-card-clean .focus-card-main {
    grid-template-columns: 1fr;
    justify-items: start;
    gap: 16px;
  }

  .focus-card-clean .focus-icon {
    width: 64px;
    height: 64px;
    border-radius: 22px;
  }

  .focus-card-clean h3 {
    max-width: none;
    font-size: clamp(30px, 9vw, 40px);
  }

  .focus-card-clean .focus-actions-inline {
    grid-template-columns: 1fr;
  }

  .focus-mini-facts {
    gap: 7px;
  }

  .focus-mini-facts span {
    font-size: 12px;
    min-height: 32px;
  }
}


/* Check-Teaser: Hauptbutton priorisieren */
.focus-card-clean .focus-actions-inline {
  grid-template-columns: 1fr !important;
}

/* Empfehlungsfeld im Kontaktformular: freiwillig, dezent, mobil sauber. */
.form-help {
  margin: 8px 0 0;
  color: rgba(202, 214, 232, 0.72);
  font-size: 13px;
  line-height: 1.45;
}


/* =========================================================
   Hybrid-Update: Hook-first Landingpage + Kevin + Themen
   ---------------------------------------------------------
   Bestehendes Design bleibt erhalten. Diese Ergänzungen
   ordnen die Startseite stärker als moderne Hybrid-Landingpage.
   ========================================================= */

.brand-logo {
  gap: 12px;
}

.brand-text-fallback {
  display: inline-grid;
  gap: 3px;
  min-width: 0;
}

.brand-logo .brand-name {
  font-size: clamp(24px, 2.4vw, 36px);
  letter-spacing: -0.045em;
  white-space: nowrap;
}

.brand-logo .brand-sub {
  font-size: 10px;
  letter-spacing: 0.14em;
}

.hero-hybrid {
  min-height: 860px;
}

.hero-grid-hybrid {
  grid-template-columns: minmax(0, 680px) minmax(260px, 360px);
  gap: clamp(28px, 5vw, 78px);
  justify-content: space-between;
}

.hero-hybrid h1 {
  max-width: 760px;
}

.hero-person-card,
.kevin-mini-card,
.topic-card,
.value-card {
  border: 1px solid var(--line);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.085), rgba(255, 255, 255, 0.03)),
    rgba(10, 23, 38, 0.72);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.hero-person-card {
  align-self: center;
  border-radius: 32px;
  padding: 14px;
  max-width: 340px;
  justify-self: end;
}

.hero-person-image {
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.hero-person-image img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

.hero-person-copy {
  padding: 16px 8px 6px;
}

.hero-person-copy span {
  display: block;
  color: var(--gold-2);
  font-size: 12px;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.hero-person-copy strong {
  display: block;
  color: #fff;
  font-size: 20px;
  line-height: 1.25;
}

.section-why {
  padding-top: 78px;
}

.why-grid,
.topics-grid,
.values-grid {
  display: grid;
  gap: 18px;
}

.why-grid {
  grid-template-columns: repeat(3, 1fr);
}

.why-card {
  min-height: 190px;
}

.section-kevin-bridge {
  padding-top: 70px;
  padding-bottom: 78px;
}

.kevin-bridge-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 370px);
  gap: clamp(28px, 5vw, 68px);
  align-items: center;
}

.kevin-bridge-copy p {
  font-size: 18px;
  max-width: 760px;
}

.bridge-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.kevin-mini-card {
  border-radius: 32px;
  padding: 18px;
}

.kevin-mini-logo {
  margin-bottom: 14px;
  padding: 14px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.055);
  border: 1px solid rgba(255, 255, 255, 0.11);
}

.kevin-mini-card > img {
  width: 100%;
  border-radius: 24px;
  aspect-ratio: 4 / 5;
  object-fit: cover;
}

.kevin-mini-card p {
  margin: 16px 4px 4px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 16px;
}

.section-topics {
  padding-top: 76px;
  background:
    radial-gradient(circle at 85% 10%, rgba(47, 125, 255, 0.12), transparent 30%),
    linear-gradient(180deg, rgba(4, 11, 22, 0.15), rgba(4, 11, 22, 0.54));
}

.topics-grid {
  grid-template-columns: repeat(4, 1fr);
}

.topic-card {
  min-height: 190px;
  border-radius: 24px;
  padding: 24px;
  transition: transform 180ms ease, border-color 180ms ease, background 180ms ease;
}

.topic-card:hover {
  transform: translateY(-3px);
  border-color: rgba(117, 181, 255, 0.32);
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.10), rgba(255, 255, 255, 0.035)),
    rgba(10, 23, 38, 0.82);
}

.topic-card h3 {
  color: #fffaf0;
  font-size: 21px;
  line-height: 1.2;
}

.topic-card p {
  margin-bottom: 0;
  font-size: 15px;
  line-height: 1.55;
}

.about-section-expanded {
  padding-top: 90px;
}


.values-grid {
  grid-template-columns: repeat(3, 1fr);
  margin: 22px 0 20px;
}

.value-card {
  border-radius: 22px;
  padding: 20px;
}

.value-card h3 {
  margin-bottom: 6px;
  color: #fffaf0;
}

.value-card p {
  margin-bottom: 0;
  font-size: 15px;
  line-height: 1.55;
}

.about-trust {
  margin-bottom: 24px;
}

@media (min-width: 981px) and (max-width: 1180px) {
  .main-nav {
    gap: 17px;
    font-size: 14px;
  }

  .nav-cta {
    padding-inline: 14px;
  }

  .brand-logo .brand-name {
    font-size: 28px;
  }
}

@media (max-width: 980px) {
  .brand-logo .brand-name {
    font-size: 30px;
  }

  .brand-logo .brand-sub {
    display: none;
  }

  .hero-grid-hybrid,
  .kevin-bridge-grid {
    grid-template-columns: 1fr;
  }

  .hero-grid-hybrid {
    gap: 16px;
  }

  .hero-person-card {
    display: grid;
    grid-template-columns: 86px minmax(0, 1fr);
    align-items: center;
    justify-self: start;
    width: min(100%, 390px);
    max-width: 390px;
    gap: 12px;
    padding: 10px;
    border-radius: 24px;
    margin-top: 4px;
  }

  .hero-person-image {
    border-radius: 18px;
  }

  .hero-person-image img {
    width: 86px;
    height: 86px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: 50% 24%;
  }

  .hero-person-copy {
    min-width: 0;
    padding: 0 4px 0 0;
  }

  .hero-person-copy span {
    margin-bottom: 5px;
    font-size: 10px;
    letter-spacing: 0.10em;
  }

  .hero-person-copy strong {
    font-size: 15px;
    line-height: 1.28;
  }

  .why-grid,
  .topics-grid,
  .values-grid {
    grid-template-columns: 1fr;
  }

  .topics-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .kevin-mini-card {
    max-width: 380px;
  }
}

@media (max-width: 640px) {
  .brand-logo .brand-name {
    font-size: 26px;
  }

  .hero-hybrid {
    padding-bottom: 64px;
  }

  .hero-hybrid h1 {
    font-size: clamp(42px, 12vw, 56px);
    line-height: 0.96;
  }

  .hero-hybrid .hero-text {
    font-size: 17px;
    line-height: 1.6;
  }

  .hero-actions .soft-link {
    display: inline-flex;
  }

  .hero-person-card {
    grid-template-columns: 74px minmax(0, 1fr);
    width: min(100%, 340px);
    padding: 9px;
    gap: 10px;
    border-radius: 22px;
  }

  .hero-person-image img {
    width: 74px;
    height: 74px;
  }

  .hero-person-copy strong {
    font-size: 14px;
  }

  .section-why,
  .section-kevin-bridge,
  .section-topics,
  .about-section-expanded {
    padding-top: 66px;
  }

  .why-card,
  .topic-card {
    min-height: auto;
    padding: 22px;
  }

  .why-card .card-number {
    margin-bottom: 18px;
  }

  .topics-grid {
    grid-template-columns: 1fr;
  }

  .bridge-actions,
  .about-actions {
    align-items: stretch;
    flex-direction: column;
  }

  .bridge-actions .btn,
  .about-actions .btn {
    width: 100%;
  }

  .kevin-mini-card {
    display: none;
  }

  .values-grid {
    gap: 12px;
  }

  .value-card {
    padding: 18px;
  }
}

@media (max-width: 390px) {
  .hero-hybrid h1 {
    font-size: clamp(38px, 11.2vw, 48px);
  }

  .brand-logo .brand-name {
    font-size: 23px;
  }

  .topic-card h3 {
    font-size: 19px;
  }
}


/* =========================================================
   Finales Bild-/UX-Update: Fazit-Pointer, Kevin-Brücke, Mobile
   ---------------------------------------------------------
   Nur Layout/Bildlogik. Keine Text- oder Check-Logik-Änderung.
   ========================================================= */

html,
body {
  max-width: 100%;
  overflow-x: hidden;
}

.btn {
  max-width: 100%;
  white-space: normal;
  text-align: center;
}

.site-header {
  width: 100%;
}

.main-nav,
.hero-grid,
.focus-grid,
.why-grid,
.topics-grid,
.about-grid,
.contact-grid,
.result-wrap,
.next-grid,
.footer-grid {
  min-width: 0;
}

/* Kevin-Brücke ohne mittlere Bildkarte: wirkt weiterhin hochwertig, aber ruhiger. */
.section-kevin-bridge {
  overflow: hidden;
}

.section-kevin-bridge .kevin-bridge-grid {
  grid-template-columns: minmax(0, 980px);
  justify-content: center;
}

.kevin-bridge-copy {
  position: relative;
  overflow: hidden;
  padding: clamp(26px, 4vw, 46px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 34px;
  background:
    radial-gradient(circle at 92% 18%, rgba(47, 125, 255, 0.18), transparent 32%),
    radial-gradient(circle at 8% 100%, rgba(240, 187, 104, 0.10), transparent 34%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.078), rgba(255, 255, 255, 0.028)),
    rgba(10, 23, 38, 0.62);
  box-shadow: var(--shadow);
  backdrop-filter: blur(18px);
}

.kevin-bridge-copy::after {
  content: "";
  position: absolute;
  width: 260px;
  height: 260px;
  right: -90px;
  bottom: -120px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(117, 181, 255, 0.18), transparent 70%);
  pointer-events: none;
}

.kevin-bridge-copy > * {
  position: relative;
  z-index: 1;
}

/* Fazit: neues Zeigefinger-Bild nur in der Result-Section. */
.result-wrap {
  grid-template-columns: minmax(250px, 330px) minmax(0, 680px);
  gap: clamp(28px, 4.5vw, 58px);
  justify-content: center;
}

.result-pointer-card {
  width: min(330px, 100%);
  justify-self: end;
  align-self: center;
  transform: translateX(8px);
  isolation: isolate;
}

.result-pointer-card::after {
  content: "";
  position: absolute;
  inset: auto -18px 18px auto;
  width: 120px;
  height: 120px;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(240, 187, 104, 0.22), transparent 70%);
  z-index: -1;
  pointer-events: none;
}

.result-pointer-card img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: 52% 24%;
}

.result-content {
  position: relative;
  z-index: 2;
}

.result-content::before {
  content: "";
  position: absolute;
  inset: 20px auto 20px -1px;
  width: 3px;
  border-radius: 99px;
  background: linear-gradient(180deg, var(--gold-2), rgba(47, 125, 255, 0.35));
  opacity: 0.85;
}

/* Sauberere Tablet-/Mobile-Flächen. */
@media (max-width: 980px) {
  .site-header {
    min-height: var(--header-height);
  }

  .main-nav {
    max-height: calc(100dvh - var(--header-height) - 24px);
    overflow-y: auto;
  }

  .hero-copy {
    padding: clamp(110px, 20vw, 150px) 0 24px;
  }

  .section-kevin-bridge .kevin-bridge-grid {
    grid-template-columns: 1fr;
  }

  .kevin-bridge-copy {
    padding: clamp(24px, 5vw, 38px);
  }

  .result-wrap {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .result-content {
    order: 1;
  }

  .result-pointer-card {
    order: 2;
    width: min(260px, 60vw);
    justify-self: center;
    transform: none;
  }

  .result-section {
    min-height: auto;
  }
}

@media (max-width: 820px) {
  .container {
    width: min(var(--max), calc(100% - 30px));
  }

  .topics-grid,
  .why-grid,
  .values-grid {
    grid-template-columns: 1fr;
  }

  .topic-card,
  .why-card,
  .value-card {
    min-height: auto;
  }

  .about-video-preview,
  .video-thumb {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  :root {
    --header-height: 68px;
  }

  .container {
    width: min(100% - 24px, var(--max));
  }

  .site-header {
    padding-inline: 12px;
  }

  .brand-logo .brand-name {
    max-width: calc(100vw - 92px);
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: clamp(22px, 7vw, 26px);
  }

  .menu-button {
    width: 42px;
    height: 42px;
    flex: 0 0 42px;
  }

  .hero {
    padding: calc(var(--header-height) + 32px) 0 56px;
    background-position: 66% top;
  }

  .hero::before {
    background:
      linear-gradient(180deg, rgba(3, 9, 18, 0.55) 0%, rgba(3, 9, 18, 0.86) 40%, rgba(3, 9, 18, 0.99) 100%),
      linear-gradient(90deg, rgba(3, 9, 18, 0.88) 0%, rgba(3, 9, 18, 0.38) 100%);
  }

  .hero-copy {
    padding: clamp(92px, 26vw, 126px) 0 18px;
  }

  .hero-hybrid h1,
  h1 {
    font-size: clamp(36px, 11.4vw, 52px);
    line-height: 0.98;
    margin-bottom: 18px;
  }

  h2 {
    font-size: clamp(30px, 9vw, 42px);
  }

  .hero-hybrid .hero-text,
  .hero-text,
  .section-heading p,
  .focus-copy p,
  .kevin-bridge-copy p,
  .contact-copy p {
    font-size: 16px;
    line-height: 1.58;
  }

  .hero-actions {
    margin-top: 26px;
  }

  .btn-big {
    min-height: 58px;
    padding-inline: 20px;
    font-size: 16px;
  }

  .section {
    padding: 62px 0;
  }

  .section-why,
  .section-kevin-bridge,
  .section-focus,
  .section-topics,
  .about-section-expanded {
    padding-top: 56px;
  }

  .section-kevin-bridge {
    padding-bottom: 58px;
  }

  .kevin-bridge-copy,
  .focus-card-clean,
  .result-content,
  .contact-form,
  .disclaimer-box,
  .next-card,
  .topic-card,
  .why-card,
  .value-card {
    border-radius: 22px;
  }

  .focus-card-clean {
    padding: 20px !important;
  }

  .focus-mini-facts span {
    white-space: normal;
  }

  .result-section {
    padding: 58px 0;
  }

  .result-content {
    padding: 24px 20px;
  }

  .result-content::before {
    inset: 18px auto 18px 0;
    width: 2px;
  }

  .result-text p {
    font-size: 16px;
    line-height: 1.6;
  }

  .result-text .result-tagline {
    font-size: 19px;
    line-height: 1.35;
  }

  .result-actions {
    margin-top: 22px;
  }

  .result-pointer-card {
    width: min(210px, 58vw);
  }

  .trust-row {
    gap: 10px;
  }

  .next-card {
    padding: 20px;
    gap: 14px;
  }

  .about-image {
    width: min(280px, 78vw);
    justify-self: center;
  }

  .about-video-preview,
  .about-video-preview img {
    height: 160px;
  }

  .consent-banner {
    left: 8px;
    right: 8px;
    bottom: 8px;
  }

  .modal {
    padding: 12px;
  }

  .modal-card {
    padding: 22px;
    max-height: calc(100dvh - 24px);
    overflow-y: auto;
  }
}

@media (max-width: 430px) {
  .container {
    width: min(100% - 22px, var(--max));
  }

  .main-nav {
    inset: var(--header-height) 10px auto 10px;
    padding: 10px;
    border-radius: 20px;
  }

  .main-nav a,
  .nav-cta {
    padding: 13px 14px;
  }

  .hero-copy {
    padding-top: 98px;
  }

  .eyebrow,
  .focus-card-kicker,
  .question-kicker {
    letter-spacing: 0.10em;
  }

  .focus-card-clean h3 {
    font-size: clamp(27px, 8.8vw, 36px);
  }

  .topics-grid {
    gap: 12px;
  }

  .topic-card,
  .why-card {
    padding: 18px;
  }

  .contact-form {
    padding: 18px;
  }

  input,
  select,
  textarea {
    padding: 14px;
    border-radius: 14px;
  }

  .checkbox-row {
    gap: 9px;
    font-size: 14px;
  }

  .privacy-mini {
    font-size: 12.5px;
    padding: 12px;
  }

  .result-pointer-card {
    width: min(190px, 56vw);
  }
}

@media (max-width: 359px) {
  .container {
    width: min(100% - 18px, var(--max));
  }

  .brand-logo .brand-name {
    font-size: 21px;
  }

  .hero-hybrid h1,
  h1 {
    font-size: clamp(32px, 11vw, 42px);
  }

  .hero-hybrid .hero-text,
  .hero-text {
    font-size: 15.5px;
  }

  .btn {
    min-height: 52px;
    padding-inline: 16px;
    font-size: 15px;
  }

  .hero-person-card {
    grid-template-columns: 64px minmax(0, 1fr);
  }

  .hero-person-image img {
    width: 64px;
    height: 64px;
  }

}


/* Check: Zurück-Button im Fokusmodus */
.check-header-actions {
  position: relative;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  flex: 0 0 auto;
}

.check-back {
  min-height: 44px;
  padding: 0 14px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.06);
  color: rgba(255, 255, 255, 0.88);
  font-weight: 850;
  line-height: 1;
  transition: 180ms ease;
}

.check-back:hover,
.check-back:focus-visible {
  outline: none;
  border-color: rgba(117, 181, 255, 0.72);
  background: rgba(47, 125, 255, 0.16);
  transform: translateY(-1px);
}

.check-back:disabled,
.check-back.is-disabled {
  opacity: 0.36;
  cursor: default;
  transform: none;
}

@media (max-width: 640px) {
  .check-header-actions {
    gap: 8px;
  }

  .check-back {
    width: 40px;
    min-height: 40px;
    padding: 0;
    border-radius: 14px;
    font-size: 0;
  }

  .check-back::before {
    content: "←";
    font-size: 20px;
    line-height: 1;
  }
}


/* Final Check-Cleanup: oben nur Fortschritt, Kategorie nur noch als Kicker bei der Frage. */
.check-stage .funnel-topline {
  justify-content: flex-end;
}

.party-warning-card {
  display: grid;
  gap: 14px;
  max-width: 780px;
}

.party-warning-card p {
  margin: 0;
}

.party-warning-card .party-warning-strong {
  color: rgba(255, 219, 156, 0.94);
  font-weight: 800;
}

.party-result-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 30px;
}

@media (max-width: 640px) {
  .check-stage .funnel-topline {
    justify-content: flex-end;
  }

  .party-warning-card {
    gap: 10px;
  }

  .party-result-actions {
    flex-direction: column;
    align-items: stretch;
  }
}

@media (max-width: 390px), (max-height: 610px) {
  .party-warning-card p {
    font-size: 12.5px;
    line-height: 1.35;
  }
}


/* =========================================================
   Logo-Magic-Update: lesbares Kevin-Regelt-Logo
   ---------------------------------------------------------
   Header nutzt die kompakte Wortmarke ohne winzige Unterzeile.
   Footer nutzt die größere Full-Variante mit lesbarer Claim-Zeile.
   Der Text-Fallback bleibt nur sichtbar, wenn das Logo nicht lädt.
   ========================================================= */

.site-header {
  gap: 18px;
}

.site-header .brand-logo {
  flex: 0 0 auto;
  max-width: min(340px, 29vw);
}

.brand-logo {
  min-width: 0;
}

.brand-logo-img {
  display: none;
  width: auto;
  height: 52px;
  max-width: 340px;
  object-fit: contain;
  object-position: left center;
}

.brand-logo.has-logo .brand-logo-img {
  display: block;
}

.brand-logo.has-logo .brand-text-fallback {
  display: none !important;
}

.footer-brand.brand-logo {
  max-width: 360px;
}

.footer-brand.brand-logo .brand-logo-img {
  height: 76px;
  max-width: 340px;
}

/* Etwas kompakter, damit die Navigation auf mittleren Desktopbreiten stabil bleibt. */
@media (min-width: 981px) and (max-width: 1180px) {
  .site-header .brand-logo {
    max-width: 292px;
  }

  .brand-logo-img {
    height: 46px;
    max-width: 292px;
  }

  .footer-brand.brand-logo .brand-logo-img {
    height: 70px;
    max-width: 315px;
  }
}

@media (max-width: 980px) {
  .site-header .brand-logo {
    max-width: 270px;
  }

  .brand-logo-img {
    height: 42px;
    max-width: 270px;
  }

  .footer-brand.brand-logo {
    max-width: 320px;
  }

  .footer-brand.brand-logo .brand-logo-img {
    height: 66px;
    max-width: 300px;
  }
}

@media (max-width: 640px) {
  .site-header .brand-logo {
    max-width: calc(100vw - 86px);
  }

  .brand-logo-img {
    height: 34px;
    max-width: min(215px, calc(100vw - 92px));
  }

  .footer-brand.brand-logo {
    max-width: 100%;
  }

  .footer-brand.brand-logo .brand-logo-img {
    height: 60px;
    max-width: min(290px, 100%);
  }
}

@media (max-width: 390px) {
  .brand-logo-img {
    height: 32px;
    max-width: min(198px, calc(100vw - 86px));
  }

  .footer-brand.brand-logo .brand-logo-img {
    height: 54px;
    max-width: min(260px, 100%);
  }
}

@media (max-width: 340px) {
  .brand-logo-img {
    height: 30px;
    max-width: min(178px, calc(100vw - 82px));
  }
}
/*
  Kevin Funnel JavaScript
  -----------------------
  Diese Datei steuert:
  - mobiles Menü
  - Vollbild-Fokusmodus für den Check
  - kurze, klickbare Fragen mit dynamischem Detail-Schritt
  - dynamisches Ergebnis-Fazit
  - Kontaktformular-Versand über FormSubmit oder optional Demo/PHP
  - kleines Video-Modal
*/

// Kontaktmodus:
// "web3forms"  = Formular wird normal an Web3Forms abgeschickt.
// "formsubmit" = alte FormSubmit-Variante, nicht mehr für die Live-Demo genutzt.
// "demo"       = Formular zeigt lokal nur Erfolgsmeldung.
// "php"        = Formular sendet per fetch() an contact.php, wenn die Seite auf einem PHP-Server liegt.
const CONTACT_MODE = "web3forms";

// Datenschutz/Consent:
// Solange hier Platzhalter stehen, werden keine externen Marketing-Skripte geladen.
// Für Google Ads später z. B. "AW-123456789" eintragen.
// Für Meta Pixel später die echte Pixel-ID eintragen.
const CONSENT_STORAGE_KEY = "kevin_consent_v1";
const GOOGLE_ADS_ID = "AW-XXXXXXXXX";
const GOOGLE_CONVERSION_LABEL = "CONVERSION_LABEL_ERSETZEN";
const META_PIXEL_ID = "000000000000000";

// Der neue Check ist bewusst kompakt:
// kurze Buttons, wenig Text, keine großen Textblöcke im Fokusmodus.
const TOTAL_STEPS = 5;

// Hier speichern wir die gewählten Antworten.
let currentStep = 0;
let answers = {};
let selectedLabels = {};
let resultType = "clarity";
let isPartyWarning = false;
let cameFromPartyWarning = false;
let partyExitMode = false;

// DOM-Elemente sammeln.
const menuButton = document.getElementById("menuButton");
const mainNav = document.getElementById("mainNav");
const checkOverlay = document.getElementById("checkOverlay");
const checkCloseButton = document.getElementById("checkCloseButton");
const checkBackButton = document.getElementById("checkBackButton");
const funnelShell = document.getElementById("funnelShell");
const stepLabel = document.getElementById("stepLabel");
const stepCounter = document.getElementById("stepCounter");
const progressFill = document.getElementById("progressFill");
const questionArea = document.getElementById("questionArea");
const resultSection = document.getElementById("result");
const nextSteps = document.getElementById("nextSteps");
const resultText = document.getElementById("resultText");
const openContactButton = document.getElementById("openContactButton");
const restartButton = document.getElementById("restartButton");
const contactSection = document.getElementById("contact");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const videoButton = document.getElementById("videoButton");
const videoModal = document.getElementById("videoModal");
const contactIntro = document.getElementById("contactIntro");
const requestSourceField = document.getElementById("requestSourceField");
const consentTextField = document.getElementById("consentTextField");
const consentBanner = document.getElementById("consentBanner");
const consentModal = document.getElementById("consentModal");
const marketingConsent = document.getElementById("marketingConsent");
const acceptCookies = document.getElementById("acceptCookies");
const rejectCookies = document.getElementById("rejectCookies");
const openConsentSettings = document.getElementById("openConsentSettings");
const saveConsentSettings = document.getElementById("saveConsentSettings");
const saveRejectCookies = document.getElementById("saveRejectCookies");
const referralStatus = document.getElementById("referralStatus");
const referralName = document.getElementById("referralName");
const referralNameWrap = document.getElementById("referralNameWrap");
const referralSourceUrl = document.getElementById("referralSourceUrl");
const formSubmitUrlField = document.getElementById("formSubmitUrlField");

// Mobiles Menü öffnen/schließen.
if (menuButton && mainNav) {
  menuButton.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  // Menü schließen, wenn ein Link geklickt wurde.
  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

// Alle Buttons mit data-start-check starten den Fokus-Check.
document.querySelectorAll("[data-start-check]").forEach((button) => {
  button.addEventListener("click", startCheck);
});

// Kontaktformular-Buttons unter dem Ergebnis.
document.querySelectorAll("[data-open-contact]").forEach((button) => {
  button.addEventListener("click", () => openContactForm("funnel"));
});

// Direkter Kontakt: funktioniert ohne Check und ohne Ergebnis-Logik.
document.querySelectorAll("[data-direct-contact]").forEach((button) => {
  button.addEventListener("click", () => openContactForm("direct"));
});

if (openContactButton) openContactButton.addEventListener("click", () => openContactForm("funnel"));
if (restartButton) {
  restartButton.addEventListener("click", () => {
    if (partyExitMode) {
      returnToStartFromPartyExit();
      return;
    }

    if (resultType === "party") {
      leavePageAfterParty();
      return;
    }

    restartCheck();
  });
}
if (checkBackButton) checkBackButton.addEventListener("click", goBackInCheck);
if (checkCloseButton) checkCloseButton.addEventListener("click", closeCheckOverlay);

// Consent-/Cookie-Einstellungen öffnen.
document.querySelectorAll("[data-open-consent]").forEach((button) => {
  button.addEventListener("click", openConsentModal);
});

if (acceptCookies) acceptCookies.addEventListener("click", () => saveConsent({ marketing: true }));
if (rejectCookies) rejectCookies.addEventListener("click", () => saveConsent({ marketing: false }));
if (openConsentSettings) openConsentSettings.addEventListener("click", openConsentModal);
if (saveConsentSettings) {
  saveConsentSettings.addEventListener("click", () => {
    saveConsent({ marketing: Boolean(marketingConsent && marketingConsent.checked) });
  });
}
if (saveRejectCookies) saveRejectCookies.addEventListener("click", () => saveConsent({ marketing: false }));

document.querySelectorAll("[data-close-consent]").forEach((el) => {
  el.addEventListener("click", closeConsentModal);
});

initConsent();
initReferralFields();
initLogoFallbacks();
initStartLinks();

function initStartLinks() {
  document.querySelectorAll('a[href="#top"], a[href="index.html#top"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href") || "";
      const isSamePageTop = href === "#top" || (href === "index.html#top" && (window.location.pathname.endsWith("/") || window.location.pathname.endsWith("index.html")));

      if (!isSamePageTop) return;

      event.preventDefault();

      if (mainNav && menuButton) {
        mainNav.classList.remove("is-open");
        menuButton.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      }

      if (window.history && window.history.replaceState) {
        window.history.replaceState(null, "", "#top");
      }

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function initLogoFallbacks() {
  document.querySelectorAll("[data-logo-img]").forEach((img) => {
    const wrapper = img.closest(".brand-logo");
    if (!wrapper) return;

    const markLoaded = () => wrapper.classList.add("has-logo");
    const markMissing = () => {
      img.hidden = true;
      wrapper.classList.remove("has-logo");
    };

    img.addEventListener("load", markLoaded);
    img.addEventListener("error", markMissing);

    if (img.complete) {
      if (img.naturalWidth > 0) markLoaded();
      else markMissing();
    }
  });
}

// Einfache Empfehlungslogik: freiwillig, ohne Tracking-System oder Datenbank.
function initReferralFields() {
  if (referralSourceUrl) referralSourceUrl.value = window.location.href;
  if (formSubmitUrlField) formSubmitUrlField.value = window.location.href;

  try {
    const params = new URLSearchParams(window.location.search);
    const referralFromUrl = sanitizeReferralParam(params.get("ref") || params.get("empfohlen_von") || "");

    if (referralFromUrl && referralStatus && referralName) {
      referralStatus.value = "Ja";
      referralName.value = referralFromUrl;
    }
  } catch (error) {
    // Falls URLSearchParams nicht verfügbar ist, bleibt das Formular normal nutzbar.
  }

  updateReferralField();

  if (referralStatus) {
    referralStatus.addEventListener("change", updateReferralField);
  }

  if (contactForm) {
    contactForm.addEventListener("reset", () => {
      window.setTimeout(() => {
        if (referralSourceUrl) referralSourceUrl.value = window.location.href;
        if (formSubmitUrlField) formSubmitUrlField.value = window.location.href;
        updateReferralField();
      }, 0);
    });
  }
}

function updateReferralField() {
  const isReferred = Boolean(referralStatus && referralStatus.value === "Ja");

  if (referralNameWrap) {
    referralNameWrap.classList.toggle("is-hidden", !isReferred);
  }

  if (referralName) {
    referralName.disabled = !isReferred;
    if (!isReferred) referralName.value = "";
  }
}

function sanitizeReferralParam(value) {
  return String(value || "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 80);
}

// Check starten: Die normale Webseite bleibt im Hintergrund, aber der Nutzer ist im eigenen Fokusmodus.
function startCheck() {
  currentStep = 0;
  answers = {};
  selectedLabels = {};
  resultType = "clarity";
  isPartyWarning = false;
  cameFromPartyWarning = false;
  partyExitMode = false;

  // Alte Ergebnisse und Formular ausblenden, damit der neue Check sauber startet.
  if (resultSection) resultSection.classList.add("is-hidden");
  if (nextSteps) nextSteps.classList.add("is-hidden");
  if (contactSection) contactSection.classList.add("is-hidden");
  if (formMessage) {
    formMessage.textContent = "";
    formMessage.className = "form-message";
  }

  // Mobiles Menü schließen, falls es offen ist.
  if (mainNav && menuButton) {
    mainNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  openCheckOverlay();
  renderQuestion();
}

// Fokusmodus öffnen.
function openCheckOverlay() {
  checkOverlay.classList.remove("is-hidden");
  checkOverlay.setAttribute("aria-hidden", "false");
  document.body.classList.add("check-open");
  updateBackButtonState();

  window.setTimeout(() => {
    funnelShell.setAttribute("tabindex", "-1");
    funnelShell.focus({ preventScroll: true });
  }, 60);
}

// Fokusmodus schließen, ohne Ergebnis anzuzeigen.
function closeCheckOverlay() {
  checkOverlay.classList.add("is-hidden");
  checkOverlay.setAttribute("aria-hidden", "true");
  document.body.classList.remove("check-open");
  updateBackButtonState();
}

// Eine Frage anhand des aktuellen Schritts erzeugen.
// Schritt 3 ist bewusst dynamisch: Er hängt davon ab, welches Hauptthema gewählt wurde.
function getCurrentQuestion() {
  if (currentStep === 0) {
    return {
      id: "life",
      label: "Haltung",
      question: "Worauf legst du gerade Wert?",
      hint: "Wähle nach Gefühl!",
      answers: [
        { value: "plan_long", icon: "🌱", title: "Langfristige Planung", micro: "Zukunft ist mir wichtig." },
        { value: "plan_mid", icon: "🧭", title: "Mittelfristige Planung", micro: "Ich will Dinge sauber sortieren." },
        { value: "plan_short", icon: "⚡", title: "Kurzfristige Planung", micro: "Erstmal das, was jetzt zählt." },
        { value: "live_now", icon: "🌊", title: "Party und Spaß", micro: "Zukunftsplanung ist mir egal." }
      ]
    };
  }

  if (currentStep === 1) {
    return {
      id: "topic",
      label: "Thema",
      question: "Welches Thema ist dir am wichtigsten?",
      hint: "",
      answers: [
        { value: "income", icon: "💼", title: "Berufsunfähigkeit", micro: "Absicherung im Krankheitsfall." },
        { value: "retirement", icon: "⌛", title: "Rente & Zukunft", micro: "Später gut aufgestellt sein." },
        { value: "family", icon: "👨‍👩‍👧", title: "Familie", micro: "Menschen, die zählen." },
        { value: "real_estate", icon: "🏠", title: "Immobilien", micro: "Kapitalanlagen, Eigentum, Finanzierung." },
        { value: "business", icon: "🚀", title: "Gewerbe", micro: "Absicherung für Selbstständige und Mitarbeiter." },
        { value: "unknown", icon: "❓", title: "Ich weiß es nicht", micro: "Erstmal Orientierung." }
      ]
    };
  }

  if (currentStep === 2) {
    return getDetailQuestion(answers.topic);
  }

  if (currentStep === 3) {
    return {
      id: "barrier",
      label: "Wichtigkeit",
      question: "Was ist dir bei einer Beratung besonders wichtig?",
      hint: " ",
      answers: [
        { value: "no_pressure", icon: "🛑", title: "Nichts aufgeschwatzt zu bekommen", micro: "Erst verstehen, dann entscheiden." },
        { value: "no_understanding", icon: "💬", title: "Ehrlichkeit und Transparenz", micro: "Auch über Kleingedrucktes darf gesprochen werden." },
        { value: "no_trust", icon: "🤝", title: "Keine versteckten Kosten", micro: "Vertrauen zählt." },
        { value: "postpone", icon: "⏳", title: "Erreichbarkeit", micro: "Dauerhafter Ansprechpartner." }
      ]
    };
  }

  return {
    id: "channel",
    label: "Kontakt",
    question: "Wie wäre es für dich angenehm?",
    hint: "Nur falls du nach dem Fazit mit mir sprechen willst.",
    answers: [
      { value: "online", icon: "💻", title: "Online", micro: "Flexibel und ruhig." },
      { value: "phone", icon: "📞", title: "Telefon", micro: "Direkt und einfach." },
      { value: "local", icon: "📍", title: "Vor Ort", micro: "Wenn es passt." },
    ]
  };
}

function getDetailQuestion(topic) {
  const detailQuestions = {
    income: {
      id: "detail",
      label: "Berufsunfähigkeit",
      question: "Was macht dir bei diesem Thema Gedanken?",
      hint: " ",
      answers: [
        { value: "income_secure", icon: "🛡️", title: "Werde ich vielleicht berufsunfähig?", micro: "Was passiert dann mit meinem Einkommen?" },
        { value: "income_costs", icon: "💸", title: "Handeln im Leistungsfall", micro: "Wie läuft der Bürokratieprozess ab?" },
        { value: "income_overview", icon: "🧭", title: "Ist eine BU-Versicherung sinnvoll?", micro: "Vorteile / Nachteile klären." },
        { value: "income_unsure", icon: "❓", title: "Ich weiß es nicht", micro: "Erstmal sortieren." }
      ]
    },
    retirement: {
      id: "detail",
      label: "Rente und Zukunft",
      question: "Was beschäftigt dich dabei?",
      hint: " ",
      answers: [
        { value: "retirement_enough", icon: "🌅", title: "Altersarmut vermeiden", micro: "Lebensstandard behalten" },
        { value: "retirement_start", icon: "⏳", title: "Nicht bis 70 arbeiten müssen", micro: "Wertvolle Zeit nutzen." },
        { value: "retirement_lifestyle", icon: "✨", title: "Mögliche Geldanlagen?", micro: "ETF, Fond-Sparen, Immobilien." },
      ]
    },
    family: {
      id: "detail",
      label: "Familie",
      question: "Was ist dir dabei wichtig?",
      hint: "",
      answers: [
        { value: "family_partner", icon: "🤝", title: "Partner absichern", micro: "Gemeinsam planen." },
        { value: "family_kids", icon: "🧸", title: "Kinder im Blick", micro: "Verantwortung wächst." },
        { value: "family_calm", icon: "🌙", title: "Einkommenssicherung", micro: "Was passiert im Krankheitsfall?" },
        { value: "family_unsure", icon: "❓", title: "Übersicht verschaffen", micro: "Manchmal gerät alles durcheinander." }
      ]
    },
    real_estate: {
      id: "detail",
      label: "Immobilien",
      question: "Was ist dir wichtiger?",
      hint: "",
      answers: [
        { value: "estate_buy", icon: "🏠", title: "Eigentum", micro: "" },
        { value: "estate_finance", icon: "📊", title: "Kapitalanlage", micro: "" },
        { value: "estate_existing", icon: "🔎", title: "Finanzierung", micro: "" },
        { value: "estate_unsure", icon: "❓", title: "Ich weiß es nicht", micro: "Erstmal Überblick." }
      ]
    },
    business: {
      id: "detail",
      label: "Gewerbe",
      question: "Wo brauchst du mehr Klarheit?",
      hint: "",
      answers: [
        { value: "business_risk", icon: "⚠️", title: "Risiken ordnen", micro: "Nicht alles allein tragen." },
        { value: "business_income", icon: "💼", title: "Vorteile für Mitarbeiter", micro: "Betriebliche Altersvorsorge/Krankenversicherung" },
        { value: "business_responsibility", icon: "🤝", title: "Bestehende Versicherungen vergleichen", micro: "Günstiger? Bessere Konditionen?" },
        { value: "business_unsure", icon: "❓", title: "Ich bin in der Gründungsphase", micro: "Beratungswunsch." }
      ]
    },
    unknown: {
      id: "detail",
      label: "Klarheit",
      question: "Was würde dir jetzt helfen?",
      hint: "Du musst es noch nicht exakt benennen können.",
      answers: [
        { value: "clarity_structure", icon: "🧱", title: "Arbeitsgeberzuschläge", micro: "Vermögenswirksame Leistungen" },
        { value: "clarity_language", icon: "💬", title: "Erste Orientierung", micro: "Ohne Fachchinesisch." },
        { value: "clarity_priority", icon: "🎯", title: "Haushaltsbuch", micro: "Was sind meine Fixkosten?" },
        { value: "clarity_calm", icon: "🌙", title: "Neue Impulse", micro: "Offen für Denkanstöße." }
      ]
    }
  };

  return detailQuestions[topic] || detailQuestions.unknown;
}


function clearActiveTapFocus() {
  const active = document.activeElement;
  if (active && typeof active.blur === "function" && active !== document.body) {
    active.blur();
  }
}

// Tap-/Fokuszustand mobiler Browser sauber lösen, damit keine alte Auswahloptik auf die nächste Frage springt.
function clearActiveCheckFocus() {
  const active = document.activeElement;
  if (active && typeof active.blur === "function" && (active.classList && active.classList.contains("answer-button"))) {
    active.blur();
  }
}

// Aktuelle Frage anzeigen.
function renderQuestion() {
  clearActiveTapFocus();
  isPartyWarning = false;
  const question = getCurrentQuestion();
  const progress = ((currentStep + 1) / TOTAL_STEPS) * 100;

  if (stepLabel) stepLabel.textContent = question.label;
  stepCounter.textContent = `${currentStep + 1} / ${TOTAL_STEPS}`;
  progressFill.style.width = `${progress}%`;
  updateBackButtonState();

  const buttonsHtml = question.answers.map((answer) => {
    const microHtml = String(answer.micro || "").trim() ? `<small>${answer.micro}</small>` : "";

    return `
      <button class="answer-button" type="button" data-answer="${answer.value}" data-title="${escapeHtml(answer.title)}">
        <span class="answer-emoji" aria-hidden="true">${answer.icon}</span>
        <span class="answer-text">
          <strong>${answer.title}</strong>
          ${microHtml}
        </span>
        <span class="answer-arrow" aria-hidden="true"><svg><use href="#icon-arrow"></use></svg></span>
      </button>
    `;
  }).join("");

  const hintHtml = String(question.hint || "").trim() ? `<p>${question.hint}</p>` : "";

  questionArea.className = `question-area answer-count-${question.answers.length}`;
  questionArea.innerHTML = `
    <div class="question-copy">
      <span class="question-kicker">${question.label}</span>
      <h3 id="overlayQuestionTitle">${question.question}</h3>
      ${hintHtml}
    </div>
    <div class="answers-grid">${buttonsHtml}</div>
  `;

  questionArea.querySelectorAll(".answer-button").forEach((button) => {
    button.classList.remove("is-selected");
    button.addEventListener("click", () => selectAnswer(button));
  });

  window.setTimeout(clearActiveCheckFocus, 0);
}

function renderPartyWarning() {
  clearActiveTapFocus();
  isPartyWarning = true;
  currentStep = 0;
  progressFill.style.width = `${(1 / TOTAL_STEPS) * 100}%`;
  if (stepLabel) stepLabel.textContent = "";
  stepCounter.textContent = `1 / ${TOTAL_STEPS}`;
  updateBackButtonState();

  questionArea.className = "question-area answer-count-2 party-warning";
  questionArea.innerHTML = `
    <div class="question-copy party-warning-card">
      <span class="question-kicker">Reality-Check</span>
      <h3 id="overlayQuestionTitle">Bist du dir da wirklich sicher?</h3>
      <p>Klar, Leben soll Spaß machen. Aber Zukunftsplanung ist nicht nur Papierkram. Wenn Einkommen, Gesundheit, Familie oder Kosten plötzlich Druck machen, fragt das Leben nicht, ob du gerade vorbereitet bist.</p>
      <p class="party-warning-strong">Dir ist bewusst: Wenn nichts geregelt ist, kann es später richtig unangenehm werden.</p>
      <p>Willst du trotzdem sagen: Zukunftsplanung ist mir egal?</p>
    </div>
    <div class="answers-grid">
      <button class="answer-button" type="button" data-party-choice="confirm">
        <span class="answer-emoji" aria-hidden="true">🎉</span>
        <span class="answer-text"><strong>Ja, ist mir egal</strong><small>Dann brauche ich gerade keine Beratung.</small></span>
        <span class="answer-arrow" aria-hidden="true"><svg><use href="#icon-arrow"></use></svg></span>
      </button>
      <button class="answer-button" type="button" data-party-choice="unsure">
        <span class="answer-emoji" aria-hidden="true">🧭</span>
        <span class="answer-text"><strong>Bin doch unsicher</strong><small>Zeig mir lieber die Themen.</small></span>
        <span class="answer-arrow" aria-hidden="true"><svg><use href="#icon-arrow"></use></svg></span>
      </button>
    </div>
  `;

  questionArea.querySelectorAll("[data-party-choice]").forEach((button) => {
    button.classList.remove("is-selected");
    button.addEventListener("click", () => selectPartyWarning(button));
  });

  window.setTimeout(clearActiveCheckFocus, 0);
}

const stepAnswerIds = ["life", "topic", "detail", "barrier", "channel"];

function updateBackButtonState() {
  if (!checkBackButton) return;

  const overlayOpen = Boolean(checkOverlay && !checkOverlay.classList.contains("is-hidden"));
  const canGoBack = overlayOpen && (currentStep > 0 || isPartyWarning);
  checkBackButton.disabled = !canGoBack;
  checkBackButton.classList.toggle("is-disabled", !canGoBack);
}

function clearAnswersFromStep(stepIndex) {
  stepAnswerIds.slice(stepIndex).forEach((id) => {
    delete answers[id];
    delete selectedLabels[id];
  });
}

function goBackInCheck() {
  if (isPartyWarning) {
    isPartyWarning = false;
    cameFromPartyWarning = false;
    currentStep = 0;
    delete answers.life;
    delete selectedLabels.life;
    renderQuestion();
    return;
  }

  if (currentStep <= 0) return;

  if (cameFromPartyWarning && currentStep === 1) {
    renderPartyWarning();
    return;
  }

  currentStep -= 1;
  clearAnswersFromStep(currentStep);
  renderQuestion();
}

// Antwort speichern und zur nächsten Frage gehen.
function selectAnswer(button) {
  const question = getCurrentQuestion();

  if (question.id === "life" && button.dataset.answer === "live_now") {
    button.classList.add("is-selected");
    questionArea.querySelectorAll(".answer-button").forEach((btn) => {
      btn.disabled = true;
    });
    clearActiveCheckFocus();

    window.setTimeout(() => {
      clearActiveCheckFocus();
      renderPartyWarning();
    }, 180);
    return;
  }

  answers[question.id] = button.dataset.answer;
  selectedLabels[question.id] = button.dataset.title;

  // Klick sichtbar machen und Mehrfachklicks verhindern.
  button.classList.add("is-selected");
  questionArea.querySelectorAll(".answer-button").forEach((btn) => {
    btn.disabled = true;
  });
  clearActiveCheckFocus();

  window.setTimeout(() => {
    clearActiveCheckFocus();
    currentStep += 1;

    if (currentStep < TOTAL_STEPS) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 180);
}

function selectPartyWarning(button) {
  const choice = button.dataset.partyChoice;

  button.classList.add("is-selected");
  questionArea.querySelectorAll(".answer-button").forEach((btn) => {
    btn.disabled = true;
  });
  clearActiveCheckFocus();

  window.setTimeout(() => {
    clearActiveCheckFocus();
    if (choice === "unsure") {
      answers.life = "party_reconsidered";
      selectedLabels.life = "Party und Spaß → Bin doch unsicher";
      cameFromPartyWarning = true;
      isPartyWarning = false;
      currentStep = 1;
      clearAnswersFromStep(1);
      renderQuestion();
      return;
    }

    answers.life = "party_confirmed";
    selectedLabels.life = "Party und Spaß – Zukunftsplanung ist mir egal";
    resultType = "party";
    isPartyWarning = false;
    showResult("party");
  }, 180);
}

// Ergebnis berechnen und nach dem Fokusmodus auf der normalen Webseite anzeigen.
function showResult(forcedType = null) {
  clearActiveTapFocus();
  progressFill.style.width = "100%";
  if (stepLabel) stepLabel.textContent = "";
  stepCounter.textContent = `${TOTAL_STEPS} / ${TOTAL_STEPS}`;

  resultType = forcedType || calculateResultType();
  resultText.innerHTML = getResultHtml(resultType);
  fillHiddenFormFields();
  updateResultActions(resultType);

  questionArea.className = "question-area is-welcome";
  questionArea.innerHTML = `
    <div class="finish-card">
      <div class="welcome-icon"><svg><use href="#icon-check"></use></svg></div>
      <h3>Dein Fazit ist bereit.</h3>
      <p>Du kommst jetzt zurück auf die Webseite.</p>
    </div>
  `;

  window.setTimeout(() => {
    closeCheckOverlay();
    resultSection.classList.remove("is-hidden");
    if (nextSteps) nextSteps.classList.toggle("is-hidden", resultType === "party");
    observeRevealElements();
    scrollToElement(resultSection);
  }, 520);
}

function updateResultActions(type) {
  const actions = document.querySelector(".result-actions");
  if (!actions) return;

  partyExitMode = false;
  let reconsiderButton = document.getElementById("partyReconsiderButton");
  const trustRow = document.querySelector(".result-content .trust-row");

  if (type === "party") {
    if (openContactButton) openContactButton.classList.add("is-hidden");
    if (restartButton) restartButton.textContent = "Seite verlassen";
    if (trustRow) trustRow.classList.add("is-hidden");

    if (!reconsiderButton) {
      reconsiderButton = document.createElement("button");
      reconsiderButton.className = "btn btn-secondary";
      reconsiderButton.type = "button";
      reconsiderButton.id = "partyReconsiderButton";
      reconsiderButton.textContent = "Bin doch unsicher";
      reconsiderButton.addEventListener("click", startCheckFromTopicAfterParty);
      actions.insertBefore(reconsiderButton, actions.firstChild);
    }

    reconsiderButton.classList.remove("is-hidden");
    return;
  }

  if (openContactButton) openContactButton.classList.remove("is-hidden");
  if (restartButton) restartButton.textContent = "Check neu starten";
  if (reconsiderButton) reconsiderButton.classList.add("is-hidden");
  if (trustRow) trustRow.classList.remove("is-hidden");
}

function leavePageAfterParty() {
  try {
    window.close();
  } catch (error) {
    // Wenn der Browser das Schließen blockiert, zeigen wir unten eine ruhige Abschlussansicht.
  }

  window.setTimeout(() => {
    if (document.visibilityState === "hidden") return;
    renderPartyExitView();
  }, 160);
}

function renderPartyExitView() {
  partyExitMode = true;

  if (resultText) {
    resultText.innerHTML = `
      <p class="result-tagline">Alles klar.</p>
      <p>Dann ist hier Schluss. Viel Glück und genieß die Party.</p>
    `;
  }

  if (openContactButton) openContactButton.classList.add("is-hidden");

  const reconsiderButton = document.getElementById("partyReconsiderButton");
  if (reconsiderButton) reconsiderButton.classList.add("is-hidden");

  const trustRow = document.querySelector(".result-content .trust-row");
  if (trustRow) trustRow.classList.add("is-hidden");

  if (restartButton) restartButton.textContent = "Zurück zur Startseite";
}

function returnToStartFromPartyExit() {
  partyExitMode = false;
  resultType = "clarity";

  if (resultSection) resultSection.classList.add("is-hidden");
  if (nextSteps) nextSteps.classList.add("is-hidden");
  if (contactSection) contactSection.classList.add("is-hidden");

  if (restartButton) restartButton.textContent = "Check neu starten";

  const reconsiderButton = document.getElementById("partyReconsiderButton");
  if (reconsiderButton) reconsiderButton.classList.add("is-hidden");

  const trustRow = document.querySelector(".result-content .trust-row");
  if (trustRow) trustRow.classList.remove("is-hidden");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startCheckFromTopicAfterParty() {
  if (resultSection) resultSection.classList.add("is-hidden");
  if (nextSteps) nextSteps.classList.add("is-hidden");
  if (contactSection) contactSection.classList.add("is-hidden");

  answers = { life: "party_reconsidered" };
  selectedLabels = { life: "Party und Spaß → Bin doch unsicher" };
  resultType = "clarity";
  partyExitMode = false;
  currentStep = 1;
  isPartyWarning = false;
  cameFromPartyWarning = true;

  openCheckOverlay();
  renderQuestion();
}

// Ergebnis-Typ grob anhand der Antworten bestimmen.
function calculateResultType() {
  const scores = {
    moment: 0,
    security: 0,
    future: 0,
    family: 0,
    income: 0,
    business: 0,
    clarity: 0,
    real_estate: 0
  };

  // Haltung / Planungshorizont.
  if (answers.life === "plan_long") scores.future += 3;
  if (answers.life === "plan_mid") {
    scores.security += 2;
    scores.clarity += 1;
  }
  if (answers.life === "plan_short") {
    scores.clarity += 2;
    scores.security += 1;
  }
  if (answers.life === "live_now") scores.moment += 3;

  // Hauptthema.
  if (answers.topic === "income") scores.income += 4;
  if (answers.topic === "retirement") scores.future += 4;
  if (answers.topic === "family") scores.family += 4;
  if (answers.topic === "real_estate") scores.real_estate += 4;
  if (answers.topic === "business") scores.business += 4;
  if (answers.topic === "unknown") scores.clarity += 4;

  // Detailfrage.
  const detail = answers.detail || "";
  if (["income_secure", "income_costs"].includes(detail)) scores.income += 2;
  if (["income_overview", "income_unsure"].includes(detail)) scores.clarity += 2;
  if (["retirement_enough", "retirement_start", "retirement_lifestyle", "retirement_unsure"].includes(detail)) scores.future += 2;
  if (["family_partner", "family_kids", "family_calm", "family_unsure"].includes(detail)) scores.family += 2;
  if (["estate_buy", "estate_finance", "estate_existing"].includes(detail)) scores.real_estate += 2;
  if (detail === "estate_unsure") {
    scores.real_estate += 1;
    scores.clarity += 1;
  }
  if (["business_risk", "business_income", "business_responsibility", "business_unsure"].includes(detail)) scores.business += 2;
  if (["clarity_structure", "clarity_language", "clarity_priority", "clarity_calm"].includes(detail)) scores.clarity += 2;

  // Zurückhaltung / Barriere.
  if (answers.barrier === "no_pressure") scores.clarity += 2;
  if (answers.barrier === "no_understanding") scores.clarity += 3;
  if (answers.barrier === "no_trust") scores.security += 2;
  if (answers.barrier === "postpone") scores.clarity += 2;

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  return sorted[0][0] || "clarity";
}

// Ergebnis-Text. Wichtig: keine konkreten Produkte empfehlen.
function getResultHtml(type) {
  if (type === "party") {
    return `
      <p class="result-tagline">Alles klar. Dann wünsche ich dir viel Spaß.</p>
      <p>Wenn Zukunftsplanung dir wirklich egal ist, brauchst du gerade wahrscheinlich keine Beratung.</p>
      <p>Viel Glück und genieß die Party.</p>
    `;
  }

  const barrierText = getBarrierHtml(answers.barrier);
  const commonEnd = `
    <p>
      Wenn du möchtest, sortiere ich das mit dir ruhig im Erstgespräch.
    </p>
  `;

  const texts = {
    moment: `
      <p class="result-tagline">Du willst leben, nicht alles zerdenken.</p>
      <p>Das ist völlig okay. Ein kurzer Blick kann trotzdem helfen, damit wichtige Themen nicht irgendwann plötzlich Druck machen.</p>
      ${barrierText}
      ${commonEnd}
    `,
    security: `
      <p class="result-tagline">Bei dir geht es eher um Ruhe als um Panik.</p>
      <p>Du willst wahrscheinlich wissen, ob die wichtigsten Dinge grundsätzlich sortiert sind und wo noch offene Fragen liegen.</p>
      ${barrierText}
      ${commonEnd}
    `,
    future: `
      <p class="result-tagline">Du denkst weiter als nur bis zum nächsten Monat.</p>
      <p>Dir ist wichtig, später nicht das Gefühl zu haben, zu spät angefangen zu haben. Genau dafür ist ein ruhiger Überblick sinnvoll.</p>
      ${barrierText}
      ${commonEnd}
    `,
    family: `
      <p class="result-tagline">Bei dir geht es wahrscheinlich nicht nur um dich.</p>
      <p>Wenn Partner, Kinder oder Familie im Kopf sind, fühlt sich Verantwortung anders an. Erstmal reicht es, ruhig hinzuschauen.</p>
      ${barrierText}
      ${commonEnd}
    `,
    income: `
      <p class="result-tagline">Dein Einkommen trägt mehr als nur Rechnungen.</p>
      <p>Es geht um Alltag, Freiheit und Stabilität. Sinnvoll ist ein klarer Blick darauf, was trägt und wo Fragen offen sind.</p>
      ${barrierText}
      ${commonEnd}
    `,
    business: `
      <p class="result-tagline">Du trägst Verantwortung und nicht alles muss in deinem Kopf bleiben.</p>
      <p>Gewerbe oder Selbstständigkeit bringen Freiheit, aber auch offene Fragen. Ein erster Überblick kann viel Druck rausnehmen.</p>
      ${barrierText}
      ${commonEnd}
    `,
    real_estate: `
      <p class="result-tagline">Bei dir geht es um etwas Großes.</p>
      <p>Immobilie, Finanzierung oder Eigentum sind keine Kleinigkeiten. Genau deshalb hilft es, zuerst sauber zu sortieren, was zu deiner Situation passt.</p>
      ${barrierText}
      ${commonEnd}
    `,
    clarity: `
      <p class="result-tagline">Du musst noch keinen fertigen Plan haben.</p>
      <p>Vielleicht brauchst du gerade nicht noch mehr Informationen, sondern eine klare Reihenfolge: Was ist wichtig, was kann warten?</p>
      ${barrierText}
      ${commonEnd}
    `
  };

  return texts[type] || texts.clarity;
}

function getBarrierHtml(barrier) {
  const texts = {
    no_pressure: "Verständlich: Es geht erstmal ums Sortieren, nicht ums Aufschwatzen.",
    no_understanding: "Dann sollte es vor allem einfach erklärt werden, ohne Fachchinesisch.",
    no_trust: "Vertrauen entsteht durch ruhige Erklärung, nicht durch große Versprechen.",
    postpone: "Das passiert vielen: Oft wirkt das Thema einfach zu groß und unübersichtlich."
  };

  return texts[barrier] ? `<p>${texts[barrier]}</p>` : "";
}

// Versteckte Formularfelder mit den Funnel-Antworten befüllen.
function fillHiddenFormFields() {
  setValue("answerLife", selectedLabels.life || "");
  setValue("answerTopic", selectedLabels.topic || "");
  setValue("answerDetail", selectedLabels.detail || "");
  setValue("answerBarrier", selectedLabels.barrier || "");
  setValue("answerChannel", selectedLabels.channel || "");
  setValue("resultTypeField", resultType || "");
  setValue("checkSummaryField", buildCheckSummary());
}

// Kompakte Zusammenfassung für Kevins E-Mail.
// Das Feld ist im Formular unsichtbar, wird aber bei Kontakt nach Check mitgesendet.
function buildCheckSummary() {
  const lines = [
    "Planung / Haltung: " + (selectedLabels.life || "-"),
    "Hauptthema: " + (selectedLabels.topic || "-"),
    "Detail: " + (selectedLabels.detail || "-"),
    "Zurückhaltung / Barriere: " + (selectedLabels.barrier || "-"),
    "Kontaktart aus Check: " + (selectedLabels.channel || "-"),
    "Ergebnis-Typ: " + (resultType || "-")
  ];

  return lines.join("\n");
}

function setValue(id, value) {
  const field = document.getElementById(id);
  if (field) field.value = value;
}

// Kontaktformular einblenden.
// source = "direct" bedeutet: Nutzer will Kevin direkt kontaktieren, ohne den Check zu machen.
// source = "funnel" bedeutet: Nutzer kommt aus dem Ergebnis-Fazit.
function openContactForm(source = "direct") {
  if (!contactSection) return;

  const isDirect = source === "direct";

  if (requestSourceField) {
    requestSourceField.value = isDirect ? "Direktkontakt ohne Check" : "Kontakt nach Orientierungs-Check";
  }

  if (consentTextField) {
    consentTextField.value = "Datenschutzerklärung gelesen; Kontaktaufnahme zur Terminvereinbarung erlaubt; Zeitpunkt wird serverseitig beim Absenden erfasst.";
  }

  if (contactIntro) {
    contactIntro.textContent = isDirect
      ? "Ich freue mich über deine Nachricht."
      : "Die Anfrage ist keine Beratung und keine Kaufentscheidung. Ich melde mich zur Terminvereinbarung.";
  }

  // Wenn der Nutzer ohne Check kommt, leeren wir alte Funnel-Werte bewusst.
  if (isDirect) {
    ["answerLife", "answerTopic", "answerDetail", "answerBarrier", "answerChannel", "checkSummaryField"].forEach((id) => setValue(id, ""));
    setValue("resultTypeField", "Direktkontakt");
  }

  if (mainNav && menuButton) {
    mainNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  }

  contactSection.classList.remove("is-hidden");
  observeRevealElements();
  scrollToElement(contactSection);
}

// Check komplett zurücksetzen.
function restartCheck() {
  startCheck();
}

function getFormSubmitAjaxUrl() {
  const action = contactForm ? String(contactForm.action || "") : "";

  if (!action) return "";
  if (action.includes("/ajax/")) return action;

  return action.replace("https://formsubmit.co/", "https://formsubmit.co/ajax/");
}

function formDataToJson(form) {
  const data = {};
  const formData = new FormData(form);

  formData.forEach((value, key) => {
    if (key in data) {
      data[key] = Array.isArray(data[key]) ? data[key].concat(value) : [data[key], value];
      return;
    }

    data[key] = value;
  });

  data._url = window.location.href;

  return data;
}

function setSubmitButtonLoading(isLoading) {
  const submitButton = contactForm ? contactForm.querySelector('button[type="submit"]') : null;
  if (!submitButton) return;

  submitButton.disabled = isLoading;
  submitButton.classList.toggle("is-loading", isLoading);
}

// Formular absenden: FormSubmit, Demo oder optional PHP.
if (contactForm) {
  contactForm.addEventListener("submit", async (event) => {
    formMessage.className = "form-message";
    formMessage.textContent = "";

    if (!contactForm.checkValidity()) {
      event.preventDefault();
      formMessage.classList.add("error");
      formMessage.textContent = "Bitte fülle die Pflichtfelder aus und bestätige die Checkboxen.";
      contactForm.reportValidity();
      return;
    }

    if (CONTACT_MODE === "web3forms") {
      if (window.location.protocol === "file:") {
        event.preventDefault();
        formMessage.classList.add("error");
        formMessage.textContent = "Bitte teste das Formular über den Azure-Link. Der Live-Versand funktioniert nicht sauber, wenn die HTML-Datei lokal geöffnet wird.";
        return;
      }

      const accessKeyField = contactForm.querySelector('input[name="access_key"]');
      const accessKey = accessKeyField ? String(accessKeyField.value || "").trim() : "";

      if (!accessKey || accessKey.includes("WEB3FORMS_ACCESS_KEY")) {
        event.preventDefault();
        formMessage.classList.add("error");
        formMessage.textContent = "Bitte trage zuerst den Web3Forms Access Key in der index.html ein.";
        return;
      }

      if (formSubmitUrlField) formSubmitUrlField.value = window.location.href;

      // Wichtig: Kein fetch(), kein AJAX, kein CORS-Risiko.
      // Das Formular wird als normales HTML-POST an Web3Forms abgeschickt.
      trackLeadRequest();
      return;
    }

    if (CONTACT_MODE === "formsubmit") {
      if (window.location.protocol === "file:") {
        event.preventDefault();
        formMessage.classList.add("error");
        formMessage.textContent = "Bitte teste das Formular über den Azure-Link. FormSubmit funktioniert nicht, wenn die HTML-Datei lokal geöffnet wird.";
        return;
      }

      if (formSubmitUrlField) formSubmitUrlField.value = window.location.href;

      // Alte Fallback-Variante: normales HTML-POST an die im Formular hinterlegte Action.
      // Kein fetch(), damit CORS/Failed-to-fetch nicht mehr entstehen kann.
      trackLeadRequest();
      return;
    }

    event.preventDefault();

    if (CONTACT_MODE === "demo") {
      formMessage.classList.add("success");
      formMessage.textContent = "Danke! Deine Anfrage wurde als Demo erfolgreich erfasst.";
      trackLeadRequest();
      contactForm.reset();
      return;
    }

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm)
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Die Anfrage konnte nicht gesendet werden.");
      }

      formMessage.classList.add("success");
      formMessage.textContent = data.message || "Danke! Deine Anfrage wurde gesendet.";
      trackLeadRequest();
      contactForm.reset();
    } catch (error) {
      formMessage.classList.add("error");
      formMessage.textContent = error.message || "Es gab ein Problem beim Senden. Bitte versuche es später erneut.";
    }
  });
}

// Video-Modal öffnen/schließen.
// Alle Buttons mit data-open-video öffnen dasselbe Video-Fenster.
document.querySelectorAll("[data-open-video]").forEach((button) => {
  button.addEventListener("click", openVideoModal);
});

// Fallback für ältere Buttons mit id="videoButton".
if (videoButton && videoModal && !videoButton.hasAttribute("data-open-video")) {
  videoButton.addEventListener("click", openVideoModal);
}

function openVideoModal() {
  if (!videoModal) return;
  videoModal.classList.remove("is-hidden");
  videoModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

document.querySelectorAll("[data-close-modal]").forEach((el) => {
  el.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;

  // Wenn der Check offen ist, ESC als Zurück-zur-Webseite benutzen.
  if (checkOverlay && !checkOverlay.classList.contains("is-hidden")) {
    closeCheckOverlay();
    return;
  }

  if (consentModal && !consentModal.classList.contains("is-hidden")) {
    closeConsentModal();
    return;
  }

  closeModal();
});

function closeModal() {
  if (!videoModal) return;

  // Falls das Video läuft, beim Schließen sauber pausieren.
  const activeVideo = document.getElementById("kevinVideo");
  if (activeVideo && typeof activeVideo.pause === "function") {
    activeVideo.pause();
  }

  videoModal.classList.add("is-hidden");
  videoModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}


// ------------------------------------------------------------
// Datenschutz / Consent / optionales Marketing-Tracking
// ------------------------------------------------------------

function initConsent() {
  const consent = getSavedConsent();

  // Google Consent Mode: ohne Zustimmung standardmäßig verweigern.
  // Das ist nur vorbereitet; externe Tags werden erst nach Zustimmung geladen.
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtagFallback(){ dataLayer.push(arguments); };
  window.gtag("consent", "default", {
    ad_storage: "denied",
    analytics_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied"
  });

  if (!consent) {
    window.setTimeout(showConsentBanner, 700);
    return;
  }

  if (marketingConsent) marketingConsent.checked = Boolean(consent.marketing);
  applyConsent(consent);
}

function getSavedConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

function showConsentBanner() {
  if (!consentBanner) return;
  consentBanner.classList.remove("is-hidden");
}

function hideConsentBanner() {
  if (!consentBanner) return;
  consentBanner.classList.add("is-hidden");
}

function openConsentModal() {
  const saved = getSavedConsent();
  if (marketingConsent) marketingConsent.checked = Boolean(saved && saved.marketing);
  if (consentModal) {
    consentModal.classList.remove("is-hidden");
    consentModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }
}

function closeConsentModal() {
  if (!consentModal) return;
  consentModal.classList.add("is-hidden");
  consentModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function saveConsent(settings) {
  const consent = {
    necessary: true,
    marketing: Boolean(settings.marketing),
    savedAt: new Date().toISOString(),
    version: 1
  };

  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  } catch (error) {
    // Falls localStorage blockiert ist, funktioniert die Seite trotzdem.
  }

  if (marketingConsent) marketingConsent.checked = consent.marketing;
  hideConsentBanner();
  closeConsentModal();
  applyConsent(consent);
}

function applyConsent(consent) {
  const marketingAllowed = Boolean(consent && consent.marketing);

  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      ad_storage: marketingAllowed ? "granted" : "denied",
      analytics_storage: marketingAllowed ? "granted" : "denied",
      ad_user_data: marketingAllowed ? "granted" : "denied",
      ad_personalization: marketingAllowed ? "granted" : "denied"
    });
  }

  if (marketingAllowed) {
    loadMarketingScripts();
  }
}

function hasRealGoogleId() {
  return GOOGLE_ADS_ID && !GOOGLE_ADS_ID.includes("XXXX");
}

function hasRealMetaId() {
  return META_PIXEL_ID && !META_PIXEL_ID.includes("000000");
}

function loadMarketingScripts() {
  loadGoogleAdsTag();
  loadMetaPixel();
}

function loadGoogleAdsTag() {
  if (!hasRealGoogleId() || document.querySelector("script[data-google-ads]")) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GOOGLE_ADS_ID)}`;
  script.setAttribute("data-google-ads", "true");
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(){ dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", GOOGLE_ADS_ID);
}

function loadMetaPixel() {
  if (!hasRealMetaId() || window.fbq) return;

  /* Meta Pixel Basis-Code, erst nach Marketing-Einwilligung. */
  !function(f,b,e,v,n,t,s){
    if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)
  }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

  window.fbq("init", META_PIXEL_ID);
  window.fbq("track", "PageView");
}

function marketingIsAllowed() {
  const consent = getSavedConsent();
  return Boolean(consent && consent.marketing);
}

function trackLeadRequest() {
  if (!marketingIsAllowed()) return;

  // Google Ads Conversion: erst mit echter Conversion-ID/Label aktiv.
  if (typeof window.gtag === "function" && hasRealGoogleId() && !GOOGLE_CONVERSION_LABEL.includes("ERSETZEN")) {
    window.gtag("event", "conversion", {
      send_to: `${GOOGLE_ADS_ID}/${GOOGLE_CONVERSION_LABEL}`
    });
  }

  // Meta Lead Event: erst mit echter Pixel-ID aktiv.
  if (typeof window.fbq === "function" && hasRealMetaId()) {
    window.fbq("track", "Lead");
  }
}

// Hilfsfunktion: sauber zu einem Element scrollen.
function scrollToElement(element) {
  if (!element) return;
  const top = element.getBoundingClientRect().top + window.scrollY - 92;
  window.scrollTo({ top, behavior: "smooth" });
}

// Kleine Reveal-Animation beim Scrollen.
function observeRevealElements() {
  const revealEls = document.querySelectorAll(".reveal:not(.is-visible)");

  if (!("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealEls.forEach((el) => observer.observe(el));
}

// Minimaler Schutz, damit HTML in data-Attributen nicht kaputt geht.
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

// Startzustand beim Laden der Seite.
observeRevealElements();
