import { configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import logger from 'redux-logger';

const store = configureStore({
    reducer: {
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(logger)
});

export default store;