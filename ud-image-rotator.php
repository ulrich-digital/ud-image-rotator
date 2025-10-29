<?php
/**
 * Plugin Name:     UD Block: Bild-Rotator
 * Description:     Block zum zufälligen Rotieren mehrerer Bilder mit optionalem Spruch-Text und Teaser-Button, zeitlich steuerbar über Start- und Enddatum.
 * Version:         1.0.0
 * Author:          ulrich.digital gmbh
 * Author URI:      https://ulrich.digital/
 * License:         GPL v2 or later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     image-rotator-block-ud
 */


/**
 * Hinweis:
 * Diese Datei dient ausschliesslich als Einstiegspunkt für das Plugin.
 */

defined('ABSPATH') || exit;

foreach ([
    //'helpers.php',           // Allgemeine Hilfsfunktionen
    'block-register.php',    // Block-Registrierung via block.json
    'enqueue.php'            // Enqueue von Styles/Scripts
] as $file) {
    require_once __DIR__ . '/includes/' . $file;
}

// Beispiel für zukünftige Einstellungen
/*
add_filter('plugin_action_links_' . plugin_basename(__FILE__), function ($links) {
    $url = admin_url('options-general.php?page=accordion_settings');
    $settings_link = '<a href="' . esc_url($url) . '">Einstellungen</
*/