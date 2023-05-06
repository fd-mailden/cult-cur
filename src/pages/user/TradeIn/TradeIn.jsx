import React, { useEffect, useState } from "react";
import style from "./TradeIn.module.scss";
import bgTop from "../../../assets/images/background/rtg-top-trade.png";
import bgBottom from "../../../assets/images/background/rtg-bottom-trade.png";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { Step } from "../../../components/TradeIn/Step/Step";
import { Button } from "../../../components/UI/Button/Button";
import { FormCarInfo } from "../../../components/TradeIn/FormCarInfo/FormCarInfo";
import { Select } from "../../../components/UI/Select/Select";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
import { city } from "../../../components/TradeIn/characteristics";
import { AdditionalInfo } from "../../../components/TradeIn/AdditionalInfo/AdditionalInfo";
import { LazyImage } from "../../../components/UI/LazyImage/LazyImage";
import { useSelector } from "react-redux";
import { selectLoading } from "../../../store/cars/carSelectors";
import { Loading } from "../../../components/UI/Loader/Loading";
import { characteristicRequest } from "../../../settings/carCharacteristics";
import { ModalWindow } from "../../../components/UI/ModalWindow/ModalWindow";
import { TradeInGrade } from "../../../components/Main/CarFilter/TradeInGrade/TradeInGrade";
import { useNavigate } from "react-router-dom";
import { MAIN_ROUTES } from "../../../settings/routes";
function TradeIn() {
  const [tradeInForm, setTradeInForm] = useState(characteristicRequest);
  const [isInvalid, onInvalid] = useState(false);
  const [invalidFields, setInvalidFields] = useState(characteristicRequest);
  const load = useSelector(selectLoading);
  const navigate = useNavigate();
  useEffect(() => {
    const areFalse = Object.values(invalidFields).every(
      (value) => value === false
    );
    if (areFalse) {
      onInvalid(true);
    }
  }, [invalidFields]);

  function addToForm(field, value) {
    let formData = { ...tradeInForm };
    formData[field] = value;
    setTradeInForm(formData);
  }
  function findEmpty() {
    let fields = { ...invalidFields };
    for (var item in tradeInForm) {
      if (!tradeInForm[item] || tradeInForm[item] === "") {
        fields[item] = true;
      } else {
        fields[item] = false;
      }
      setInvalidFields(fields);
    }
  }
  return (
    <MainWrapper paddingBottom={23}>
      <LazyImage
        imageSrc={bgTop}
        imageAlt="background Top"
        className={style["bg-top"]}
      />
      <LazyImage
        imageSrc={bgBottom}
        imageAlt="background Bottom"
        className={style["bg-bottom"]}
      />
      <>
        {load ? (
          <Loading />
        ) : (
          <section className={style.trade__inner}>
            <Breadcrumbs mode="breadcrumbs--white" />
            <h1 className={style.trade__title}>Трейд-ин оценка</h1>
            <Step amount={3} descriptions={["Данные о машине"]} />
            <h4 className={style.trade__subtitle}>Данные вашего авто</h4>
            <FormCarInfo
              setTradeInForm={setTradeInForm}
              tradeInForm={tradeInForm}
              invalidFields={invalidFields}
            />
            <h4 className={style.trade__subtitle}>Выбор салона</h4>
            <Select
              selectData={city}
              mode="--max-width-484"
              setDataField={addToForm}
              field={city.field}
              isEmpty={invalidFields[city.field]}
            />
            <AdditionalInfo
              addToForm={addToForm}
              invalidFields={invalidFields}
            />
            <div className={style.buttons}>
              <Button
                mode="button--dark"
                onClick={() => navigate(MAIN_ROUTES.MAIN.path + "#buy")}
              >
                Я вспомнил VIN
              </Button>
              <Button onClick={() => findEmpty()}>Получить предложениие</Button>
            </div>
          </section>
        )}
      </>
      <ModalWindow onShow={onInvalid} isOpen={isInvalid}>
        <TradeInGrade setStepTwo={onInvalid} contentForm={tradeInForm} />
      </ModalWindow>
    </MainWrapper>
  );
}

export { TradeIn };
