import React from "react";
import style from "./ContactItem.module.scss";
import PropTypes from "prop-types";
import { Icon } from "../../UI/Icon/Icon";

function ContactItem({ contact }) {
  return (
    <div className={style["contact-item"]}>
      <div className={style["contact-item__info"]}>
        <h4 className={style["contact-item__name"]}>
          {contact.name}
          <Icon name="check_mark" className={style["contact-icon"]} />
        </h4>
        <p className={style["contact-item__address"]}>{contact.address}</p>
        <a
          href={"tel:" + contact.phone}
          className={style["contact-item__phone"]}
        >
          {contact.phone}
        </a>
      </div>
      <div className={style["contact-item__grade"]}>
        <Icon name="star" />
        <p className={style["contact-item__current"]}>{contact.num}</p>
        <p className={style["contact-item__max"]}>/ 5.0</p>
      </div>
    </div>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object,
};
export { ContactItem };
