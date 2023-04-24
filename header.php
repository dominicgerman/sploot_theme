<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>

<body class="bg-white font-rubik" <?php body_class(); ?>>

  <?php
  $parentId = wp_get_post_parent_id(get_the_ID());
  $navActive = 'font-medium underline underline-offset-8 decoration-orange decoration-4'
  ?>

  <nav class="flex items-center shadow-sm h-20 px-20 justify-between">
    <h1 class="font-forum text-4xl uppercase"><a href="<?php echo get_home_url(); ?>">Koda</h1>
    <div class="flex gap-12">
      <a href="#" class="<?php if (!$parentId) echo $navActive ?>">Home</a>
      <a href="#" class="<?php if (is_page('/about')) echo $navActive ?>">About</a>
      <a href="#" class="<?php if (is_page('/work')) echo $navActive ?>">Work</a>
      <a href="#" class="<?php if (is_page('/contact')) echo $navActive ?>">Contact</a>
    </div>
  </nav>