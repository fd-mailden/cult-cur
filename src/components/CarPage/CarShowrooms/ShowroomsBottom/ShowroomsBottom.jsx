import React from "react";
import style from "./ShowroomsBottom.module.scss";
import worker1 from "../../../../assets/images/workers/worker1.png";
import worker2 from "../../../../assets/images/workers/worker2.png";
import worker3 from "../../../../assets/images/workers/worker3.png";
import { Icon } from "../../../UI/Icon/Icon";
function ShowroomsBottom() {
  const workers = [
    {
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      name: "Екатерина Жданова",
      image: worker1,
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      name: "Иван Хмельцев",
      image: worker2,
    },
    {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.",
      name: "Константин Шумов",
      image: worker3,
    },
  ];
  return (
    <div className={style.workers}>
      {workers.map((worker, index) => (
        <div key={index} className={style.worker}>
          <p className={style.worker__text}>{worker.description}</p>
          <img
            className={style.worker__photo}
            src={worker.image}
            alt="worker-photo"
          />
          <h4 className={style.worker__name}>{worker.name}</h4>
          <div className={style.worker__stars}>
            <Icon name = 'star'/>
            <Icon name = 'star'/>
            <Icon name = 'star'/>
            <Icon name = 'star'/>
            <Icon name = 'star'/>
          </div>
        </div>
      ))}
    </div>
  );
}

export { ShowroomsBottom };
