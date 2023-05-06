import React, { useState, useEffect } from "react";
import style from "./TestDrive.module.scss";
import bgTop from "../../../assets/images/background/test-drive-bg-top.png";
import bgBottom from "../../../assets/images/background/test-drive-bg-bottom.png";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { TestDriveForm } from "../../../components/TestDrive/TestDriveForm/TestDriveForm";
import { TestDriveBanner } from "../../../components/TestDrive/TestDriveBanner/TestDriveBanner";
import { TestDriveMap } from "../../../components/TestDrive/TestDriveMap/TestDriveMap";
import { TestDriveContext } from "../../../context/testDriveContext";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
import { Loading } from "../../../components/UI/Loader/Loading";
import { getCarsRequest } from "../../../api/carRequests";
function TestDrive() {
  const [autoSalon, setAutoSalon] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [salons, setSalons] = useState(null);
  const [mapMarker, setMapMarker] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getCarsRequest("contact").then((res) => {
      if (res.length) {
        setSalons(res);
        setIsLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    if (!salons) {
      return null;
    }
    let value = salons.find((e) => e.name == autoSalon);
    if (value) {
      setMapMarker(value);
    }
  }, [autoSalon]);

  return (
    <TestDriveContext.Provider
      value={{ setAutoSalon, autoSalon, mapMarker, allSalons: salons }}
    >
      <MainWrapper>
        <img src={bgTop} alt="" className={style["background-top"]} />
        <img src={bgBottom} alt="" className={style["background-bottom"]} />
        <section className={style["test-drive"]}>
          <Breadcrumbs mode="breadcrumbs--white" />
          {isLoading ? (
            <Loading height="50" />
          ) : (
            <article className={style["test-drive__info"]}>
              <TestDriveForm />
              <TestDriveMap />
            </article>
          )}
        </section>
        <TestDriveBanner />
      </MainWrapper>
    </TestDriveContext.Provider>
  );
}

export { TestDrive };
