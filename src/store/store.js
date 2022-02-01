import { configureStore } from '@reduxjs/toolkit'
import * as services from '../services/services'
import {UserReducer} from "./rootReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = configureStore({
    reducer: {
        user: UserReducer

    },
    middleware: getDefaultMiddleware => (getDefaultMiddleware({
        thunk: {
            extraArgument: { services }
        }
    })),
    devTools: true
})
