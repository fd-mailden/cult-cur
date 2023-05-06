import React from "react";
import style from "./AdminWrapper.module.scss";
import PropTypes from "prop-types";

function AdminWrapper({ children }) {
  return <main className={style.wrapper}>{children}</main>;
}
AdminWrapper.propTypes = {
  children: PropTypes.node,
};
export { AdminWrapper };
