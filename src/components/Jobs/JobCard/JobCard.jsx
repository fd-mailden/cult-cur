import React from "react";
import { Button } from "../../UI/Button/Button";
import style from "./JobCard.module.scss";
function JobCard({ job }) {
  return (
    <div className={style.card}>
      <h4 className={style.card__title}>{job.title}</h4>
      <p className={style.card__info}>{job.department + "," + job.city}</p>
      <Button>Отправить заявку</Button>
    </div>
  );
}

export { JobCard };
