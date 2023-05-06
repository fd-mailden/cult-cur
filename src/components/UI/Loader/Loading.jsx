import React, { useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Puff } from "react-loader-spinner";
import style from "./Loading.module.scss";

function Loading({ height = "100" , width = "2000"}) {
  return (
    <div className={style.loader} style={{ height: `${height}vh`, maxWidth: `${width}px` }}>
      <Puff type="Puff" color="#FF5A5E" height={100} width={100} />
    </div>
  );
}

export { Loading };
