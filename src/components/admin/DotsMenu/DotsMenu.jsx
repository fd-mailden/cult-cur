import React from "react";
import ReactDOM from "react-dom";
import style from "./DotsMenu.module.scss";
import { Icon } from "../../UI/Icon/Icon";
import { useManagePopperState } from "../../../hooks/useManagePopperState";
import classNames from "classnames";
import {EventBus, DECLARATION_WINDOW} from '../../../utils/event-bus'
function DotsMenu({ decl, onDelete, onApproved, isView  = true}) {
  const {
    models: { isOpen, styles, attributes },
    commands: { setPopperElement, toggleMenu, setReferenceElement },
  } = useManagePopperState({ placement: "right-start" });

  const onApprovedHandler = (isApprove) => {
    if (decl.length) {
      decl.map((d) => onApproved(d, isApprove));
    } else {
      onApproved(decl, isApprove);
    }
  };
  const onDeleHandler = () => {
    if (decl.length) {
      decl.map((d) => onDelete(d));
    } else {
      onDelete(decl);
    }
  };
  const onOpenWindowHandler = () => {
    EventBus.emit(DECLARATION_WINDOW.open, decl);
  };
  return (
    <>
      <button
        ref={(ref) => setReferenceElement(ref)}
        className={classNames(style["menu-button"] , !isView && style.invisible)}
        type="button"
        disabled= {!isView}
        onClick={() => toggleMenu()}
      >
        <Icon name="vertical_dits" />
      </button>
      {isOpen &&
        ReactDOM.createPortal(
          <ul
            ref={(ref) => setPopperElement(ref)}
            style={styles.popper}
            {...attributes.popper}
            className={style["finc-list"]}
          >
            {!decl.length && (
              <li className={style["finc-list__item"]} onClick={onOpenWindowHandler}>Open in new tab</li>
            )}
            <li
              className={style["finc-list__item"]}
              onClick={() => onApprovedHandler(true)}
            >
              Approve
            </li>
            <li
              className={style["finc-list__item"]}
              onClick={() => onApprovedHandler(false)}
            >
              Reject
            </li>
            <li
              className={style["finc-list__item"]}
              onClick={() => onDeleHandler()}
            >
              Delete
            </li>
          </ul>,
          document.body
        )}
    </>
  );
}

export { DotsMenu };
