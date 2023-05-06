import React from 'react'
import style from './Title.module.scss'
import classNames from 'classnames'
function Title({children, mode = ''}) {
  return (
    <h1 className={classNames(style.title, style[mode])}>{children}</h1>
  )
}

export {Title}