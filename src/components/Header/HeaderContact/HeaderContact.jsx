import React from "react";
import style from "./HeaderContact.module.scss";
import { ContactItem } from "../ContactItem/ContactItem";
import classNames from "classnames";
import { Icon } from "../../UI/Icon/Icon";
import { useHeaderContact } from "./useHeaderContact";
import { Loading } from "../../UI/Loader/Loading";
function HeaderContact() {
  const { isOpen, setOpen, ref, isLoading, contacts } = useHeaderContact();

  return (
    <div
      ref={ref}
      className={classNames(style.contact, isOpen && style["contact--active"])}
    >
      <button
        type="button"
        className={style.contact__city}
        onClick={() => setOpen(!isOpen)}
      >
        {process.env.REACT_APP_CITY}
        <Icon
          name="arrow"
          className={classNames(style.arrow, isOpen && style["arrow--active"])}
        />
      </button>
      <div className={classNames(style["contact-list"], isOpen && style.open)}>
        {isLoading ? (
          <Loading width="100" height="10" />
        ) : (
          <>
            <h4 className={style["contact-list__title"]}>
              Искать по всем автосалонам
            </h4>
            {contacts.map((contact, index) => (
              <ContactItem key={index} contact={contact} />
            ))}
          </>
        )}
      </div>
      <a
        href="tel:8 (800)-551-84-21"
        className={classNames(
          style.contact__phone,
          isOpen && style["md-active"]
        )}
      >
        8 (800)-551-84-21
      </a>
    </div>
  );
}

export { HeaderContact };
