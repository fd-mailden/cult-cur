import PropTypes from "prop-types";
import React from "react";
import style from "./MainWrapper.module.scss";
import { useHashFragment } from "../../../hooks/useHashFragment";
import classNames from "classnames";
function MainWrapper({ children, paddingBottom = 0, mode = "" }) {
  useHashFragment();
  return (
    <main
      className={classNames(style.main, style["main--" + mode])}
      style={{ paddingBottom: `${paddingBottom}px` }}
    >
      {children}
    </main>
  );
}
MainWrapper.propTypes = {
  children: PropTypes.node,
};
export { MainWrapper };
