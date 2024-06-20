// src/state/index.ts
import { combineReducers } from 'redux';
import counterReducer from "./slices/counterSlice"

const rootReducer = combineReducers({
  counter: counterReducer,
  // Add other reducers here
});

export default rootReducer;

// Infer the `RootState` from the rootReducer
export type RootState = ReturnType<typeof rootReducer>;
