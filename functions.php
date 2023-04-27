<?php

function load_assets()
{
  wp_enqueue_script('mainjs', get_theme_file_uri('/build/index.js'), array('wp-element'), '1.0', true);
  wp_enqueue_style('googlefonts', 'https://fonts.googleapis.com/css2?family=Forum&family=Rubik:wght@400;500&display=swap', array(), null);
  wp_enqueue_style('maincss', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'load_assets');

function add_support()
{
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_theme_support('editor-styles');
  add_editor_style(array('https://fonts.googleapis.com/css2?family=Forum&family=Rubik:wght@400;500&display=swap', 'build/index.css'));
}

add_action('after_setup_theme', 'add_support');


class JSXBlock
{
  var $name;
  var $renderCallback;

  function __construct($blockName, $renderCallback = null)
  {
    $this->name = $blockName;
    $this->renderCallback = $renderCallback;
    add_action('init', [$this, 'onInit']);
  }

  function renderCallbackFunction($attributes, $content)
  {
    ob_start();
    require get_theme_file_path("/src/scripts/{$this->name}.php");
    return ob_get_clean();
  }

  function onInit()
  {
    wp_register_script($this->name, get_stylesheet_directory_uri() . "/build/{$this->name}.js", array('wp-blocks', 'wp-editor'));

    $args = array(
      'editor_script' => $this->name
    );

    if ($this->renderCallback) {
      $args['render_callback'] = [$this, 'renderCallbackFunction'];
    }

    register_block_type("blocktheme/{$this->name}", $args);
  }
}

new JSXBlock('banner', true);
new JSXBlock('slide');
new JSXBlock('heading');
new JSXBlock('subheading');
new JSXBlock('button');
