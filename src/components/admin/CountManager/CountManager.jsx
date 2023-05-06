import React, { useEffect, useState } from "react";
import style from "./CountManager.module.scss";
import PropTypes from "prop-types";

function CountManager({ declarations }) {
  const [approved, setApproved] = useState(0);
  const [denied, setDenied] = useState(0);
  useEffect(() => {
    setDeclarations();
  }, [declarations]);
  function counter(isTrue) {
    let collection = declarations.filter((item) => item.approved === isTrue);
    return collection.length;
  }
  async function setDeclarations() {
    await setApproved(counter(true));
    await setDenied(counter(false));
  }
  return (
    <section className={style.counter}>
      <div className={style["num-wrapper"]}>
        <h2 className={style.number}>{declarations.length}</h2>
        <p className={style.name}>Total</p>
      </div>
      <span className={style.line}> </span>
      <div className={style["num-wrapper"]}>
        <h2 className={style.number}>{approved}</h2>
        <p className={style.name}>Approved</p>
      </div>
      <span className={style.line}> </span>

      <div className={style["num-wrapper"]}>
        <h2 className={style.number}>{denied}</h2>
        <p className={style.name}>denied</p>
      </div>
    </section>
  );
}
CountManager.propTypes = {
  declarations: PropTypes.array,
};
export { CountManager };
