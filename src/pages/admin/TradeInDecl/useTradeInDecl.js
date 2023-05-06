import React, { useState, useEffect } from "react";
import { useGetDeclarations } from "../../../hooks/useGetDeclarations";

const fieldManager = {
  Approved: true,
  Denied: false,
};

export function useTradeInDecl(collectionName) {
  const { data, isLoading } = useGetDeclarations(collectionName);
  const [declarations, setDeclaration] = useState([]);
  const [phone, setPhone] = useState([]);
  const [empty, setEmpty] = useState("");
  useEffect(() => {
    setDeclaration(data);
  }, [isLoading, data]);

  const selectHandler = (field, fieldValue) => {
    if (fieldValue == "All") {
      setDeclaration(data);
      return;
    }
    const neDecl = data.filter(
      (item) => item.approved == fieldManager[fieldValue]
    );
    setDeclaration(neDecl);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setEmpty("");
    const neDecl = data.filter((item) => item.phone.includes(phone));
    if (!neDecl.length) {
      setEmpty("Empty");
      setDeclaration(data);
      return;
    }
    setDeclaration(neDecl);
  };
  
  return {
    models: { declarations, isLoading, phone, empty },
    commands: searchHandler,
    setPhone,
    selectHandler,
  };
}
