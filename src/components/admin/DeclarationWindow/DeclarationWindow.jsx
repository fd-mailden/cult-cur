import React from "react";
import style from "./DeclarationWindow.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import ReactDom from "react-dom";
import { Icon } from "../../UI/Icon/Icon";

function DeclarationWindow({ onShow, isOpen, children }) {
  if (!isOpen) return null;
  return ReactDom.createPortal(
    <div className={classNames(style["modal"], style["active"])}>
      <div
        className={classNames(style["modal_content"], style["active"])}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <button onClick={onShow} className={style["close-btn"]}>
          <Icon name ='close'/>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
DeclarationWindow.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onShow: PropTypes.func.isRequired,
};

export { DeclarationWindow };
