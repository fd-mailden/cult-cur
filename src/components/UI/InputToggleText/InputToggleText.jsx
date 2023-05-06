import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import { DECLARATIONS_FIELDS } from "../../../settings/filterVariables";
import style from "./InputToggleText.module.scss";
import {Icon} from '../Icon/Icon'
function InputToggleTextComponent({ text, type = "text", setValue, name }) {
  const [thisText, setText] = useState(text);
  const [isDisabled, onDisabled] = useState(true);
  const handlerChange = (e) => setText(e.target.value);
  const handlerOnDisabled = (e) => {
    e.preventDefault();
    !isDisabled && setValue(name, thisText);
    onDisabled((prev) => !prev);
  };
  return (
    <form className={style.form} onSubmit={handlerOnDisabled}>
      <p className={style.form__field}>{DECLARATIONS_FIELDS[name]}</p>
      <div className={style.form__edit}>
        <input
          type={type}
          value={thisText}
          onChange={handlerChange}
          disabled={isDisabled}
          className={style.form__input}
        />
        {isDisabled && (
          <button
            type="button"
            onClick={() => onDisabled((prev) => !prev)}
            className={style.form__button}
          >
           <Icon name='edit'/>
          </button>
        )}
        {!isDisabled && (
          <button className={style.form__button} type="submit">
           <Icon name='save'/>
            
          </button>
        )}
      </div>
    </form>
  );
}

InputToggleTextComponent.propTypes = {
  type: PropTypes.string.isRequired,
};
export const InputToggleText = memo(InputToggleTextComponent);
