import React from 'react'
import style from './Gratitude.module.scss'
function Gratitude() {
  return (
    <div className={style.gratitude}>
        <h2 className={style.gratitude__title}>Спасибо, Ваша заявка принята</h2>
        <p className={style.gratitude__text}>Вы вернетесь на основной экран через 10 секунд...</p>
    </div>
  )
}

export {Gratitude}