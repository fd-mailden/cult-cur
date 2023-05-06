import React from "react";
import PropTypes from "prop-types";
import style from "./ButtonCheck.module.scss";
import { Icon } from "../../UI/Icon/Icon";
import classNames from "classnames";
function ButtonCheck({ check, onCheck }) {
  return (
    <button
      className={classNames(
        style["check-wrapper"],
        check && style["check-wrapper--active"]
      )}
      onClick={() => onCheck()}
    >
      {check && <Icon name="check_blue" className={style.check} />}
    </button>
  );
}

ButtonCheck.propTypes = {
  onCheck: PropTypes.func.isRequired,
  check: PropTypes.bool.isRequired,
};

export default ButtonCheck;
