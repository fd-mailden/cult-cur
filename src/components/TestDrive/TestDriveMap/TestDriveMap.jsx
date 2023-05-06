import React, { useState } from "react";
import { useEffect } from "react";
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
  InfoWindow,
} from "react-google-maps";
import { useTestDriveContext } from "../../../context/testDriveContext";
import { MarkerCard } from "../MarkerCard/MarkerCard";
import style from "./TestDriveMap.module.scss";

function Map() {
  const { mapMarker } = useTestDriveContext();
  return (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{
        lat: mapMarker ? mapMarker.lat : "47.13829584868852",
        lng: mapMarker ? mapMarker.lng : "39.714816604845296",
      }}
    >
      <Marker
        position={{
          lat: mapMarker ? mapMarker.lat : "47.13829584868852",
          lng: mapMarker ? mapMarker.lng : "39.714816604845296",
        }}
        title={mapMarker ? mapMarker.address : "--"}
      ></Marker>
    </GoogleMap>
  );
}

function TestDriveMap() {
  const [newMap, setNewMap] = useState(
    "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
  );
  const { mapMarker } = useTestDriveContext();
  const WrappedMap = withScriptjs(withGoogleMap(Map));

  useEffect(() => {
    setNewMap(
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    );
  }, [mapMarker]);

  return (
    <div className={style["map-wrapper"]}>
      <WrappedMap
        googleMapURL={newMap}
        loadingElement={<div className={style.map} />}
        containerElement={
          <div className={style.map} style={{ marginTop: `40px` }} />
        }
        mapElement={<div className={style.map} />}
      />
      <MarkerCard infoMarker={mapMarker} />
    </div>
  );
}

export { TestDriveMap };
