import React, { useState, ReactElement } from 'react'
import styles from './clock.less'
import classnames from 'classnames/bind'
import Timer from 'timer.js'
import { TIME_INTERVAL, calculateTimeText } from '../utils'
const cx = classnames.bind(styles)

interface Props {
  title?: string
}
const Clock = (): ReactElement => {
  const [timeText, setTimeText] = useState<string>(calculateTimeText(TIME_INTERVAL))
  const timer = new Timer({
    tick: 1,
    onstart: () => {
      console.log('start')
    },
    onend: async () => {
      const res = await window.electron.timerEnd()
      new Notification('Title', {
        body: 'notification from renderer process!',
      })
      switch (res) {
        case 'rest':
          alert('休息下')
          break
        case 'work':
          timer.start(TIME_INTERVAL / 1000)
          break
        default:
          break
      }
    },
    ontick: (left: number) => {
      setTimeText(calculateTimeText(left))
    },
  })
  const start = () => {
    timer.start(TIME_INTERVAL / 1000)
  }

  return (
    <div className={cx('wrapper')}>
      <p>当前时间</p>
      <p>{timer.getStatus() === 'initialized' ? timeText : '结束'}</p>
      <p>{timer.getStatus() === 'started' ? '' : <button onClick={start}>开始</button>}</p>
    </div>
  )
}

export default Clock
