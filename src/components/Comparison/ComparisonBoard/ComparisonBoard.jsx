import React, { useEffect, useState } from "react";
import style from "./ComparisonBoard.module.scss";
import { description, cars } from "../boardInfo";
import { BoardItem } from "../BoardItem/BoardItem";
import { Icon } from "../../UI/Icon/Icon";
import { removeLocalStorage } from "../../../helpers/localStorage";
import { Loading } from "../../UI/Loader/Loading";
import { useSelector, useDispatch } from "react-redux";
import { selectComparison } from "../../../store/local/localSelectors";
import { onFavorites } from "../../../store/local/localReducer";
function ComparisonBoard() {
  const dispatch = useDispatch();
  const comparison = useSelector(selectComparison);
  let container = document.getElementById("comparison");
  useEffect(() => {
    container = document.getElementById("comparison");
  }, []);

  function removeCar(car) {
    dispatch(
      onFavorites({
        carData: { ...car, isActiveComp: true },
        stateName: "comparison",
      })
    );
  }
  return (
    <section className={style.board}>
      <ul className={style.board__description}>
        {description.map((item, index) => (
          <li className={style["description-item"]} key={index}>
            <p className={style["description-item__text"]}>{item}</p>
          </li>
        ))}
      </ul>
      <div className={style.board__items}>
        <div className={style.board__scroll} id="comparison">
          {!comparison ? (
            <Loading />
          ) : (
            comparison.map((item, index) => (
              <BoardItem removeCar={removeCar} key={index} item={item} />
            ))
          )}
        </div>

        {comparison && comparison.length < 6 ? null : (
          <button
            onClick={() => (container.scrollLeft -= 500)}
            className={style["arrow-prev"]}
          >
            <Icon name="slider_arrow" />
          </button>
        )}
        {comparison && comparison.length < 6 ? null : (
          <button
            onClick={() => (container.scrollLeft += 500)}
            className={style["arrow-next"]}
          >
            <Icon name="slider_arrow" />
          </button>
        )}
      </div>
    </section>
  );
}

export { ComparisonBoard };
