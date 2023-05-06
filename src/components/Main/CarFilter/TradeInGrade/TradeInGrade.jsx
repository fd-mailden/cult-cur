import React, { useEffect, useState } from "react";
import style from "./TradeInGrade.module.scss";
import { Button } from "../../../UI/Button/Button";
import { ReactComponent as IconCopy } from "../../../../assets/images/icon-copy.svg";
import { ModalWindow } from "../../../UI/ModalWindow/ModalWindow";
import { ModalWindowForm } from "../../../ModalWindowForm/ModalWindowForm";
import { useOnActiveModalWindow } from "../../../../hooks/useOnActiveModalWindow";
import { ifEmpty } from "../../../../helpers/ifEmpty";
import { getCarsRequest } from "../../../../api/carRequests";
import { Loading } from "../../../UI/Loader/Loading";
import { postFirebaseRequest } from "../../../../api/carRequests";
import { useNavigate } from "react-router-dom";
import { CATALOG_ROUTES } from "../../../../settings/routes";
import { generateVIN } from "../../../../helpers/generateVIN";
import { useToastManager } from "../../../../hooks/useToastManager";
import { getDate } from "../../../../helpers/getDate";
function TradeInGrade({ setStepTwo, contentForm, requisite = {} }) {
  const { someToast } = useToastManager();
  const { isOpen, onShowWindow } = useOnActiveModalWindow();
  const [declaration, setDeclaration] = useState([]);
  const navigate = useNavigate();
  let text = document.getElementById("copyInput");
  function copyNumber() {
    text.select();
    document.execCommand("copy");
    alert("Copied the text: " + text.value);
  }
  useEffect(() => {
    getCarsRequest("trade-in_declaration").then((res) => {
      if (res) {
        setDeclaration(res);
      }
    });
  }, []);

  function submitDeclaration(contact) {
    if (contentForm) {
      const date = getDate();
      contact.date = date;
      postFirebaseRequest("trade-in_declaration", contact)
        .then((res) => {
          someToast("Thanks", "success");
          navigate(CATALOG_ROUTES.CATALOG.path);
          onShowWindow();
        })
        .catch((err) => someToast("try again later", "error"));
    } else {
      someToast("try again later", "error");
    }
  }
  const carInfo = [
    { params: "Марка", info: ifEmpty(contentForm?.brand) },
    { params: "Модель", info: ifEmpty(contentForm?.model) },
    { params: "Год выпуска", info: ifEmpty(contentForm?.year) },
    { params: "Поколение", info: ifEmpty(contentForm?.generation) },
    { params: "Двигатель", info: ifEmpty(contentForm?.engine) },
    { params: "Модификация", info: ifEmpty(contentForm?.modification) },
    { params: "Тип кузова", info: ifEmpty(contentForm?.category) },
    { params: "Привод", info: ifEmpty(contentForm?.type_of_drive) },
    { params: "КПП", info: ifEmpty(contentForm?.KPP) },
  ];
  const grade = [
    {
      params: "При сдаче в трейд ин",
      info: contentForm ? "4 800 " + process.env.REACT_APP_CURRENCY : "---",
      copy: false,
    },
    {
      params: "При самостоятельной продаже",
      info: contentForm ? "6 000 " + process.env.REACT_APP_CURRENCY : "---",
      copy: false,
    },
    {
      params: "Ваш номер расчета",
      info: contentForm ? 4389620 + declaration.length : "---",
      copy: true,
    },
  ];

  const declarationData = {
    VIN: generateVIN(),
    ...contentForm,
    calculation_number: 4389620 + declaration.length,
    id: 4389620 + declaration.length,
    trade_in_price: 4800,
    your_price: 6000,
  };
  return declaration ? (
    <div className={style.grade}>
      <div className={style.grade__inner}>
        <div className={style.grade__left}>
          <p className={style.grade__title}>Ваш автомобиль</p>
          <ul className={style["garde-list"]}>
            {carInfo.map((item, index) => (
              <li className={style["garde-list__item"]} key={index}>
                <p className={style["garde-list__name"]}>{item.params}</p>
                <p className={style["garde-list__info"]}>{item.info}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={style.grade__right}>
          {grade.map((item, index) => (
            <div key={index} className={style["grade-item"]}>
              <p className={style["grade-item__name"]}>{item.params}</p>
              {!item.copy ? (
                <p className={style["grade-item__info"]}>{item.info}</p>
              ) : (
                <div className={style["grade-item__info"]}>
                  <input
                    type="text"
                    disabled={true}
                    id="copyInput"
                    value={item.info}
                    className={style["grade-item__input"]}
                  />
                  <button
                    className={style["grade-item__button"]}
                    onClick={() => copyNumber()}
                  >
                    <IconCopy />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className={style.grade__buttons}>
        <Button mode="button--dark" onClick={() => setStepTwo(false)}>
          Вернуться к подбору
        </Button>
        <Button onClick={onShowWindow} disabled={!contentForm}>
          Оставить заявку дилеру
        </Button>
      </div>
      <ModalWindow isOpen={isOpen} onShow={onShowWindow}>
        <ModalWindowForm
          submitForm={submitDeclaration}
          subData={declarationData}
        />
      </ModalWindow>
    </div>
  ) : (
    <Loading />
  );
}

export { TradeInGrade };
