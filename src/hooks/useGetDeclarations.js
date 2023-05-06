import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { selectLoading } from "../store/declarations/declarationsSelectors";
import { useSelector } from "react-redux";
import { dbFirebase } from "../lib/init-firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { query, collection, doc, onSnapshot } from "firebase/firestore";
import {
  setDeclarations,
  onError,
  onLoader,
} from "../store/declarations/declarationsReducer";
export function useGetDeclarations(collectionName) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const data = useSelector((state) => state.declarations[collectionName]);
  const ref = query(collection(dbFirebase, collectionName));
  const queryRes = useFirestoreQuery([collectionName], ref, {
    subscribe: true,
  });

  useEffect(() => {
    const thisDoc = onSnapshot(
      collection(dbFirebase, collectionName),
      (decl) => {
        let declList = [];
        decl.docs.forEach((document) => {
          declList.push({
            ...document.data(),
            fireId: document.id,
          });
        });
        dispatch(setDeclarations({ field: collectionName, data: declList }));
      }
    );
    return () => {
      thisDoc();
    };
  }, []);

  useEffect(() => {
    if (queryRes.isLoading) {
      return null;
    }
    dispatch(onError(queryRes.isError));
    const snapshot = queryRes.data;
    const resData = snapshot.docs.map((doc) => ({
      ...doc.data(),
      fireId: doc.id,
    }));
    dispatch(setDeclarations({ field: collectionName, data: resData }));
    dispatch(onLoader(queryRes.isLoading));
  }, [queryRes.isLoading]);

  return { data, isError: queryRes.isError, isLoading: queryRes.isLoading };
}
