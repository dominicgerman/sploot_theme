import apiFetch from '@wordpress/api-fetch'
import { Button, PanelBody, PanelRow } from '@wordpress/components'
import {
  InspectorControls,
  MediaUpload,
  MediaUploadCheck,
} from '@wordpress/block-editor'
import { registerBlockType } from '@wordpress/blocks'
import useEffect from '@wordpress/element'

registerBlockType('blocktheme/banner', {
  title: 'Banner',
  attributes: {
    // align: { type: "string", default: "full" },
    imgID: { type: 'number' },
    imgURL: { type: 'string' },
  },
  edit: EditComponent,
  save: SaveComponent,
})

function EditComponent({ attributes, setAttributes }) {
  useEffect(async () => {
    const {
      media_details: { sizes },
    } = await apiFetch({
      path: `/wp/v2/media/${attributes.imgID}`,
      method: 'GET',
    })
    setAttributes({ imgURL: sizes.large.source_url })
  }, [attributes.imgID])

  function onFileSelect(x) {
    setAttributes({ imgID: x.id })
  }

  console.dir(attributes)

  return (
    <>
      <InspectorControls>
        <PanelBody title="Background" initialOpen={true}>
          <PanelRow>
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onFileSelect}
                value={attributes.imgID}
                render={({ open }) => {
                  return <Button onClick={open}>Choose Image</Button>
                }}
              />
            </MediaUploadCheck>
          </PanelRow>
        </PanelBody>
      </InspectorControls>
      <div>Ello</div>
    </>
  )
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
