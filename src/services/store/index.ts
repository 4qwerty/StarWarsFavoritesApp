import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore, combineReducers, Middleware} from '@reduxjs/toolkit';
import {persistReducer, persistStore} from 'redux-persist';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {setupListeners} from '@reduxjs/toolkit/query/react';
import { swApi } from "../api/swapi.ts";
import { characterSlice } from "./slices/сharacter";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [swApi.reducerPath],
};

const rootReducer = combineReducers({
  [characterSlice.name]: characterSlice.reducer,
  [swApi.reducerPath]: swApi.reducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const middleware: Middleware[] = [];

middleware.push(swApi.middleware);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middleware),
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppStore = typeof store;
