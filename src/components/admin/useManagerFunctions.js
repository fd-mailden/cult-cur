import React from "react";
import { dbFirebase } from "../../lib/init-firebase";
import { doc, setDoc, deleteDoc, addDoc, collection } from "firebase/firestore";
import { useDispatch } from "react-redux";
import {
  setFieldDeclarations,
  deleteDeclarations,
} from "../../store/declarations/declarationsReducer";
import { selectUser } from "../../store/auth/authSelectors";
import { selectCars } from "../../store/cars/carSelectors";
import { useSelector } from "react-redux";
import { useToastManager } from "../../hooks/useToastManager";

export function useManagerFunctions(collectionName) {
  const dispatch = useDispatch();
  const { someToast } = useToastManager();
  const user = useSelector(selectUser);
  const cars = useSelector(selectCars);
  function onApproved(item, isApprove) {
    if ((!item.images || item.images[0] == "") && isApprove) {
      return someToast('field "Images" is empty', "error");
    }
    const newItem = { ...item };
    newItem.approved = isApprove;
    newItem.newPrice = newItem.trade_in_price;
    newItem.oldPrice = newItem.your_price;
    newItem.objectId = newItem.fireId;
    newItem.address = newItem.salon;
    newItem.description = `${newItem.brand} ${newItem.model}, ${newItem.year} г.в, ${newItem.mileage} км, ${newItem.category}, ${newItem.engine}`;
    const docRef = doc(dbFirebase, collectionName, item.fireId);
    if (user.uid) {
      newItem.uid = user.uid;
    }
    setDoc(docRef, newItem);
    // let data = {
    //   collection: collectionName,
    //   fireId: item.fireId,
    //   declaration: newItem,
    // };
    addCarToFireBaseCollection(newItem);
    // dispatch(setFieldDeclarations(data));
    someToast("field", "success");
  }
  function deleteDeclarationHandler(item) {
    const docRef = doc(dbFirebase, collectionName, item.fireId);
    deleteDoc(docRef);
    let data = {
      collection: collectionName,
      fireId: item.fireId,
    };
    dispatch(deleteDeclarations(data));
  }

  function addCarToFireBaseCollection(newCar) {
    let idCar = cars.find((item) => item.objectId === newCar.objectId);
    console.log(idCar);
    ///// if have car
    const docRef = doc(dbFirebase, "car-list", newCar.objectId);
    setDoc(docRef, newCar);
    // ////////////else

    // const collectionCar = collection(dbFirebase, "car-list");
    // addDoc(collectionCar, newCar)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err.message));
  }

  return { models: {}, commands: { onApproved, deleteDeclarationHandler } };
}
