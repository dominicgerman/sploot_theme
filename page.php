<?php

get_header();

while (have_posts()) {
    the_post();
?>


    <div class="">
        <?php the_content() ?>
    </div>
<? }

get_footer();
