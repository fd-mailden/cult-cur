import React from "react";
import PropTypes from "prop-types";
import style from "./TradeInWindow.module.scss";
import { InputToggleText } from "../../../UI/InputToggleText/InputToggleText";
import classNames from "classnames";
import { useTradeInWindow } from "./useTradeInWindow";
import { ImagesList } from "../ImagesList/ImagesList";
import { useManagerFunctions } from "../../useManagerFunctions";
function TradeInWindow({ declaration, collectionName }) {
  const {
    models: {thisDeclaration, declarationList, imagesList },
    commands: {
      declarationChangeHandler,
      onChangeImg,
      onDeleteImg,
      onAddImage,
    },
  } = useTradeInWindow(declaration);
  const {
    commands: { onApproved, deleteDeclarationHandler },
  } = useManagerFunctions(collectionName);

  return (
    <section className={style.window}>
      <h3 className={style.status}>
        {declaration.approved ? "Approved" : "Denied"}
        <p>***</p>
      </h3>
      <article className={style.window__fields}>
        {declarationList.length &&
          declarationList.map((item, index) => (
            <InputToggleText
              key={index}
              type={Number.isInteger(item.value) ? "number" : "text"}
              text={item.value}
              name={item.name}
              setValue={declarationChangeHandler}
            />
          ))}
      </article>
      <ImagesList
        imagesList={imagesList}
        handelChange={onChangeImg}
        handelDelete={onDeleteImg}
        handelAddImage={onAddImage}
      />
      <article className={style.buttons}>
        <button
          className={classNames(style.btn, style["btn--approved"])}
          onClick={() => onApproved({ ...thisDeclaration,  images: imagesList }, true)}
        >
          Approved
        </button>
        <button
          className={classNames(style.btn, style["btn--reject"])}
          onClick={() => onApproved({ ...thisDeclaration, images: imagesList }, false)}
        >
          Reject
        </button>
        <button
          className={classNames(style.btn, style["btn--delete"])}
          onClick={() => deleteDeclarationHandler(thisDeclaration)}
        >
          Delete
        </button>
      </article>
    </section>
  );
}

TradeInWindow.propTypes = {
  declaration: PropTypes.object.isRequired,
  collectionName: PropTypes.string.isRequired,
};

export { TradeInWindow };
