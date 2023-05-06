import React, { useState, useEffect } from "react";

export function useDeclarationTable(declarations ) {
  const [highlight, setHighlight] = useState(false);
  const [decl, setDecl] = useState([]);
  useEffect(() => {
    if (highlight) {
      setDecl(declarations);
    } else {
      setDecl([]);
    }
  }, [highlight]);

  const checkHandler = (initDecl) => {
    let decValue = decl.findIndex((item) => item.fireId === initDecl.fireId);
    if (decValue >= 0) {
      setDecl(decl.filter((obj) => obj.fireId != initDecl.fireId));
    } else {
      setDecl([...decl, initDecl]);
    }
  };
  return { models: { highlight, decl }, commands: { setHighlight, checkHandler } };
}
