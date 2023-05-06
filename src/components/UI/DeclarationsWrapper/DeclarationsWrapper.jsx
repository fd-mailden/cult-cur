import React from "react";
import style from './DeclarationsWrapper.module.scss'
function DeclarationsWrapper({ children }) {
  return <section  className={style["declaration-wrapper"]}>{children}</section>;
}

export { DeclarationsWrapper };
