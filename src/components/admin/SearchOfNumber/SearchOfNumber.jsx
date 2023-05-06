import React, { useEffect } from "react";
import ReactDOM from "react-dom";

import style from "./SearchOfNumber.module.scss";
import { Icon } from "../../UI/Icon/Icon";
import { useManagePopperState } from "../../../hooks/useManagePopperState";
function SearchOfNumber(props) {
  const {
    models: { isOpen, styles, attributes },
    commands: { setPopperElement, toggleMenu, setReferenceElement },
  } = useManagePopperState({ placement: "bottom-start" });
  useEffect(() => {
    if (props.empty) {
      toggleMenu(true);
    }
  }, [props.empty]);

  return (
    <>
      <form
        ref={(ref) => setReferenceElement(ref)}
        className={style["search-wrapper"]}
        onSubmit={props.onSubmit}
      >
        <div className={style["input-wrapper"]}>
          <Icon name="search" className={style.icon} />
          <input
            type="number"
            className={style.input}
            name="phone"
            id="phone"
            placeholder="Phone number"
            onChange={(e) => props.setPhone(e.target.value)}
          />
        </div>
        <button type="submit" className={style.button}>
          <Icon name="search" className={style.button__icon} />
          <p className={style.button__text}>Search</p>
        </button>
      </form>
      {isOpen &&
        ReactDOM.createPortal(
          <p
            ref={(ref) => setPopperElement(ref)}
            style={styles.popper}
            {...attributes.popper}
            className={style.empty}
          >
            .......declarations not found
          </p>,
          document.body
        )}
    </>
  );
}

export { SearchOfNumber };
