// src/state/index.ts
import { combineReducers } from 'redux';
import cartReducer from './slices/cartSlice';
import { dishApi } from '../UI/pages/Menu/services/Menu';

const rootReducer = combineReducers({
  cart: cartReducer,
  [dishApi.reducerPath]: dishApi.reducer,
  // Add other reducers here
});

export default rootReducer;

// Infer the `RootState` from the rootReducer
export type RootState = ReturnType<typeof rootReducer>;
