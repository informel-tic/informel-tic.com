<?php
/**
 * mailer.php — INFORMEL-TIC Contact Form Backend
 * Sécurité : CORS, méthode POST, XSS, CSRF headers, validation stricte.
 */

declare(strict_types=1);

// ─── 1. CORS ─────────────────────────────────────────────────────────────────
// Remplacez par votre domaine en production.
$allowed_origins = [
    'https://informel-tic.com',
    'https://www.informel-tic.com',
    'http://localhost:5173',  // Dev only — à retirer en production
];

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';

if (in_array($origin, $allowed_origins, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
} else {
    // Origine non autorisée
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Origine non autorisée.']);
    exit;
}

header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=utf-8');

// Preflight CORS (OPTIONS)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ─── 2. Vérification de la méthode HTTP ──────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Méthode non autorisée.']);
    exit;
}

// ─── 3. Récupération et décodage du JSON body ─────────────────────────────────
$raw_body = file_get_contents('php://input');
$data = json_decode($raw_body, true);

if (json_last_error() !== JSON_ERROR_NONE || !is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Corps de requête invalide.']);
    exit;
}

// ─── 4. Extraction et sanitisation des champs ─────────────────────────────────
$name    = isset($data['name'])    ? trim(strip_tags(htmlspecialchars($data['name'],    ENT_QUOTES, 'UTF-8'))) : '';
$email   = isset($data['email'])   ? trim(strip_tags(htmlspecialchars($data['email'],   ENT_QUOTES, 'UTF-8'))) : '';
$phone   = isset($data['phone'])   ? trim(strip_tags(htmlspecialchars($data['phone'],   ENT_QUOTES, 'UTF-8'))) : '';
$subject = isset($data['subject']) ? trim(strip_tags(htmlspecialchars($data['subject'], ENT_QUOTES, 'UTF-8'))) : '';
$message = isset($data['message']) ? trim(strip_tags(htmlspecialchars($data['message'], ENT_QUOTES, 'UTF-8'))) : '';

// ─── 5. Validation stricte ────────────────────────────────────────────────────
$errors = [];

if (empty($name) || mb_strlen($name) < 2 || mb_strlen($name) > 100) {
    $errors[] = 'Le nom doit contenir entre 2 et 100 caractères.';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'L\'adresse e-mail est invalide.';
}

if (!empty($phone) && !preg_match('/^[\d\s\+\-\(\)\.]{7,20}$/', $phone)) {
    $errors[] = 'Le numéro de téléphone est invalide.';
}

if (empty($subject) || mb_strlen($subject) < 3 || mb_strlen($subject) > 150) {
    $errors[] = 'Le sujet doit contenir entre 3 et 150 caractères.';
}

if (empty($message) || mb_strlen($message) < 10 || mb_strlen($message) > 5000) {
    $errors[] = 'Le message doit contenir entre 10 et 5000 caractères.';
}

// Anti-spam : vérification honeypot (champ caché côté front)
if (!empty($data['website'])) {
    // Bot détecté — on répond "OK" mais on n'envoie rien
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message envoyé avec succès.']);
    exit;
}

if (!empty($errors)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
    exit;
}

// ─── 6. Construction et envoi de l'e-mail ─────────────────────────────────────
$to      = 'contact@informel-tic.com';
$subject_mail = '[Site Web] ' . $subject;

$body  = "Nouveau message reçu via le formulaire de contact d'informel-tic.com\n";
$body .= "═══════════════════════════════════════════\n\n";
$body .= "Nom     : " . $name . "\n";
$body .= "E-mail  : " . $email . "\n";
if (!empty($phone)) {
    $body .= "Tél.    : " . $phone . "\n";
}
$body .= "Sujet   : " . $subject . "\n\n";
$body .= "Message :\n";
$body .= "─────────────────────────────────────────\n";
$body .= $message . "\n\n";
$body .= "─────────────────────────────────────────\n";
$body .= "Envoyé le : " . date('d/m/Y à H:i:s') . "\n";

// Headers sécurisés — pas d'injection via les champs
$headers  = "From: noreply@informel-tic.com\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: INFORMEL-TIC-Mailer/1.0\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit\r\n";

$sent = mail($to, $subject_mail, $body, $headers);

if ($sent) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Votre message a bien été envoyé. Nous vous répondrons sous 24h.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Une erreur serveur est survenue. Veuillez réessayer ou nous contacter directement par e-mail.']);
}
