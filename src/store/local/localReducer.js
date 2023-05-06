import { createSlice } from "@reduxjs/toolkit";
const localReducer = createSlice({
  name: "local",
  initialState: {
    favorites: [],
    comparison: [],
  },
  reducers: {
    onFavorites(state, action) {
      let newState = [...state[action.payload.stateName]];
      let itemIndex = newState.findIndex(
        (item) => item.objectId == action.payload.carData.objectId
      );
      if (itemIndex >= 0) {
        state[action.payload.stateName].splice(itemIndex, 1);
      } else {
        state[action.payload.stateName].push(action.payload.carData);
      }
    },
  },
});

export default localReducer.reducer;
export const { onFavorites } = localReducer.actions;
