import React from "react";
import useReactRouterBreadcrumbs, {
  BreadcrumbData,
} from "use-react-router-breadcrumbs";
import style from "./Breadcrumbs.module.scss";
import classNames from "classnames";
import PropTypes from "prop-types";
import { breadcrumb_list } from "../../settings/breadcrumbList";
import { Breadcrumb } from "../Breadcrumb/Breadcrumb";

const Breadcrumbs = ({ mode = "" }) => {
  const breadcrumbs = useReactRouterBreadcrumbs(breadcrumb_list, {
    disableDefaults: true,
  });

  return (
    <div className={style.breadcrumbs}>
      {breadcrumbs.map(({ breadcrumb, match }, index) => (
        <React.Fragment key={index}>
          {breadcrumbs.length == 1 ? (
            <div className={classNames(style.breadcrumbs__link, style[mode])}>
              {breadcrumb} /
            </div>
          ) : (
            <Breadcrumb
              mode={mode}
              path={match.pathname}
              num={match.route.num}
              collection={match.route.collection}
              field={match.route.field}
              isFind={match.route.isFind}
            />
          )}

          {index < breadcrumbs.length - 1 && " / "}
        </React.Fragment>
      ))}
    </div>
  );
};
Breadcrumbs.propTypes = {
  mode: PropTypes.string,
};
export { Breadcrumbs };
