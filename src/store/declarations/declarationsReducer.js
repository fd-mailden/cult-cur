import { createSlice } from "@reduxjs/toolkit";

const declarationsReducer = createSlice({
  name: "declarations",
  initialState: {
    "trade-in_declaration": [],
    "test-drive_declaration": [],
    car_insurance: [],
    buy_car_on_credit: [],
    call_me: [],
    isError: false,
    isLoading: false,
  },
  reducers: {
    setDeclarations(state, action) {
      state[action.payload.field] = action.payload.data;
    },
    setFieldDeclarations(state, action) {
      const { collection, fireId, declaration } = action.payload;
      let value = state[collection].findIndex((item) => item.fireId === fireId);
      state[collection][value] = declaration;
    },
    deleteDeclarations(state, action) {
      const { collection, fireId } = action.payload;
      let value = state[collection].findIndex((item) => item.fireId === fireId);
      state[collection].splice(value, 1);
    },
    onError(state, action) {
      state.isError = action.payload;
    },
    onLoader(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export default declarationsReducer.reducer;
export const {
  setDeclarations,
  onError,
  onLoader,
  setFieldDeclarations,
  deleteDeclarations,
} = declarationsReducer.actions;
