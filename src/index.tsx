import React from 'react'
import { render } from 'react-dom'
import { HelloWorld } from './components'

render(<HelloWorld title="hello World" />, document.getElementById('root') as HTMLElement)
