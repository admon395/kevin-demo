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
        { value: "no_pressure", icon: "🛑", title: "Nichts angedreht zu bekommen", micro: "Erst verstehen, dann entscheiden." },
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
        { value: "income_secure", icon: "🛡️", title: "Werde ich berufsunfähig?", micro: "Was passiert dann mit meinem Einkommen?" },
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
        { value: "business_income", icon: "💼", title: "Vorteile für Mitarbeiter", micro: "Absicherung meiner Mitarbeiter" },
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

  return getFusedResultHtml();
}

// Neue Fazit-Engine: Antworten werden als Bedeutungen gelesen,
// nicht als einzelne Textbausteine wiederholt.
function getFusedResultHtml() {
  const life = answers.life || "";
  const topic = answers.topic || "";
  const detail = answers.detail || "";
  const barrier = answers.barrier || "";

  const mindset = getMindsetProfile(life, barrier);
  const topicCore = getTopicCore(topic, detail);

  return [
    `<p class="result-tagline">${topicCore.headline}</p>`,
    `<p>${mindset}</p>`,
    `<p>${topicCore.text}</p>`
  ].join("\n");
}

function getMindsetProfile(life, barrier) {
  const fallback = "Du musst noch keinen fertigen Plan haben. Erstmal reicht ein ehrlicher Blick darauf, was gerade wirklich wichtig ist.";

  const profiles = {
    plan_long: {
      no_pressure: "Du willst nicht warten, bis ein Thema brennt. Gleichzeitig willst du nichts hören, was sich nach Verkauf anfühlt.",
      no_understanding: "Du willst früh genug hinschauen, aber bitte ohne schöne Verpackung. Es soll klar sein, was Sinn macht und was nicht.",
      no_trust: "Du willst vorausdenken, aber nicht später über Kosten oder Bedingungen stolpern. Genau solche Details müssen vorher klar sein.",
      postpone: "Du denkst weiter als nur bis morgen. Wichtig ist dir, dass Fragen nicht irgendwo versanden, sobald es komplizierter wird."
    },
    plan_mid: {
      no_pressure: "Du willst erstmal Ordnung reinbringen. Nicht mit Druck, nicht mit Verkauf, sondern so, dass du danach klarer siehst.",
      no_understanding: "Du willst kein Fachgerede. Du willst verstehen, worum es wirklich geht und was davon für dich überhaupt wichtig ist.",
      no_trust: "Du willst sortieren, aber ohne komisches Bauchgefühl. Kosten, Bedingungen und Kleingedrucktes müssen klar sichtbar sein.",
      postpone: "Du willst Überblick, ohne alles allein tragen zu müssen. Es soll greifbar werden, nicht noch komplizierter."
    },
    plan_short: {
      no_pressure: "Du willst gerade keinen großen Lebensplan. Du willst wissen, was jetzt zählt und was erstmal egal sein kann.",
      no_understanding: "Du brauchst keine langen Erklärungen. Kurz, ehrlich und normal verständlich reicht völlig.",
      no_trust: "Du willst schnell Klarheit, aber nicht oberflächlich. Gerade bei Kosten und Risiken muss man direkt ehrlich sein.",
      postpone: "Du willst nicht alles zerdenken. Du willst einfach merken, ob gerade etwas Wichtiges offen ist oder nicht."
    },
    party_reconsidered: {
      no_pressure: "Gut, dass du doch nochmal hinschaust. Das muss nicht heißen, dass du jetzt alles ernst und trocken planen willst.",
      no_understanding: "Wenn du schon hinschaust, dann bitte normal. Kein Finanztheater, keine Fachsprache, keine Show.",
      no_trust: "Du willst nicht in etwas reinlaufen, ohne zu wissen, was es kostet oder was dahintersteckt. Genau das ist ein guter Punkt.",
      postpone: "Du musst nicht alles sofort klären. Aber ganz egal scheint es dir eben doch nicht zu sein."
    }
  };

  return (profiles[life] && profiles[life][barrier]) || fallback;
}

