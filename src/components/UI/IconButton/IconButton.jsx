import React from "react";
import style from "./IconButton.module.scss";
import classNames from "classnames";
import { ReactComponent as Liked } from "../../../assets/images/liked.svg";
import { ReactComponent as Charts } from "../../../assets/images/charts.svg";
import { ReactComponent as Search } from "../../../assets/images/search.svg";
import PropTypes from "prop-types";

function IconButton({ ...props }) {
  const { btn = "", type = "button", styles = "" } = props;

  return (
    <button
      {...props}
      type={type}
      className={classNames(style.button, style[styles])}
    >
      {btn === "liked" && <Liked className={style.icon} />}
      {btn === "charts" && <Charts className={style.icon} />}
      {btn === "search" && <Search className={style.icon} />}
    </button>
  );
}
IconButton.propTypes = {
  btn: PropTypes.string,
  type: PropTypes.string,
  styles: PropTypes.string,
};
export { IconButton };
