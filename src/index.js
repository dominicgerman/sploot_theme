import Person from './scripts/Person'
import ExampleReactComponent from './scripts/ExampleReactComponent'
import React from 'react'
import ReactDOM from 'react-dom'

new Person('Dom')

if (document.querySelector('#render-react-here')) {
  ReactDOM.render(
    <ExampleReactComponent />,
    document.querySelector('#render-react-here')
  )
}
