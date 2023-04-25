import apiFetch from '@wordpress/api-fetch'
import { registerBlockType } from '@wordpress/blocks'
import { useEffect, useState } from '@wordpress/element'
import { Button, PanelBody, PanelRow } from '@wordpress/components'
import { InnerBlocks } from '@wordpress/block-editor'

registerBlockType('blocktheme/slide', {
  title: 'Slide',
  attributes: {},
  edit: EditComponent,
  save: SaveComponent,
})

function EditComponent({ attributes, setAttributes }) {
  return (
    <>
      <div className="mx-44 text-white">
        <div className="">
          <InnerBlocks
            allowedBlocks={[
              'blocktheme/heading',
              'blocktheme/subheading',
              'blocktheme/button',
            ]}
          />
        </div>
      </div>
    </>
  )
}

function SaveComponent() {
  return (
    <>
      <div className="mx-44 text-white">
        <div className="absolute top-1/2 -translate-y-1/2">
          <InnerBlocks.Content />
        </div>
      </div>
    </>
  )
}
