import React, { memo } from "react";
import { Input } from "../../UI/Input/Input";
import { Subtitle } from "../../UI/Subtitle/Subtitle";
import { SentenceLink } from "../../SentenceLink/SentenceLink";
import style from "./CarInsuranceDrivers.module.scss";
import { DriversSection } from "../DriversSection/DriversSection";
import PropTypes from "prop-types";

function CarInsuranceDriversComp({ setData, data, register, errors }) {
  return (
    <article className={style.drivers}>
      <Subtitle top="0" bottom="0">
        Данные по водителям
      </Subtitle>
      <DriversSection setDriver={setData} formData={data} />
      <Subtitle top="16" bottom="16">
        Контактные данные
      </Subtitle>
      <div className={style.drivers__contact}>
        <Input
          {...register("user_name")}
          id="user_name"
          isValid={!errors.user_name}
          mode="input--width216"
          type="text"
          placeholder="Имя"
        />
        <Input
          {...register("phone")}
          id="phone"
          isValid={!errors.phone}
          mode="input--width216"
          placeholder="Телефон"
        />
        <Input
          {...register("user_email")}
          id="user_email"
          isValid={!errors.user_email}
          mode="input--width216-last"
          type="email"
          placeholder="Email"
        />
      </div>
      <SentenceLink mode="white" />
    </article>
  );
}

CarInsuranceDriversComp.propTypes = {
  setData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
};

export const CarInsuranceDrivers = memo(CarInsuranceDriversComp);