function getTopicCore(topic, detail) {
  const fallback = {
    headline: "Du willst erstmal Klarheit.",
    text: "Es muss nicht sofort eine Entscheidung entstehen. Erstmal sollte verständlich werden, welche Themen wirklich wichtig sind."
  };

  const detailTexts = {
    income_secure: {
      headline: "Dein Einkommen ist der Punkt.",
      text: "Wenn Arbeit plötzlich nicht mehr geht, geht es nicht um Papier. Es geht um Miete, Alltag, Freiheit und darum, wie lange man ruhig bleiben kann."
    },
    income_costs: {
      headline: "Du willst wissen, was wirklich passiert.",
      text: "Nicht die Theorie ist spannend, sondern der Moment, in dem man Hilfe braucht. Dann zählen Unterlagen, Fristen, Nachweise und die Frage, ob man überhaupt weiß, was zu tun ist."
    },
    income_overview: {
      headline: "Du willst keine Bauchentscheidung.",
      text: "Berufsunfähigkeit ist kein Thema, das man einfach blind abhakt. Erstmal muss klar sein, ob es zu deinem Beruf, deinem Einkommen und deinem Alltag passt."
    },
    income_unsure: {
      headline: "Du willst erstmal ein Gefühl dafür bekommen.",
      text: "Das reicht für den Anfang. Man muss nicht sofort die perfekte Frage stellen. Wichtig ist erstmal, ob dein Einkommen wirklich geschützt wäre, wenn Arbeit plötzlich ausfällt."
    },
    retirement_enough: {
      headline: "Du willst später nicht knapp leben.",
      text: "Bei Rente geht es nicht nur um eine Zahl auf dem Papier. Es geht darum, ob dein Leben später noch frei genug bleibt oder ob Geld jeden Monat Druck macht."
    },
    retirement_start: {
      headline: "Du willst nicht warten, bis die Energie weg ist.",
      text: "Nicht bis 70 arbeiten zu müssen ist kein abgehobener Wunsch. Es geht um Zeit, Gesundheit und darum, später noch echte Möglichkeiten zu haben."
    },
    retirement_lifestyle: {
      headline: "Du willst wissen, was mit deinem Geld möglich ist.",
      text: "Ob ETF, Fonds, Immobilie oder etwas anderes passt, kommt erst danach. Vorher muss klar sein, welches Ziel du hast und wie viel Risiko du wirklich aushältst."
    },
    family_partner: {
      headline: "Du denkst nicht nur an dich.",
      text: "Wenn ein Partner mit dranhängt, wird Geld persönlicher. Dann geht es nicht nur um Zahlen, sondern darum, dass niemand allein das Risiko tragen muss."
    },
    family_kids: {
      headline: "Mit Kindern wird Planung echter.",
      text: "Dann geht es nicht nur darum, ob du selbst klarkommst. Es geht darum, wer mit betroffen wäre, wenn Einkommen, Gesundheit oder Planung plötzlich wackeln."
    },
    family_calm: {
      headline: "Du willst Ruhe für deine Familie.",
      text: "Einkommen hält zuhause oft mehr zusammen, als man im Alltag merkt. Wenn es wegfällt, soll nicht direkt alles andere mit wackeln."
    },
    family_unsure: {
      headline: "Du willst Ordnung in Familienthemen.",
      text: "Familie, Geld und Absicherung werden schnell unübersichtlich. Erstmal muss klar sein, was wirklich wichtig ist und was warten kann."
    },
    estate_buy: {
      headline: "Eigentum heißt auch laufende Verantwortung.",
      text: "Bei Eigentum geht es nicht nur um Kaufpreis und Rate. Wichtig sind Finanzierung, Rücklagen, Absicherung und die Frage, ob die Belastung auch dann passt, wenn das Leben nicht perfekt läuft."
    },
    estate_finance: {
      headline: "Immobilien können Kapital aufbauen, aber nicht von allein.",
      text: "Bei vermieteten Wohnungen zählen Mieteinnahmen, Verwaltung, Bank, Rücklagen und Kosten. Interessant wird es erst, wenn die Rechnung auch nüchtern betrachtet Sinn ergibt."
    },
    estate_existing: {
      headline: "Finanzierung muss zu dir passen.",
      text: "Eine Rate kann heute gut aussehen und später trotzdem eng werden. Wichtig ist, was passiert, wenn Kosten steigen, Miete ausfällt oder dein eigenes Einkommen schwankt."
    },
    estate_unsure: {
      headline: "Bei Immobilien brauchst du erstmal Überblick.",
      text: "Es muss nicht sofort um Kaufen oder Nichtkaufen gehen. Erstmal zählt, ob Finanzierung, Verwaltung, Risiko und Absicherung überhaupt verständlich sind."
    },
    business_risk: {
      headline: "Du willst Risiken sehen, bevor sie teuer werden.",
      text: "Im Gewerbe muss nicht alles perfekt gelöst sein. Aber die großen offenen Stellen sollte man kennen, bevor sie plötzlich Geld, Zeit oder Nerven kosten."
    },
    business_income: {
      headline: "Du denkst auch an die Menschen im Betrieb.",
      text: "Mitarbeitervorteile sind nicht nur Extras. Sie können helfen, gute Leute zu halten und Verantwortung sichtbar zu machen."
    },
    business_responsibility: {
      headline: "Du willst nicht alles einfach weiterlaufen lassen.",
      text: "Bestehende Versicherungen können passen, zu teuer sein oder Lücken haben. Ein ehrlicher Blick zeigt, was noch Sinn ergibt und was nicht."
    },
    business_unsure: {
      headline: "Am Anfang braucht es keinen perfekten Plan.",
      text: "In der Gründungsphase zählt Überblick. Was ist wirklich wichtig, was kann warten und wo sollte man nicht komplett blind starten?"
    },
    clarity_structure: {
      headline: "Vielleicht liegt der erste Schritt näher, als du denkst.",
      text: "Manchmal geht es nicht um große Entscheidungen. Vielleicht gibt es schon Zuschüsse, Vorteile oder einfache Möglichkeiten, die bisher liegen geblieben sind."
    },
    clarity_language: {
      headline: "Du willst es endlich normal verstehen.",
      text: "Bei dir geht es wahrscheinlich nicht um eine bestimmte Lösung. Es geht darum, dass Finanzthemen nicht mehr wie eine fremde Sprache klingen."
    },
    clarity_priority: {
      headline: "Klarheit beginnt oft beim Geldfluss.",
      text: "Bevor man über Absicherung oder Anlage spricht, kann eine einfache Frage wichtiger sein: Wo geht dein Geld hin und was bleibt wirklich übrig?"
    },
    clarity_calm: {
      headline: "Manchmal reicht ein Blick von außen.",
      text: "Nicht jede Frage braucht sofort eine Lösung. Manchmal reicht es, wenn jemand ruhig mitsortiert und die Dinge verständlicher macht."
    }
  };

  return detailTexts[detail] || fallback;
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