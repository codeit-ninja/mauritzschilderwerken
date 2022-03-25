<?php
function projects_shortcode() {
    return get_template_part('partials/projects', 'archive');
}

add_shortcode('projects', 'projects_shortcode');