import React from "react";
import { StyledSentence } from "../../../UI/StyledSentence/StyledSentence";
import SaleMenu from "../SaleMenu/SaleMenu";
import style from "./Sale.module.scss";
import { ReactComponent as Arrow } from "../../../../assets/images/red-arrow.svg";
import { Tag } from "../../../UI/Tag/Tag";
import { SaleSlider } from "../../../Sliders/SaleSlider/SaleSlider";
import { CarCard } from "../../CarCard/CarCard";
import { catalog } from "../catalog";
import { Grid } from "../../../UI/Grid/Grid";
import { useSelector } from "react-redux";
import { selectCars,selectLoading } from "../../../../store/cars/carSelectors";
import { Loading } from "../../../UI/Loader/Loading";
function Sale() {
  const carsList = useSelector(selectCars);
  const load = useSelector(selectLoading);
  const tags = [
    { text: "По размеру скидки", active: false },
    { text: "до 300.000 ₽", active: false },
    { text: "до 500.000 ₽", active: false },
    { text: "до 800.000 ₽", active: false },
    { text: "до 1.500.000 ₽", active: false },
    { text: "больше 1.500.000 ₽", active: false },
  ];
  return (
    <section className={style.sale} id="sell">
      <SaleMenu />
      <div className={style.sale__inner}>
        <h2 className={style.sale__title}>
          <StyledSentence
            sentence={`Продажа авто с пробегом в !!${process.env.REACT_APP_WHERE_PLACE}!.`}
          />
          <Arrow className={style.arrow} />
        </h2>
        <div className={style.sale__tags}>
          {tags.map((tag, index) => (
            <Tag key={index} mode="tag--light" tag={tag} />
          ))}
        </div>

        {!load ? (
          <>
            <div className={style["slick-slider"]}>
              <SaleSlider>
                {carsList.map((car, index) => (
                  <CarCard key={index} car={car} />
                ))}
              </SaleSlider>
            </div>
            <div className={style.auto}>
              <Grid>
                {carsList.map((car, index) => (
                  <CarCard
                    key={index}
                    car={car}
                    mode="col-sm-6 col-lg-4 col-xl-4"
                  />
                ))}
              </Grid>
            </div>
          </>
        ) : (
          <Loading height="30" />
        )}
      </div>
    </section>
  );
}

export { Sale };
