import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import AppReducer from "../reducers";

export const store = configureStore({
  reducer: {
    klaimData: AppReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
