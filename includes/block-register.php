<?php
/**
 * Registrierung des Image-Rotator-Blocks
 */

defined('ABSPATH') || exit;

function ud_register_image_rotator_block() {
    register_block_type_from_metadata(__DIR__ . '/../');
}
add_action('init', 'ud_register_image_rotator_block');
