import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getCarsInfo,
  setCarCatalog,
  addAddToFilteredCar,
  setSearchResult,
  setCarOptions,
} from "./carsReducer";
import { setAdvertising } from "../../helpers/setAdvertising";
import { advertising } from "../../components/Сatalog/filter";
export const getCarsInfoAction = createAsyncThunk(
  "cars/getCarsInfoAction",
  async function (collection, { rejectWithValue, dispatch }) {
    try {
      dispatch(getCarsInfo(collection));
      dispatch(addAddToFilteredCar(collection));
      dispatch(setSearchResult(collection));
      dispatch(setCarCatalog(setAdvertising(collection, advertising)));
      dispatch(setCarOptions(collection));
      return collection;
    } catch (error) {
      console.log("error");
      return rejectWithValue(error);
    }
  }
);
