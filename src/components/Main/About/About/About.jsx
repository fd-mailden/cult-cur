import React from "react";
import { AboutAdvantage } from "../AboutAdvantage/AboutAdvantage";
import { AboutInfo } from "../AboutInfo/AboutInfo";
import style from "./About.module.scss";

function About() {
  return (
    <section className={style.about} id='about'>
      <div className={style.about__inner}>
        <AboutInfo />
        <AboutAdvantage />
      </div>
    </section>
  );
}

export { About };
