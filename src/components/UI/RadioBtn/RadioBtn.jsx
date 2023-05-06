import React, { useState, useEffect } from "react";
import style from "./RadioBtn.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";

function RadioBtn({ setAdvancedSearch, description = "" }) {
  const [isActiveBtn, setActiveBtn] = useState(false);
  useEffect(() => {
    setAdvancedSearch(isActiveBtn);
  }, [isActiveBtn]);

  return (
    <div
      className={style["radio-component"]}
      onClick={() => setActiveBtn(!isActiveBtn)}
    >
      <div
        className={classNames(
          style["radio-wrapper"],
          isActiveBtn && style.active
        )}
      >
        <button
          className={classNames(
            style["radio-btn"],
            isActiveBtn && style["btn-active"]
          )}
        ></button>
      </div>
      <p className={style["radio-component__text"]}>{description}</p>
    </div>
  );
}
RadioBtn.propTypes = {
  setAdvancedSearch: PropTypes.func,
  description: PropTypes.string,
};
export { RadioBtn };
