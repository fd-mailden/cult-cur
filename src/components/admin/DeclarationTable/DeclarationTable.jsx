import React from "react";
import { TableItem } from "../TableItem/TableItem";
import style from "./DeclarationTable.module.scss";
import PropTypes from "prop-types";
import ButtonCheck from "../ButtonCheck/ButtonCheck";
import { DotsMenu } from "../DotsMenu/DotsMenu";
import classNames from "classnames";
import { useDeclarationTable } from "./useDeclarationTable";
import { useManagerFunctions } from "../useManagerFunctions";
function DeclarationTable({ declarations, collectionName }) {
  const {
    models: { highlight, decl },
    commands: { setHighlight, checkHandler },
  } = useDeclarationTable(declarations);
  const {
    commands: { onApproved, deleteDeclarationHandler },
  } = useManagerFunctions(collectionName);
  return (
    <table className={style.table}>
      <thead className={style["table-head"]}>
        <th className={style["table-head__text"]}>
          <ButtonCheck
            check={highlight}
            onCheck={() => setHighlight(!highlight)}
          />
        </th>
        <th className={style["table-head__text"]}>Name</th>
        <th className={style["table-head__text"]}>Status</th>
        <th className={style["table-head__text"]}>Phone number</th>
        {declarations[0]?.brand && (
          <th className={style["table-head__text"]}>Brand</th>
        )}
        {declarations[0]?.model && (
          <th className={style["table-head__text"]}>Model</th>
        )}
        {declarations[0]?.salon && (
          <th className={style["table-head__text"]}>Salon</th>
        )}
        <th className={classNames(style["table-head__data"])}>
          <p>Date</p>{" "}
          <DotsMenu
            isView={decl.length > 0}
            decl={decl}
            onApproved={onApproved}
            onDelete={deleteDeclarationHandler}
          />
        </th>
      </thead>
      <tbody className={style.table__tbody}>
        {declarations.map((dec, index) => (
          <TableItem
            collectionName={collectionName}
            dec={dec}
            key={index}
            check={highlight}
            onChecked={checkHandler}
          />
        ))}
      </tbody>
    </table>
  );
}
DeclarationTable.propTypes = {
  declarations: PropTypes.array,
};
export { DeclarationTable };
