import React, { memo } from "react";
import style from "./List.module.scss";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ListComponent({ list }) {
  const { title, items } = list;
  return (
    <ul className={style.list}>
      <h6 className={style.list__title}>{title}</h6>
      {items.map((item, index) => (
        <li key={index} className={style.list__item}>
          <Link to={item.link}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
ListComponent.propTypes = {
  list: PropTypes.object,
  title: PropTypes.string,
  items: PropTypes.array,
};
export const List = memo(ListComponent);
