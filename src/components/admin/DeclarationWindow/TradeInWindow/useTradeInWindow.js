import React, { useState, useEffect } from "react";
// import {}
function useTradeInWindow(declaration) {
  const [thisDeclaration, setThisDeclaration] = useState(declaration);
  const [declarationList, setDeclarationList] = useState([]);
  const [imagesList, setImagesList] = useState([""]);
  const onChangeImg = (linkImage, index) => {
    const list = [...imagesList];
    list[index] = linkImage;
    setImagesList(list);
  };
  const onDeleteImg = (index) => {
    let list = [...imagesList];
    console.log(list);
    list.splice(index, 1);
    setImagesList(list);
  };
  const onAddImage = () => {
    setImagesList((prev) => [...prev, ""]);
  };

  useEffect(() => {
    for (let decl in declaration) {
      if (
        decl !== "uid" &&
        decl !== "id" &&
        decl !== "fireId" &&
        decl !== "VIN" &&
        decl !== "approved" &&
        decl !== "calculation_number" &&
        decl !== "images" &&
        decl !== "newPrice" &&
        decl !== "oldPrice" &&
        decl !== "objectId" &&
        decl !== "address" &&
        decl !== "description" &&
        decl !== "date"
      )
        setDeclarationList((prev) => [
          ...prev,
          { name: decl, value: declaration[decl] },
        ]);
    }

    if (declaration.images) {
      setImagesList(declaration.images);
    }
  }, [declaration]);
  function declarationChangeHandler(name, value) {
    console.log(name, value);
    let newDec = { ...declaration };
    newDec[name] = value;
    setThisDeclaration(newDec);
  }

  return {
    models: { thisDeclaration, declarationList, imagesList },
    commands: {
      declarationChangeHandler,
      onChangeImg,
      onDeleteImg,
      onAddImage,
    },
  };
}

export { useTradeInWindow };
