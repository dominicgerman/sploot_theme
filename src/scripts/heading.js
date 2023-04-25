import { registerBlockType } from '@wordpress/blocks'
import { ToolbarGroup, ToolbarButton } from '@wordpress/components'
import { RichText, BlockControls } from '@wordpress/block-editor'

registerBlockType('blocktheme/heading', {
  title: 'Heading',
  attributes: {
    text: { type: 'string' },
    size: { type: 'string', default: 'text-6xl' },
  },
  edit: EditComponent,
  save: SaveComponent,
})

function EditComponent({ attributes, setAttributes }) {
  function handleTextChange(userInput) {
    setAttributes({ text: userInput })
  }

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            isPressed={attributes.size === 'text-6xl'}
            onClick={() => setAttributes({ size: 'text-6xl' })}
          >
            Large
          </ToolbarButton>
          <ToolbarButton
            isPressed={attributes.size === 'text-5xl'}
            onClick={() => setAttributes({ size: 'text-5xl' })}
          >
            Medium
          </ToolbarButton>
          <ToolbarButton
            isPressed={attributes.size === 'text-4xl'}
            onClick={() => setAttributes({ size: 'text-4xl' })}
          >
            Small
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>
      <RichText
        tagName="h2"
        allowedFormats={['core/bold', 'core/italic']}
        className={`font-forum ${attributes.size} mb-8 max-w-5xl translate-x-16 translate-y-96`}
        value={attributes.text}
        onChange={handleTextChange}
      />
    </>
  )
}

function SaveComponent({ attributes }) {
  return (
    <>
      <RichText.Content
        tagName="h2"
        value={attributes.text}
        className={`font-forum ${attributes.size} mb-8 max-w-5xl`}
      />
    </>
  )
}
