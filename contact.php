<?php
/*
  Optionales Kontakt-Script für späteren Serverbetrieb
  ----------------------------------------------------
  Wichtig:
  - Diese Datei funktioniert nur auf einem Webserver mit PHP.
  - Lokal per Doppelklick auf index.html wird PHP NICHT ausgeführt.
  - In script.js steht CONTACT_MODE aktuell auf "demo".
    Wenn du echten Versand willst, dort auf "php" ändern.
  - Bitte Empfängeradresse unten ersetzen.
  - Vor Livegang Datenschutzerklärung, Impressum, AV-Vertrag mit Hoster und Mailversand prüfen.
  - Diese Datei speichert nichts in einer Datenbank; sie versendet nur eine E-Mail.
*/

header('Content-Type: application/json; charset=utf-8');

// Nur POST-Anfragen erlauben.
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Nur POST-Anfragen sind erlaubt.']);
    exit;
}

// Honeypot gegen einfache Bots: Das unsichtbare Feld muss leer bleiben.
if (!empty($_POST['website'] ?? '')) {
    echo json_encode(['success' => true, 'message' => 'Danke!']);
    exit;
}

// Kleine Hilfsfunktion zum Bereinigen von Eingaben.
function clean_input($value) {
    return trim(strip_tags((string)$value));
}

$name = clean_input($_POST['name'] ?? '');
$email = filter_var(trim((string)($_POST['email'] ?? '')), FILTER_VALIDATE_EMAIL);
$phone = clean_input($_POST['phone'] ?? '');
$zip = clean_input($_POST['zip'] ?? '');
$contactWish = clean_input($_POST['contact_wish'] ?? '');
$message = clean_input($_POST['message'] ?? '');

$answerLife = clean_input($_POST['answer_life'] ?? '');
$answerTopic = clean_input($_POST['answer_topic'] ?? '');
$answerDetail = clean_input($_POST['answer_detail'] ?? '');
$answerBarrier = clean_input($_POST['answer_barrier'] ?? '');
$answerChannel = clean_input($_POST['answer_channel'] ?? '');
$resultType = clean_input($_POST['result_type'] ?? '');
$checkSummary = clean_input($_POST['check_summary'] ?? '');
$requestSource = clean_input($_POST['request_source'] ?? '');
$consentText = clean_input($_POST['consent_text'] ?? '');

$referralStatus = clean_input($_POST['referral_status'] ?? '');
$referralName = clean_input($_POST['referral_name'] ?? '');
$referralSourceUrl = clean_input($_POST['referral_source_url'] ?? '');

$privacy = isset($_POST['privacy']);
$permission = isset($_POST['contact_permission']);

// Pflichtfelder prüfen. Telefon ist bewusst Pflichtfeld.
if ($name === '' || !$email || $phone === '' || $zip === '' || $contactWish === '' || !$privacy || !$permission) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Bitte fülle alle Pflichtfelder aus.']);
    exit;
}

// PLZ grob prüfen: 5 Ziffern.
if (!preg_match('/^[0-9]{5}$/', $zip)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Bitte gib eine gültige 5-stellige PLZ ein.']);
    exit;
}

// Empfehlungsstatus nur aus der sichtbaren Auswahl übernehmen.
$allowedReferralStatuses = ['', 'Ja', 'Nein'];
if (!in_array($referralStatus, $allowedReferralStatuses, true)) {
    $referralStatus = '';
}
if ($referralStatus !== 'Ja') {
    $referralName = '';
}

// HIER Kevins echte E-Mail-Adresse eintragen.
$to = 'kevin@example.com';
$subject = 'Neue Erstgespräch-Anfrage über Kevin-Funnel';

$body = "Neue Anfrage über die Funnel-Webseite\n\n";
$body .= "Name: {$name}\n";
$body .= "E-Mail: {$email}\n";
$body .= "Telefon: {$phone}\n";
$body .= "PLZ: {$zip}\n";
$body .= "Gewünschte Kontaktart: {$contactWish}\n";
$body .= "Quelle der Anfrage: {$requestSource}\n\n";

$body .= "--- Empfehlung ---\n";
if ($referralStatus === '') {
    $body .= "Keine Angabe\n\n";
} else {
    $body .= "Wurde empfohlen: {$referralStatus}\n";
    if ($referralName !== '') {
        $body .= "Empfohlen von: {$referralName}\n";
    }
    if ($referralSourceUrl !== '') {
        $body .= "Empfehlungs-URL: {$referralSourceUrl}\n";
    }
    $body .= "\n";
}

$body .= "Freitext:\n{$message}\n\n";
$body .= "--- Check-Zusammenfassung ---\n";
if ($checkSummary !== '') {
    $body .= "{$checkSummary}\n\n";
} else {
    $body .= "Keine Check-Antworten übermittelt.\n\n";
}

if ($checkSummary !== '') {
    $body .= "--- Einzelwerte ---\n";
    $body .= "Planung / Haltung: {$answerLife}\n";
    $body .= "Hauptthema: {$answerTopic}\n";
    $body .= "Detail: {$answerDetail}\n";
    $body .= "Zurückhaltung / Barriere: {$answerBarrier}\n";
    $body .= "Kontaktart aus Check: {$answerChannel}\n";
    $body .= "Ergebnis-Typ: {$resultType}\n\n";
}

$body .= "--- Datenschutz / Einwilligung ---\n";
$body .= "Datenschutzerklärung bestätigt: " . ($privacy ? "Ja" : "Nein") . "\n";
$body .= "Kontaktaufnahme erlaubt: " . ($permission ? "Ja" : "Nein") . "\n";
$body .= "Consent-Text: {$consentText}\n";
$body .= "Zeitpunkt Server: " . date('c') . "\n\n";
$body .= "Hinweis: Diese Anfrage ist nur eine Kontaktanfrage zur Terminvereinbarung.\n";

$headers = [];
$headers[] = 'From: Website <no-reply@' . ($_SERVER['HTTP_HOST'] ?? 'localhost') . '>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Die E-Mail konnte nicht versendet werden. Bitte Server-Mailfunktion prüfen.']);
    exit;
}

echo json_encode(['success' => true, 'message' => 'Danke! Deine Anfrage wurde gesendet. Kevin meldet sich zur Terminvereinbarung.']);
