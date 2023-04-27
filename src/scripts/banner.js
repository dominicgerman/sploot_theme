import { registerBlockType } from '@wordpress/blocks'
import { InnerBlocks } from '@wordpress/block-editor'

registerBlockType('blocktheme/banner', {
  title: 'Banner',
  attributes: {
    align: { type: 'string', default: 'full' },
  },
  supports: {
    align: ['full'],
  },
  edit: EditComponent,
  save: SaveComponent,
})

function EditComponent({ attributes, setAttributes }) {
  return (
    <>
      <div className="h-[720px] w-full relative bg-gray">
        <button
          className={`h-12 w-12 rounded-full absolute top-1/2 left-16 -translate-y-1/2`}
        >
          <svg
            width="13"
            height="21"
            viewBox="0 0 13 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="translate-x-4"
          >
            <path
              d="M11.5 19.5L3.48522 13.3068C1.95826 12.1268 1.92633 9.83301 3.41985 8.61103L11.5 2"
              stroke="#FFF"
              stroke-opacity="1"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <InnerBlocks allowedBlocks={['blocktheme/slide']} />
        <button
          className={`h-12 w-12 rounded-full absolute top-1/2 right-16 -translate-y-1/2`}
        >
          <svg
            width="13"
            height="21"
            viewBox="0 0 13 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="translate-x-5"
          >
            <path
              d="M1.5 2L9.51478 8.19324C11.0417 9.37316 11.0737 11.667 9.58015 12.889L1.5 19.5"
              stroke="#FFF"
              stroke-opacity="1"
              stroke-width="3"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <div className="flex gap-2 absolute bottom-6 left-1/2 -translate-x-1/2">
          <div
            className={`h-3 w-3 border-white rounded-full border-2 bg-darkGray `}
          ></div>
          <div
            className={`h-3 w-3 border-white rounded-full border-2 bg-white `}
          ></div>
          <div
            className={`h-3 w-3 border-white rounded-full border-2 bg-white `}
          ></div>
          <div
            className={`h-3 w-3 border-white rounded-full border-2 bg-white `}
          ></div>
        </div>
      </div>
    </>
  )
}

function SaveComponent() {
  return <InnerBlocks.Content />
}
