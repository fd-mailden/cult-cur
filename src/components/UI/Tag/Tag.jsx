import React, { useState } from "react";
import style from "./Tag.module.scss";
import { ReactComponent as Close } from "../../../assets/images/icon-close.svg";
import { ReactComponent as Done } from "../../../assets/images/icon-done.svg";
import classNames from "classnames";
import PropTypes from "prop-types";

function Tag(props) {
  const { tag, mode = "" } = props;
  return (
    <div
      className={classNames( style.tag, style[mode], tag.active && style.active)}
    >
      <button
        className={classNames(
          style.tag__btn,
          tag.active && style["btn-active"]
        )}
      >
        <Done className={style.tag__img} />
      </button>
      <p className={style.tag__text}>{tag.text}</p>
      <button
        className={classNames(
          style.tag__btn,
          tag.active && style["btn-active"]
        )}
      >
        <Close className={style.tag__img} />
      </button>
    </div>
  );
}
Tag.propTypes = {
  tag: PropTypes.object,
  mode: PropTypes.string,
};
export {Tag};
