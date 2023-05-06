import React, { useState, useEffect } from "react";
import style from "./TableItem.module.scss";
import PropTypes from "prop-types";
import ButtonCheck from "../ButtonCheck/ButtonCheck";
import { DotsMenu } from "../DotsMenu/DotsMenu";
import classNames from "classnames";
import { useManagerFunctions } from "../useManagerFunctions";

function TableItem({ dec, check, onChecked, collectionName }) {
  const [highlight, setHighlight] = useState(false);
  useEffect(() => {
    setHighlight(check);
  }, [check]);
  function handelCheck() {
    setHighlight(!highlight);
    onChecked(dec);
  }
  const {
    commands: { onApproved, deleteDeclarationHandler },
  } = useManagerFunctions(collectionName);

  return (
    <tr
      className={classNames(
        style["field-wrapper"],
        highlight && style["field-wrapper--active"]
      )}
    >
      <td className={style["field-check"]}>
        <ButtonCheck check={highlight} onCheck={handelCheck} />
      </td>
      <td className={style["field-name"]}>{dec.user_name}</td>
      <td className={style.field}>
        {dec.approved === true
          ? "Approved"
          : dec.approved === undefined
          ? "-"
          : "Denied"}
      </td>
      <td className={style.field}>{dec.phone}</td>
      {dec.brand && <td className={style.field}>{dec.brand}</td>}
     { dec.model && <td className={style.field}>{dec.model}</td>}
      {dec.salon && <td className={style.field}>{dec.salon}</td>}

      <td className={style["field-date"]}>
        <p>{dec.date ? dec.date : "13.07.2012"}</p>{" "}
        <DotsMenu
          decl={dec}
          onApproved={onApproved}
          onDelete={deleteDeclarationHandler}
        />
      </td>
    </tr>
  );
}
TableItem.propTypes = {
  dec: PropTypes.object,
};
export { TableItem };
