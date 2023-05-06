import React, { useState } from "react";
import style from "./Breadcrumb.module.scss";
import { Link } from "react-router-dom";
import { getFields } from "../../api/carRequests";
import classNames from "classnames";
const Breadcrumb = ({
  path,
  num = 0,
  collection = "",
  field = "",
  mode = "",
  isFind = false,
}) => {
  const [resName, setResName] = useState("---");
  let name = path.split("/");
  if (isFind) {
    getFields(collection, field, name[num + 1]).then((res) => {
      if (field == "id") {
        setResName(res[0].title);
      } else {
        setResName(res[0].model);
      }
    });
    return (
      <div className={classNames(style.breadcrumbs__link, style[mode])}>
        {resName ? resName : "---"}
      </div>
    );
  } else {
    return (
      <Link
        to={path}
        className={classNames(style.breadcrumbs__link, style[mode])}
      >
        {name[num + 1]}
      </Link>
    );
  }
};

export { Breadcrumb };
