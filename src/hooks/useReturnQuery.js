import React, { useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { dbFirebase } from "../lib/init-firebase";
import { query, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { onLoader, onError } from "../store/cars/carsReducer";
export function useReturnQuery(collectionName, action) {
  const dispatch = useDispatch();
  const ref = query(collection(dbFirebase, collectionName));
  const queryRes = useFirestoreQuery([collectionName], ref, {
    subscribe: true,
  });
  useEffect(() => {
    if (queryRes.isLoading) {
      dispatch(onLoader(queryRes.isLoading));
      return null;
    }
    dispatch(onError(queryRes.isError));
    const snapshot = queryRes.data;
    const resData = snapshot.docs.map((doc) => doc.data());
    dispatch(action(resData));
    dispatch(onLoader(queryRes.isLoading));
  }, [queryRes.isLoading]);
}
