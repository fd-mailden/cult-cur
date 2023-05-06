import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from "react-google-maps";
import style from "./ContactMap.module.scss";
import { useContactContext } from "../../../context/contactContext";
import { ContactCard } from "../ContactCard/ContactCard";
function Map() {
  const { contactItem } = useContactContext();

  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: contactItem.lat, lng: contactItem.lng }}
    >
      <Marker
        position={{ lat: contactItem.lat, lng: contactItem.lng }}
        title={contactItem.address}
      />
    </GoogleMap>
  );
}

function ContactMap() {
  const [newMap, setNewMap] = useState(
    "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  );
  const { contactItem } = useContactContext();

  const WrappedMap = withScriptjs(withGoogleMap(Map));

  useEffect(() => {
    setNewMap(
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    );
  }, [contactItem]);

  return (
    <div className={style["map-wrapper"]}>

      <WrappedMap
        googleMapURL={newMap}
        loadingElement={<div className={style.map} />}
        containerElement={<div className={style.map} />}
        mapElement={<div className={style.map} />}
      />
      <ContactCard infoMarker ={contactItem} />
    </div>
  );
}

export default ContactMap;
