import React from 'react'

export default () => {
  const width = 200
  const draw = () => 1
  requestAnimationFrame(() => {
    draw()
  })
  return <canvas></canvas>
}
