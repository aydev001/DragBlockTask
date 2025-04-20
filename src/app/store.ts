import { configureStore } from "@reduxjs/toolkit";
import orderCardReducer from "./orderCard/orderCardSlice"
import statusBlockReducer from "./statusBlock/statusBlocSlice"

export const store = configureStore({
    reducer : {
        orderCard : orderCardReducer,
        statusBlock : statusBlockReducer
    }
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;