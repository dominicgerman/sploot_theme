import { registerBlockType } from '@wordpress/blocks'

registerBlockType('blocktheme/banner', {
  title: 'Banner',
  edit: EditComponent,
  save: SaveComponent,
})

function EditComponent() {
  return <p>Ello.</p>
}

function SaveComponent() {
  return (
    <div
      className="bg-cover bg-top w-screen"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.6) 92.6%), url('/wp-content/themes/sploot_theme/images/sploot.jpg')",
        height: '720px',
      }}
    ></div>
  )
}
