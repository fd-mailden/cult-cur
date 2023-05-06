import React, { useState, useEffect } from "react";
import { Breadcrumbs } from "../../../components/Breadcrumbs/Breadcrumbs";
import { Title } from "../../../components/UI/Title/Title";
import { MainWrapper } from "../../../components/UI/MainWrapper/MainWrapper";
import style from "./ContactPage.module.scss";
import { ContactContext } from "../../../context/contactContext";
import { ContactAddress } from "../../../components/Contact/ContactAddress/ContactAddress";
import ContactMap from "../../../components/Contact/ContactMap/ContactMap";
import { Loading } from "../../../components/UI/Loader/Loading";
import { getCarsRequest } from "../../../api/carRequests";
function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [thisContacts, setThisContacts] = useState(null);
  const [contactItem, setContactItem] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    getCarsRequest("contact").then((res) => {
      if (res.length) {
        setThisContacts(res);
        setIsLoading(false);
      }
    });
  }, []);

  function onActiveMarker(id) {
    let newContacts = thisContacts.map((contact) => {
      if (contact.id == id) {
        contact.active = true;
        return contact;
      } else {
        contact.active = false;
        return contact;
      }
    });
    setThisContacts(newContacts);
  }
  useEffect(() => {
    if (thisContacts) {
      let contactValue = thisContacts.find((item) => item.active == true);
      setContactItem(contactValue);
    }
  }, [thisContacts]);

  return (
    <ContactContext.Provider
      value={{ contact: thisContacts, onActiveMarker, contactItem }}
    >
      <MainWrapper mode="gray">
        {!thisContacts && isLoading ? (
          <Loading />
        ) : (
          <>
            <section className={style.contact__map}>
              <Breadcrumbs />
              <Title mode="title--black">Автосалоны Культ авто</Title>
              <ContactMap />
            </section>
            <ContactAddress />
          </>
        )}
      </MainWrapper>
    </ContactContext.Provider>
  );
}

export { ContactPage };
