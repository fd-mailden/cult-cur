import { dbFirebase } from "../lib/init-firebase";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

export async function getCarsRequest(collectionName) {
  const carsCol = collection(dbFirebase, collectionName);
  const carSnapshot = await getDocs(carsCol);
  const carList = carSnapshot.docs.map((doc) => doc.data());
  return carList;
}

export async function getFields(collectionName, field, brand) {
  const q = query(
    collection(dbFirebase, collectionName),
    where(field, "==", brand)
  );
  const querySnapshot = await getDocs(q);
  const carList = querySnapshot.docs.map((doc) => doc.data());
  return carList;
}

export function postFirebaseRequest(collectionName, data) {
  const collectionCar = collection(dbFirebase, collectionName);
  return addDoc(collectionCar, data);
}
