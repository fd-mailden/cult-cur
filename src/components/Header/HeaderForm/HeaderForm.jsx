import React, { useContext } from "react";
import { IconButton } from "../../UI/IconButton/IconButton";
import style from "./HeaderForm.module.scss";
import PropTypes from "prop-types";
import { Icon } from "../../UI/Icon/Icon";
import { useHeaderContext } from "../../../context/headerContext";

function HeaderForm() {
  const { setOpenMenu, isOpenMenu, setSearchQuery, searchQuery, handelSubmit } =
    useHeaderContext();

  return (
    <form className={style.form} onSubmit={handelSubmit}>
      <input
        type="text"
        className={style.form__input}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Поиск"
        onClick={() => setOpenMenu(!isOpenMenu)}
      />
      <div className={style.brands} onClick={() => setOpenMenu(!isOpenMenu)}>
        <p className={style.brands__text}>Все бренды</p>
        <Icon name="vertical_arrows" className={style.brands__icon} />
      </div>
      <IconButton type="submit" btn="search" disabled={!searchQuery.length} />
    </form>
  );
}
HeaderForm.propTypes = {
  setOpenMenu: PropTypes.func,
  isOpenMenu: PropTypes.bool,
};
export { HeaderForm };
