import React, { useMemo } from 'react'

interface Props {
  width: number
  height: number
  radius: number
  svgwidth: number
  svgheight: number
  percent: number
  downStroke: string
  upStroke: string
}
export default ({
  width,
  height,
  svgheight,
  svgwidth,
  radius,
  percent,
  downStroke = '#ff5',
  upStroke = '#ff9',
}: Props): JSX.Element => {
  const dashArray = useMemo(() => Math.PI * 2 * radius, [width])
  const offset = useMemo(() => dashArray * percent, [dashArray, percent])
  return (
    <svg
      style={{ width: svgwidth, height: svgheight }}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox={`0 0 ${svgwidth} ${svgheight}`}
    >
      <circle
        fill="transparent"
        strokeDasharray={dashArray}
        stroke={downStroke}
        cx={width}
        strokeWidth={8}
        cy={height}
        r={radius}
      ></circle>
      <circle
        fill="transparent"
        strokeDasharray={dashArray}
        stroke={upStroke}
        strokeWidth={8}
        cx={width}
        cy={height}
        r={radius}
        strokeDashoffset={offset}
      ></circle>
    </svg>
  )
}
