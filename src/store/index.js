import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import carsReducer from "./cars/carsReducer";
import localReducer from "./local/localReducer";
import authReducer from "./auth/authReducer";
import declarationsReducer from "./declarations/declarationsReducer";
import {
  createStateSyncMiddleware,
  initMessageListener,
} from "redux-state-sync";
const rootReducer = combineReducers({
  cars: carsReducer,
  local: localReducer,
  auth: authReducer,
  declarations: declarationsReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["cars", "declarations"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

function getMiddlewares(getDefaultMiddleware) {
  const middelewears = getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });
  middelewears.push(
    createStateSyncMiddleware({
      blacklist: ["persist/PERSIST", "persist/REHYDRATE"],
    })
  );
  return middelewears;
}

const store = configureStore({
  reducer: persistedReducer,
  middleware: getMiddlewares,
});

export const persistor = persistStore(store);
export default store;
