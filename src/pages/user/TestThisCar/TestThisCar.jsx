import React from "react";
import style from "./TestThisCar.module.scss";
import bgTop from "../../../assets/images/background/test-drive-bg-top.png";
import bgBottom from "../../../assets/images/background/test-drive-bg-bottom.png";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { TestDriveBanner } from "../../../components/TestDrive/TestDriveBanner/TestDriveBanner";
import { TestDriveMap } from "../../../components/TestDrive/TestDriveMap/TestDriveMap";
import { TestDriveContext } from "../../../context/testDriveContext";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
import { Loading } from "../../../components/UI/Loader/Loading";
import { TestThisCarForm } from "../../../components/TestThisCar/TestThisCarForm/TestThisCarForm";
import { useTestThisCar } from "./useTestThisCar";
function TestThisCar() {
  const {
    models: { car, loading, marker },
  } = useTestThisCar();
  return (
    <MainWrapper>
      <img src={bgTop} alt="" className={style["background-top"]} />
      <img src={bgBottom} alt="" className={style["background-bottom"]} />
      <section className={style["test-drive"]}>
        <Breadcrumbs mode="breadcrumbs--white" />
        {loading ? (
          <Loading height="50" />
        ) : (
          <article className={style["test-drive__info"]}>
            <TestThisCarForm car={car} />
            <TestDriveContext.Provider value={{ mapMarker: marker }}>
              <TestDriveMap />
            </TestDriveContext.Provider>
          </article>
        )}
      </section>
      <TestDriveBanner />
    </MainWrapper>
  );
}

export { TestThisCar };
