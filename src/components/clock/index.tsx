import React, { useState, ReactElement } from 'react'
import styles from './index.less'
import classnames from 'classnames/bind'
import Timer from 'timer.js'
import { TIME_INTERVAL, calculateTimeText } from '../../utils'
import { Circle } from 'rc-progress'
import IconFont from '../Iconfont'

const cx = classnames.bind(styles)

interface Props {
  title?: string
}
const Clock = (): ReactElement => {
  const [timeText, setTimeText] = useState<string>(calculateTimeText(TIME_INTERVAL))
  const [left, setLeft] = useState<number>(1)
  const [status, setStatus] = useState<string>('idle')
  const timer = new Timer({
    tick: 1,
    onstart: () => {
      setStatus('running')
    },
    onend: async () => {
      setLeft(1)
      setTimeText(calculateTimeText(TIME_INTERVAL))
      const res = await window.electron.timerEnd()
      switch (res) {
        case 'rest':
          // alert('休息下')
          break
        case 'work':
          timer.start(TIME_INTERVAL / 1000)
          break
        default:
          break
      }
    },
    ontick: (left: number) => {
      setLeft(left / TIME_INTERVAL)
      setTimeText(calculateTimeText(left))
    },
  })
  const start = () => {
    timer.start(TIME_INTERVAL / 1000)
  }
  const pause = () => {
    console.log('time end')
    timer.pause()
  }
  const stop = () => {
    timer.stop(TIME_INTERVAL)
  }
  console.log(timer.getDuration(), timer.getStatus())
  return (
    <div className={cx('wrapper')}>
      <Circle
        percent={(1 - left) * 100}
        strokeColor="#fc9184"
        strokeWidth={2}
        trailWidth={2}
        className={cx('circle')}
      />
      <p></p>
      <p className={cx('time')}>{timeText}</p>
      <p>
        {status === 'running' ? (
          <IconFont className={cx('icon')} type="icon-Pause-1" onClick={pause} />
        ) : (
          <IconFont className={cx('icon')} type="icon-Play" onClick={start} />
        )}
      </p>
    </div>
  )
}

export default Clock
