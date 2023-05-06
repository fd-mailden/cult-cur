import React from "react";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { AdvertisingCarCard } from "../../../components/CarPage/AdvertisingCarCard/AdvertisingCarCard";
import { FunctionsCar } from "../../../components/CarPage/FunctionsCar/FunctionsCar";
import { CarSlider } from "../../../components/Sliders/CarSlider/CarSlider";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
import style from "./CarPage.module.scss";
import { CardInfoCar } from "../../../components/CarPage/CardInfoCar/CardInfoCar";
import { DescriptionCar } from "../../../components/CarPage/DescriptionCar/DescriptionCar";
import { AdvertisingCar } from "../../../components/Advertising/AdvertisingCar/AdvertisingCar";
import { WindowInfo } from "../../../components/CarPage/WindowInfo/WindowInfo";
import { ModalWindow } from "../../../components/UI/ModalWindow/ModalWindow";
import { FeedbackWindow } from "../../../components/CarPage/FeedbackWindow/FeedbackWindow";
import { CarServices } from "../../../components/CarPage/CarServices/CarServices";
import { SimilarCar } from "../../../components/CarPage/SimilarCar/SimilarCar";
import { CarShowrooms } from "../../../components/CarPage/CarShowrooms/CarShowrooms/CarShowrooms";
import { CardSlider } from "../../../components/Sliders/CardSlider/CardSlider";
import { Loading } from "../../../components/UI/Loader/Loading";
import { useCarPage } from "./useCarPage";
import { BiddingForm } from "../../../components/Header/BiddingForm/BiddingForm";
function CarPage() {
  const {
    models: { car, isOpen, isFeedback, loading, isBIdding },
    commands: { onShowWindow, setFeedback, onBidding },
  } = useCarPage();

  return (
    <MainWrapper mode="white">
      {loading ? (
        <Loading />
      ) : (
        <>
          <section className={style.car}>
            <Breadcrumbs />
            <div className={style["slider-wrapper"]}>
              <CardSlider item={car} />
            </div>
            <AdvertisingCarCard car={car} />
            <FunctionsCar car={car} />
            <article className={style.car__info}>
              <CarSlider sliderItems={car.images} />
              <CardInfoCar setModalInfo={onShowWindow} info={car} />
            </article>
            <article className={style.car__info}>
              <DescriptionCar />
              <AdvertisingCar />
            </article>
          </section>
        </>
      )}
      <CarServices />
      <SimilarCar category={car && car.category} />
      <CarShowrooms />

      <ModalWindow isOpen={isOpen} onShow={onShowWindow}>
        {!isFeedback && !isBIdding && (
          <WindowInfo
            setFeedback={setFeedback}
            onBidding={onBidding}
            item={car}
          />
        )}
        {isFeedback && <FeedbackWindow />}
        {isBIdding && <BiddingForm car = {car} onClose = {onShowWindow}/>}
        
      </ModalWindow>
    </MainWrapper>
  );
}

export { CarPage };
