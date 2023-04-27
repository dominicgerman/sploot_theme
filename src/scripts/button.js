import { useState } from '@wordpress/element'
import { link } from '@wordpress/icons'
import { registerBlockType } from '@wordpress/blocks'
import { themeColors } from '../../inc/themeColors'
import {
  ToolbarGroup,
  ToolbarButton,
  Popover,
  Button,
  PanelBody,
  PanelRow,
  ColorPalette,
} from '@wordpress/components'
import {
  RichText,
  BlockControls,
  InspectorControls,
  __experimentalLinkControl as LinkControl,
  getColorObjectByColorValue,
} from '@wordpress/block-editor'

registerBlockType('blocktheme/button', {
  title: 'Button',
  attributes: {
    text: { type: 'string' },
    linkObject: {
      type: 'object',
      default: { url: '', opensInNewTab: false },
    },
    size: { type: 'string', default: 'h-12 w-48 text-base' },
    backgroundColor: {
      type: 'object',
      default: { name: 'black', color: '#212121' },
    },
  },
  edit: EditComponent,
  save: SaveComponent,
})

function EditComponent({ attributes, setAttributes }) {
  const [linkPickerVisible, setLinkPickerVisible] = useState(false)

  function handleTextChange(userInput) {
    setAttributes({ text: userInput })
  }

  function buttonHandler() {
    setLinkPickerVisible(() => !linkPickerVisible)
  }

  function handleLinkChange(newLink) {
    setAttributes({ linkObject: newLink })
  }

  function handleColorChange(colorCode) {
    const currentColorObject = getColorObjectByColorValue(
      themeColors,
      colorCode
    )
    setAttributes({ backgroundColor: currentColorObject })
  }

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton onClick={buttonHandler} icon={link} />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton
            isPressed={attributes.size === 'h-16 w-64 text-xl'}
            onClick={() => setAttributes({ size: 'h-16 w-64 text-xl' })}
          >
            Large
          </ToolbarButton>
          <ToolbarButton
            isPressed={attributes.size === 'h-12 w-48 text-base'}
            onClick={() => setAttributes({ size: 'h-12 w-48 text-base' })}
          >
            Medium
          </ToolbarButton>
          <ToolbarButton
            isPressed={attributes.size === 'h-8 w-32 text-sm'}
            onClick={() => setAttributes({ size: 'h-10 w-40 text-sm' })}
          >
            Small
          </ToolbarButton>
        </ToolbarGroup>
      </BlockControls>
      <InspectorControls>
        <PanelBody title="Color" initialOpen={true}>
          <PanelRow>
            <ColorPalette
              colors={themeColors}
              value={attributes.backgroundColor.color}
              onChange={handleColorChange}
              disableCustomColors={true}
              clearable={false}
            />
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <RichText
        tagName="div"
        allowedFormats={[]}
        className={`${attributes.size} flex items-center justify-center text-white font-bold bg-${attributes.backgroundColor.name} rounded-full`}
        value={attributes.text}
        onChange={handleTextChange}
      />
      {linkPickerVisible && (
        <Popover
          position="top center"
          onFocusOutside={() => setLinkPickerVisible(false)}
        >
          <LinkControl
            settings={[
              {
                id: 'opensInNewTab',
                title: 'Opens in new tab',
              },
            ]}
            value={attributes.linkObject}
            onChange={handleLinkChange}
          />
          <Button
            variant="primary"
            onClick={() => setLinkPickerVisible(false)}
            className="block w-full"
          >
            Confirm Link
          </Button>
        </Popover>
      )}
    </>
  )
}

function SaveComponent({ attributes }) {
  return (
    <>
      <a
        href={attributes.linkObject.url}
        target={
          attributes.linkObject.opensInNewTab === true ? '_blank' : '_self'
        }
      >
        <button
          tagName="button"
          value={attributes.text}
          className={`${attributes.size} text-white font-bold bg-${attributes.backgroundColor.name} rounded-full`}
        >
          {attributes.text}
        </button>
      </a>
    </>
  )
}
