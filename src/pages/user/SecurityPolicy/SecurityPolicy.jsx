import React from "react";
import { DeclarationsWrapper } from "../../../components/UI/DeclarationsWrapper/DeclarationsWrapper";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
import { Title } from "../../../components/UI/Title/Title";

function SecurityPolicy() {
  return (
    <MainWrapper mode="white">
      <DeclarationsWrapper>
        <Title mode="title--black">
          Обработка сведений о Пользователях осуществляется в соответствии с
          Политикой в области обработки и обеспечения безопасности персональных
          данных.
        </Title>
        <Title mode="title--black">
          Обработка сведений о Пользователях осуществляется в соответствии с
          Политикой в области обработки и обеспечения безопасности персональных
          данных.
        </Title>
      </DeclarationsWrapper>
    </MainWrapper>
  );
}

export { SecurityPolicy };
