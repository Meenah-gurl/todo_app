import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './TodoSlice'
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer, PAUSE, PERSIST, PURGE, REHYDRATE, FLUSH, REGISTER } from "redux-persist";
// import {store} from './reduxStore/store'


const persistConfig = {
  key: "root",
  storage,
  // version: 1,
};

const persistedReducer = persistReducer(persistConfig, todoReducer);

export const store = configureStore({
  reducer: {todos:persistedReducer},
  middleware: (getDefaultMiddle) =>
    getDefaultMiddle({
      serializableCheck:{
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
})

export let persistor = persistStore(store);