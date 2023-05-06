import React from 'react'
import { ShowroomsBottom } from '../ShowroomsBottom/ShowroomsBottom';
import { ShowroomsTop } from '../ShowroomsTop/ShowroomsTop';
import style from './CarShowrooms.module.scss';
function CarShowrooms() {
  return (
    <section className={style.showrooms}>
        <ShowroomsTop/>
        <ShowroomsBottom/>
    </section>
  )
}

export {CarShowrooms}