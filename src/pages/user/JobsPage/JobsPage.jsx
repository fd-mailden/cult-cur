import React, { useEffect, useState } from "react";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { Title } from "../../../components/UI/Title/Title";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
import style from "./JobsPage.module.scss";
import { jobs } from "../../../components/Jobs/jobs";
import { useNavigate } from "react-router-dom";
import { JOB_VACANCIES_ROUTES } from "../../../settings/routes";
import { getCarsRequest } from "../../../api/carRequests";
import { Loading } from "../../../components/UI/Loader/Loading";
function JobsPage() {
  const [isLoader, onLoader] = useState(true);
  const [vacancies, setVacancies] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getCarsRequest("vacancies").then((res) => {
      setVacancies(res);
      onLoader(false);
    }).catch(err=>{
      console.log('error')
    })
  }, []);

  return (
    <MainWrapper mode="white" paddingBottom={130}>
      {isLoader ? (
        <Loading />
      ) : (
        <section className={style.jobs}>
          <Breadcrumbs />
          <Title>Вакансии</Title>
          <div className={style["table-head"]}>
            <h4 className={style["table-head__name"]}>Позиция</h4>
            <h4 className={style["table-head__name"]}>Отдел</h4>
            <h4 className={style["table-head__name"]}>Офис</h4>
          </div>
          {vacancies.map((item, index) => (
            <div
              onClick={() =>
                navigate(JOB_VACANCIES_ROUTES.JOB_VACANCY.generate(item.id))
              }
              key={index}
              className={style["jobs-items"]}
            >
              <p className={style["jobs-items__item-first"]}>{item.title}</p>
              <p className={style["jobs-items__item"]}>{item.department}</p>
              <p className={style["jobs-items__item"]}>{item.city}</p>
            </div>
          ))}
        </section>
      )}
    </MainWrapper>
  );
}

export { JobsPage };
