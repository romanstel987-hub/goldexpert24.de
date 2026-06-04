<?php
/**
 * GoldExpert24 — optionaler GoldAPI.io-Proxy.
 *
 * Zweck: Den API-Key SERVERSEITIG halten, damit er nicht im Client-JS sichtbar ist.
 * Voraussetzung: PHP muss auf dem Webserver/der Domain aktiviert sein
 * (CloudPanel: Site-Typ ggf. von "Static" auf einen PHP-fähigen Typ umstellen).
 *
 * Aktivierung im Frontend: in index.html  const USE_PHP_PROXY = true;
 * Aufruf: assets/goldprice.php?metal=XAU|XAG|XPT
 *
 * WICHTIG: Solange PHP NICHT aktiv ist, NICHT auf USE_PHP_PROXY=true stellen –
 * sonst würde der nginx-Server diese Datei als Klartext ausliefern und den Key zeigen.
 */

// =====================================================================
// GOLDAPI.IO — API-KEY HIER EINTRAGEN (bleibt serverseitig, nicht im Client)
// Kostenlosen Key holen: https://www.goldapi.io/dashboard
// =====================================================================
$GOLDAPI_KEY = "YOUR_API_KEY"; // TODO: echten GoldAPI.io-Key eintragen

header("Content-Type: application/json; charset=utf-8");

$allowed = array("XAU", "XAG", "XPT");
$metal = isset($_GET["metal"]) ? strtoupper($_GET["metal"]) : "";
if (!in_array($metal, $allowed, true)) {
    http_response_code(400);
    echo json_encode(array("error" => "invalid metal"));
    exit;
}

$url = "https://www.goldapi.io/api/" . $metal . "/EUR";
$ch = curl_init($url);
curl_setopt_array($ch, array(
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT => 10,
    CURLOPT_HTTPHEADER => array(
        "x-access-token: " . $GOLDAPI_KEY,
        "Content-Type: application/json",
    ),
));
$response = curl_exec($ch);
$status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($response === false || $status >= 400) {
    http_response_code(502);
    echo json_encode(array("error" => "upstream error", "status" => $status));
    exit;
}

// Kurz cachen (5 Min) auf Client-/Proxy-Ebene
header("Cache-Control: public, max-age=300");
echo $response;
