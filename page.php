<?php

get_header();

while (have_posts()) {
    the_post();
?>


    <div class="">

        <!-- example react component -->
        <div id="render-react-here"></div>
        <!-- end example react component -->

        <div class="prose max-w-full">
            <?php the_content() ?>
        </div>
    </div>
<? }

get_footer();
