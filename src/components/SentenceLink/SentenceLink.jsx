import React from "react";
import style from "./SentenceLink.module.scss";
import classNames from "classnames";
import { SECURITY_POLICY_ROUTES } from "../../settings/routes";
import { Link } from "react-router-dom";
function SentenceLink({ mode = "" }) {
  return (
    <p
      className={classNames(
        style["sentence-link"],
        style["sentence-link--" + mode]
      )}
    >
      Обработка сведений о Пользователях осуществляется в соответствии с{" "}
      <Link
        to={SECURITY_POLICY_ROUTES.SECURITY_POLICY.path}
        className={classNames(
          style["sentence-link__link"],
          style["sentence-link__link--" + mode]
        )}
      >
        Политикой в области обработки и обеспечения безопасности персональных
        данных.
      </Link>
    </p>
  );
}

export { SentenceLink };
