import React from 'react'
import { render } from 'react-dom'
import { Clock } from './components'
import './base.less'

render(<Clock />, document.getElementById('root') as HTMLElement)
