import { createSlice } from "@reduxjs/toolkit";
import { getCarsInfoAction } from "./carsActions";
import { characteristics } from "../../settings/carCharacteristics";

const carsReducer = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    catalog: [],
    isError: false,
    isDataLoading: true,
    global_filter: {},
    filtered_car: [],
    brand_list: [],
    search_result: [],
    contact: [],
    car_options: characteristics,
  },
  reducers: {
    getCarsInfo(state, action) {
      state.cars = action.payload;
    },
    setCarCatalog(state, action) {
      state.catalog = action.payload;
    },
    setSearchResult(state, action) {
      state.search_result = action.payload;
    },
    setContact(state, action) {
      state.contact = action.payload;
    },
    onLoader(state, action) {
      state.isDataLoading = action.payload;
    },
    onError(state, action) {
      state.isError = action.payload;
    },
    setBrandList(state, action) {
      state.brand_list = action.payload;
    },
    addOnGlobalFilter(state, action) {
      state.global_filter[action.payload.name] = action.payload.value;
    },
    pushToCarOptions(state, action) {
      let findValue = state.car_options[action.payload.name].find(
        (item) => item === action.payload.value
      );
      if (!findValue) {
        state.car_options[action.payload.name].push(action.payload.value);
      }
    },
    ///////// set Car Options
    setCarOptions(state, action) {
      const cars = action.payload;
      cars.map((item) => {
        for (var opt in characteristics) {
          let findValue = state.car_options[opt].find(
            (elem) => elem === item[opt]
          );
          if (!findValue) {
            state.car_options[opt].push(item[opt]);
          }
        }
      });
    },

    /////// filtered cars
    addAddToFilteredCar(state, action) {
      state.filtered_car = action.payload;
    },
    clearCarOptions(state, action) {
      for (var opt in state.car_options) {
        if (opt != "brand") state.car_options[opt].length = 0;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCarsInfoAction.pending, (state, action) => {
      state.isDataLoading = true;
      console.log("pending");
    });
    builder.addCase(getCarsInfoAction.fulfilled, (state, action) => {
      state.isDataLoading = false;
      console.log("fulfilled");
    });

    builder.addCase(getCarsInfoAction.rejected, (state, action) => {
      state.isError = true;
      state.isDataLoading = false;
      console.log("rejected");
    });
  },
});

export default carsReducer.reducer;
export const {
  getCarsInfo,
  setCarCatalog,
  addOnGlobalFilter,
  setSearchResult,
  pushToCarOptions,
  addAddToFilteredCar,
  clearCarOptions,
  onError,
  setBrandList,
  onLoader,
  setContact,
  setCarOptions,
} = carsReducer.actions;
