import React from "react";
import greenIconDone from "../../../assets/images/icon-green-done.svg";
import style from './LineList.module.scss'
function LineList({listTitle, list }) {
  return (
    <>
      <h3 className={style["list-title"]}>
        {listTitle}
      </h3>
      <ul className={style.list}>
        {list.map((item, index) => (
          <li className={style.list__item} key={index}>
            <img src={greenIconDone} alt="greenIconDone" />
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export {LineList};
