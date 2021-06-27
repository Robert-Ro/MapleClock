import React from 'react'
import SvgDial from './svg'
import CanvasDial from './canvas'

interface Props {
  type: 'svg' | 'canvas'
  percent: number
}

export default ({ type, percent }: Props): JSX.Element => {
  const dialWidth = 400
  const dialHeight = 400
  const radius = 200
  const width = 300
  const height = 300
  const dialDownColor = '#ff9501'
  const dialUpColor = '#ff9'

  if (type === 'svg') {
    return (
      <SvgDial
        percent={percent}
        width={width}
        height={height}
        svgheight={dialHeight}
        svgwidth={dialWidth}
        radius={radius}
        downStroke={dialDownColor}
        upStroke={dialUpColor}
      />
    )
  } else {
    return <CanvasDial />
  }
}
