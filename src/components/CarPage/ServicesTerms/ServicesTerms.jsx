import React from "react";
import style from "./ServicesTerms.module.scss";
import { Grid } from "../../UI/Grid/Grid";
import { terms } from "../terms";
function ServicesTerms() {
  return (
    <article className={style.terms}>
      <h2 className={style.terms__title}>Другие услуги</h2>
      <Grid>
        {terms.map((item, index) => (
          <div key={index} className="col-sm-12  col-xl-6">
            <div  className={style["terms-card"]}>
              <img
                src={item.icon}
                className={style["terms-card__icon"]}
                alt="icon"
              />
              <h4 className={style["terms-card__title"]}>{item.title}</h4>
              <p className={style["terms-card__text"]}>{item.description}</p>
            </div>
          </div>
        ))}
      </Grid>
    </article>
  );
}

export { ServicesTerms };
