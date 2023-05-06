import React from "react";
import style from "./ScoreBar.module.scss";
function ScoreBar({ percent = 50 }) {
  return (
    <div className={style.score}>
      <div className={style.score__head}>
        <p className={style.score__text}>Хорошая</p>
        <p className={style.score__center}>Справедливая</p>
        <p className={style.score__text}>Отличная</p>
      </div>
      <div className={style.bar}>
        <div style={{ left: `${percent}%` }} className={style.bar__dot}></div>
      </div>
    </div>
  );
}

export { ScoreBar };
