import React from 'react'

function ExampleReactComponent() {
  const arrow = {
    enabled: {
      bg: 'bg-orange',
      stroke: '#FFF',
    },
    disabled: {
      bg: 'bg-gray/50',
      stroke: 'rgba(33, 33, 33, 0.65)',
    },
  }
  const btn = {}

  return (
    <div
      className="bg-cover bg-top w-screen relative"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.6) 20%, rgba(0, 0, 0, 0.6) 92.6%), url('/wp-content/themes/sploot_theme/images/sploot.jpg')",
        height: '720px',
      }}
    >
      <button
        className={`h-12 w-12 rounded-full ${arrow.disabled.bg} absolute top-1/2 left-16 -translate-y-1/2`}
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
            stroke={arrow.disabled.stroke}
            stroke-opacity="0.65"
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
        className={`h-12 w-12 rounded-full ${arrow.enabled.bg} absolute top-1/2 right-16 -translate-y-1/2`}
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
            stroke={arrow.enabled.stroke}
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  )
}

export default ExampleReactComponent
