import { React, useState } from 'react'

function ExampleReactComponent() {
  const [slide, setSlide] = useState(0)
  const images = ['sploot.jpg', 'waterfall.jpg', 'penguins.jpg']
  const arrow = {
    enabled: {
      bg: 'bg-orange',
      stroke: '#FFF',
      strokeOpacity: '1',
    },
    disabled: {
      bg: 'bg-gray/50',
      stroke: 'rgba(33, 33, 33, 0.65)',
      strokeOpacity: '0.65',
    },
  }

  return (
    <div
      className="bg-cover bg-top w-screen relative"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.6) 92.6%), url('/wp-content/themes/sploot_theme/images/${images[slide]}')`,
        height: '720px',
      }}
    >
      <button
        className={`h-12 w-12 rounded-full ${
          slide > 0 ? arrow.enabled.bg : arrow.disabled.bg
        } absolute top-1/2 left-16 -translate-y-1/2`}
        onClick={() => {
          if (slide > 0) {
            setSlide(slide - 1)
          }
        }}
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
            stroke={slide > 0 ? arrow.enabled.stroke : arrow.disabled.stroke}
            stroke-opacity={
              slide > 0
                ? arrow.enabled.strokeOpacity
                : arrow.disabled.strokeOpacity
            }
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <div className="mx-44 text-white">
        <div className="absolute top-1/2 -translate-y-1/2">
          <div className="max-w-5xl font-forum text-6xl mb-8">
            No matter what tools you use to create, the true instrument is you.
          </div>
          <div className="text-3xl mb-8">
            And through you, the universe that surrounds us all comes into
            focus.
          </div>
          <a href="#" className="mb-8">
            <button className="h-12 w-48 bg-black/100 rounded-full">
              About the team
            </button>
          </a>
        </div>
      </div>
      <button
        className={`h-12 w-12 rounded-full ${
          slide < images.length - 1 ? arrow.enabled.bg : arrow.disabled.bg
        } absolute top-1/2 right-16 -translate-y-1/2`}
        onClick={() => {
          if (slide < images.length - 1) {
            setSlide(slide + 1)
          }
        }}
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
            stroke={
              slide < images.length - 1
                ? arrow.enabled.stroke
                : arrow.disabled.stroke
            }
            stroke-opacity={
              slide < images.length - 1
                ? arrow.enabled.strokeOpacity
                : arrow.disabled.strokeOpacity
            }
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <div className="flex gap-2 absolute bottom-6 left-1/2 -translate-x-1/2">
        {images.map((imgPath, i) => (
          <div
            key={imgPath}
            className={`h-3 w-3 border-white rounded-full border-2 ${
              slide === i ? 'bg-darkGray' : 'bg-white'
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default ExampleReactComponent
