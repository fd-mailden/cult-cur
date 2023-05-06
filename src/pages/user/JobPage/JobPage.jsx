import React, { useEffect, useState } from "react";
import style from "./JobPage.module.scss";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { Loading } from "../../../components/UI/Loader/Loading";
import { Title } from "../../../components/UI/Title/Title";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
import { JobCard } from "../../../components/Jobs/JobCard/JobCard";
import { JobInfo } from "../../../components/Jobs/JobInfo/JobInfo";
import { getFields } from "../../../api/carRequests";
function JobPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [thisJob, setThisJob] = useState({});
  useEffect(() => {
    let pathname = window.location.pathname;
    let withoutJobs = pathname.split("/");
    getFields("vacancies", "id", withoutJobs[2])
      .then((res) => {
        setThisJob(res[0]);
        setIsLoading(false);
      })
      .catch((err) => console.log("err"));
  }, []);
  return (
    <MainWrapper mode="white" paddingBottom={100}>
      {isLoading ? (
        <Loading />
      ) : (
        <section className={style.job}>
          <Breadcrumbs />
          <Title mode="title--black">{thisJob.title} </Title>
          <article className={style.job__content}>
            <JobCard job={thisJob} />
            <JobInfo job={thisJob} />
          </article>
        </section>
      )}
    </MainWrapper>
  );
}

export { JobPage };
