import React, { useRef} from "react";
import PropTypes from "prop-types";
import style from "./FilterMenu.module.scss";
import classNames from "classnames";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import { Loading } from "../../UI/Loader/Loading";
import { BrandList } from "../BrandList/BrandList";
import { BrandCards } from "../BrandCards/BrandCards";
import { chunk } from "lodash";
import { useHeaderContext } from "../../../context/headerContext";
function FilterMenu() {
  const { isOpenMenu, setOpenMenu, brandList, isLoudDebounce } =
  useHeaderContext();
  const ref = useRef();
  useOnClickOutside(ref, () => setOpenMenu(false));
  const columnsBrands = chunk(brandList, 13);

  return (
    <div
      className={classNames(
        style["filter-car"],
        isOpenMenu && style["filter-car--active"]
      )}
    >
      <div ref={ref} className={style["filter-car__inner"]}>
        {!brandList.length || !isLoudDebounce ? (
          <>
            {!brandList.length ? (
              <p>...результата нет</p>
            ) : (
              <>
                <div className={style["brands-wrapper"]}>
                  {columnsBrands.map((column, index) => (
                    <BrandList
                      key={index}
                      brands={column}
                      setOpenMenu={setOpenMenu}
                    />
                  ))}
                </div>

                <BrandCards carCards={brandList} setOpenMenu={setOpenMenu} />
              </>
            )}
          </>
        ) : (
          <div className={style["loader-wrapper"]}>
            <Loading height="20" />
          </div>
        )}
      </div>
    </div>
  );
}
FilterMenu.propTypes = {
  isOpenMenu: PropTypes.bool,
  setOpenMenu: PropTypes.func,
};
export { FilterMenu };
