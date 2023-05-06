import React from 'react'
import style from './Grid.module.scss'
import classNames from 'classnames'
function Grid({children}) {
  return (
    <article className={classNames(style.grid, 'row')}>
        {children}
    </article>
  )
}

export {Grid}