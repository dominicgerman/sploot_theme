<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>

<body class="bg-white" <?php body_class(); ?>>
  <nav class="flex items-center shadow-sm h-20 px-20 justify-between">
    <h1 class="font-forum text-4xl uppercase"><a href="<?php echo get_home_url(); ?>">Koda</h1>
    <div class="flex gap-12">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Work</a>
      <a href="#">Contact</a>
    </div>
  </nav>