import { createSlice } from "@reduxjs/toolkit";
import { OrderStatus, PaymentStatus } from "../../types/enums";
import { IOrdersState } from "./orderCard.types";

const initialState: IOrdersState = {
    orderCards: [
        {
            id: 328945,
            status: OrderStatus.NEW,
            payment: PaymentStatus.CLICK,
            price: 532000,
            time: '14:20',
            orderItems: ["1x Гамбургер", "1x Пепси 0.5", "1x Сок апельсиновый"]
        },
        {
            id: 331284,
            status: OrderStatus.PREPARATION,
            payment: PaymentStatus.CASH,
            price: 589000,
            time: '14:22',
            orderItems: ["1x Лаваш миясной", "1x Фри картошка", "1x Мохито"]
        },
        {
            id: 336781,
            status: OrderStatus.READY,
            payment: PaymentStatus.PAYME,
            price: 576000,
            time: '14:25',
            orderItems: ["1x Чизбургер", "1x Сэндвич", "1x Пепси 0.5", "1x Салат"]
        },
        {
            id: 339152,
            status: OrderStatus.NEW,
            payment: PaymentStatus.PAYME,
            price: 548000,
            time: '14:26',
            orderItems: ["1x Гамбургер", "1x Мохито", "1x Фри картошка"]
        },
        {
            id: 341923,
            status: OrderStatus.PREPARATION,
            payment: PaymentStatus.CLICK,
            price: 560000,
            time: '14:27',
            orderItems: ["1x Шаурма", "1x Пепси 0.5", "1x Чизбургер"]
        },
        {
            id: 346218,
            status: OrderStatus.READY,
            payment: PaymentStatus.CASH,
            price: 594000,
            time: '14:29',
            orderItems: ["1x Салат", "1x Сок апельсиновый", "1x Фри картошка", "1x Лаваш миясной"]
        },
        {
            id: 350019,
            status: OrderStatus.PREPARATION,
            payment: PaymentStatus.CLICK,
            price: 515000,
            time: '14:31',
            orderItems: ["1x Пепси 0.5", "1x Сэндвич", "1x Салат"]
        },
        {
            id: 356731,
            status: OrderStatus.NEW,
            payment: PaymentStatus.CASH,
            price: 558000,
            time: '14:32',
            orderItems: ["1x Мохито", "1x Гамбургер", "1x Лаваш миясной"]
        },
        {
            id: 361287,
            status: OrderStatus.READY,
            payment: PaymentStatus.PAYME,
            price: 590000,
            time: '14:33',
            orderItems: ["1x Пепси 0.5", "1x Шаурма", "1x Сэндвич"]
        },
        {
            id: 378945,
            status: OrderStatus.PREPARATION,
            payment: PaymentStatus.CLICK,
            price: 525000,
            time: '14:34',
            orderItems: ["1x Чизбургер", "1x Сок апельсиновый", "1x Фри картошка", "1x Мохито"]
        }

    ]
}

const orderCardSlice = createSlice({
    name: "orderCardSlice",
    initialState,
    reducers: {}
})

export const { } = orderCardSlice.actions

export default orderCardSlice.reducer