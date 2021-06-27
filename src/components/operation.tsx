import React, { ReactElement } from 'react'
import IconFont from './icons'
import { cx } from '../utils'
import styles from './operation.less'

const Operation = (): ReactElement => (
  <p className={cx(styles)['wrapper']}>
    <IconFont type="icon-list" />
    <span>
      Today<b>0/10</b>
    </span>
    <IconFont type="icon-setting" />
  </p>
)

export default Operation
