import React from "react";
import style from "./Textarea.module.scss";
function Textarea(props) {
  return (
    <textarea
      {...props}
      className={style.textarea}
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="Напишите все то, что считаете важным - марка, модель, коробка передач.."
    />
  );
}

export { Textarea };
