import { configureStore} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import userReducer from '../features/user/userSlice';
import cartReducer from '../features/cart/cartSlice';
import directoryReducer from '../features/directory/directorySlice';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], // Only persist cart!
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
      serializableCheck: false, // needed due to redux-persist non-serializable values
    }).concat(logger)
});

export const persistor = persistStore(store);

// export default { store, persistor };