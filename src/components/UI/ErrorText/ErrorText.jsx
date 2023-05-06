import React from "react";
import PropTypes from "prop-types";
import style from './ErrorText.module.scss'
function ErrorText({ text }) {
  return (
    <p className={style["error-text"]}>
      <span>****</span> {text}
      <span>****</span>
    </p>
  );
}

ErrorText.propTypes = {
  text: PropTypes.string,
};

export { ErrorText };
