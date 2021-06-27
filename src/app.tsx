import React, { ReactElement } from 'react'
import { Clock, TaskTitle , Operation} from './components'
import classnames from 'classnames/bind'
import styles from './app.less'

const cx = classnames.bind(styles)

export default (): ReactElement => (
  <section className={cx('app')}>
    <TaskTitle />
    <Clock />
    <Operation />
  </section>
)
