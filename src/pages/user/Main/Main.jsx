import React from "react";
import style from "./Main.module.scss";
import { ReactComponent as ToImg } from "../../../assets/images/background/top-bg.svg";
import { ReactComponent as CenterImg } from "../../../assets/images/background/center-bg.svg";
import { Choice } from "../../../components/Main/Choic/Choice/Choice";
import { Sale } from "../../../components/Main/Sale/Sace/Sale";
import { Statements } from "../../../components/Main/Statements/Statements/Statements";
import { ThreeMethod } from "../../../components/Main/ThreeMethod/ThreeMethod";
import { About } from "../../../components/Main/About/About/About";
import { FormContactUs } from "../../../components/Main/FormContactUs/FormContactUs";
import {useHashFragment} from '../../../hooks/useHashFragment'
function Main() {
  useHashFragment();
  return (
    <main className={style.main}>
      <ToImg className={style["top-img"]} />
      <CenterImg className={style["center-img"]} />
      <Choice />
      <Sale />
      <Statements />
      <ThreeMethod />
      <About />
      <FormContactUs />
    </main>
  );
}

export { Main };
