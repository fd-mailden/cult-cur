import React from "react";
import { LineList } from "../../UI/LineList/LineList";
import style from "./JobInfo.module.scss";
function JobInfo({ job }) {
  return (
    <div className={style.info}>
      <h5 className={style.info__title}>Описание</h5>
      <p className={style.info__text}>{job.descriptions}</p>
      <h5 className={style.info__title}>Требования</h5>
      <LineList listTitle="" list={job.requirements} />
      <h5 className={style.info__title}>Условия</h5>
      <p className={style.info__text}>{job.terms}</p>
    </div>
  );
}

export { JobInfo };
