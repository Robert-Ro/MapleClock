import * as React from 'react'
import styles from './t.less'
import classnames from 'classnames/bind'

const cx = classnames.bind(styles)

interface Props {
  title: string
}
const HelloWorld = ({ title }: Props): React.ReactElement => <span className={cx('title')}>{title}</span>

export default HelloWorld
