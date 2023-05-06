import React, { useState } from "react";
import style from "./Checkbox.module.scss";
import classNames from "classnames";
function Checkbox(props) {
  const [isTrue, setChecked] = useState(true);
  const { label = "", setCheck = setChecked, mode = "" } = props;

  return (
    <label className={classNames(style.container, style["container" + mode])}>
      {label}

      <input type="checkbox" onChange={(e) => setCheck(e.target.checked)} />
      <span
        className={classNames(style.checkmark, style["checkmark" + mode])}
      ></span>
    </label>
  );
}

export { Checkbox };
