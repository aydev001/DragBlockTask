import { createSlice } from "@reduxjs/toolkit";
import { OrderStatus, PaymentStatus } from "../../types/enums";
import { IOrdersState } from "./orderCardTypes";

const initialState: IOrdersState = {
    orderCards: [
        {
            id: 321521,
            status: OrderStatus.NEW,
            price: 300560,
            payment : PaymentStatus.PAYME,
            time: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }),
            orderItems: ["3х Пепси 0.5", "1х Гамбургер", "2x Лаваш миясной"]
        },
        {
            id: 344521,
            status: OrderStatus.NEW,
            price: 300560,
            payment : PaymentStatus.CASH,
            time: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }),
            orderItems: ["3х Пепси 0.5", "1х Гамбургер", "2x Лаваш миясной"]
        },
        {
            id: 325531,
            status: OrderStatus.PREPARATION,
            price: 300560,
            payment : PaymentStatus.CLICK,
            time: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }),
            orderItems: ["3х Пепси 0.5", "1х Гамбургер", "2x Лаваш миясной"]
        },
        {
            id: 313521,
            status: OrderStatus.PREPARATION,
            price: 300560,
            payment : PaymentStatus.CLICK,
            time: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }),
            orderItems: ["3х Пепси 0.5", "1х Гамбургер", "2x Лаваш миясной"]
        },
        {
            id: 326521,
            status: OrderStatus.PREPARATION,
            price: 300560,
            payment : PaymentStatus.CLICK,
            time: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }),
            orderItems: ["3х Пепси 0.5", "1х Гамбургер", "2x Лаваш миясной"]
        },
        {
            id: 326521,
            status: OrderStatus.READY,
            price: 300560,
            payment : PaymentStatus.PAYME,
            time: new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            }),
            orderItems: ["3х Пепси 0.5", "1х Гамбургер", "2x Лаваш миясной"]
        },
    ]
}

const orderCardSlice = createSlice({
    name: "orderCardSlice",
    initialState,
    reducers: {}
})

export const { } = orderCardSlice.actions

export default orderCardSlice.reducer