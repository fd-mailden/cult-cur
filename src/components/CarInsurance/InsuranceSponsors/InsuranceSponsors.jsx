import React from "react";
import style from "./InsuranceSponsors.module.scss";
import { sponsors } from "./sponsors";
import classNames from "classnames";
function InsuranceSponsors() {
  return (
    <section className={style.sponsors}>
      <article className={classNames(style.sponsors__inner)}>
        {sponsors.map((img, index) => (
            <img key={index} src={img} alt="sponsor" />
        ))}
      </article>
    </section>
  );
}

export { InsuranceSponsors };
