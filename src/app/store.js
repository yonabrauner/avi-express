import { configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import cartReducer from '../features/cart/cartSlice';
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