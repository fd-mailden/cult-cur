import React from "react";
import style from "./ModalWindow.module.scss";
import classNames from "classnames";
import { ReactComponent as IconClose } from "../../../assets/images/icon-close.svg";
import ReactDom from "react-dom";
function ModalWindow({ onShow, isOpen, children }) {
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <div className={classNames(style["modal"], style["active"])}>
      <div
        className={classNames(style["modal_content"], style["active"])}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button
          onClick={onShow}
          className={style["close-btn"]}
        >
          <IconClose />
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export { ModalWindow };
