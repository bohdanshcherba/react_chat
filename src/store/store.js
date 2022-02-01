import {configureStore} from '@reduxjs/toolkit'
import * as services from '../services/services'
import {UserReducer, ChatReducer} from "./rootReducer";

export const store = configureStore({
    reducer: {
        user: UserReducer,
        chat: ChatReducer
    },
    middleware: getDefaultMiddleware => (getDefaultMiddleware({
        thunk: {
            extraArgument: {services}
        }
    })),
    devTools: true
})
