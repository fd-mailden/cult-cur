import React, { useState, useRef } from "react";
import { Icon } from "../../../UI/Icon/Icon";
import style from "./ImagesList.module.scss";
import classNames from "classnames";
import { ImageCover } from "../../../UI/ImageCover/ImageCover";

function ImagesList({
  handelChange,
  handelDelete,
  handelAddImage,
  imagesList,
}) {

  return (
    <div className={style["list-wrapper"]}>
      <div className={style["image-list"]}>
        {imagesList.map((itemImg, index) => (
          <div key={index} className={style["list-item"]}>
            <ImageCover srcIMG={itemImg} style={style["list-item__image"]}  />
            <input
              className={style["list-item__input"]}
              type="text"
              value={itemImg}
              onChange={(e) => handelChange(e.target.value, index)}
            />
            <button
              onClick={() => handelDelete(index)}
              className={classNames(
                style["btn-plus"],
                style["btn-plus--close"]
              )}
            >
              <Icon name="close" />
            </button>
          </div>
        ))}
      </div>

      <button onClick={handelAddImage} className={style["btn-plus"]}>
        <Icon name="plus" />
      </button>
    </div>
  );
}

export { ImagesList };
