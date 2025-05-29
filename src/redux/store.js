import { configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import cartReducer from './cartSlice';
import logger from 'redux-logger';

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger)
});

export default store;