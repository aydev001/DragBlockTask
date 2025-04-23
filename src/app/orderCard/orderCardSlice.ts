import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { OrderStatus, PaymentStatus } from "../../types/enums";
import { IOrderCard, IOrdersState } from "./orderCard.types";

const initialState: IOrdersState = {
    searchOrderId: null,
    filtredItems: {
        new: [],
        preparation: [],
        ready: [],
        ontheway: []
    },
    orderCards: [
        {
            id: 328945,
            status: OrderStatus.NEW,
            payment: PaymentStatus.CLICK,
            price: 532000,
            time: '14:20',
            orderItems: ["1x Гамбургер", "2x Пепси 0.5", "1x Сок апельсиновый"]
        },
        {
            id: 331284,
            status: OrderStatus.PREPARATION,
            payment: PaymentStatus.CASH,
            price: 589000,
            time: '14:22',
            orderItems: ["3x Лаваш миясной", "1x Фри картошка", "2x Мохито"]
        },
        {
            id: 336781,
            status: OrderStatus.READY,
            payment: PaymentStatus.PAYME,
            price: 576000,
            time: '14:25',
            orderItems: ["1x Чизбургер", "3x Сэндвич", "1x Пепси 0.5"]
        },
        {
            id: 339152,
            status: OrderStatus.NEW,
            payment: PaymentStatus.PAYME,
            price: 548000,
            time: '14:26',
            orderItems: ["3x Гамбургер", "2x Мохито", "1x Фри картошка"]
        },
        {
            id: 341923,
            status: OrderStatus.PREPARATION,
            payment: PaymentStatus.CLICK,
            price: 560000,
            time: '14:27',
            orderItems: ["1x Шаурма", "1x Пепси 0.5", "3x Чизбургер"]
        },
        {
            id: 346218,
            status: OrderStatus.READY,
            payment: PaymentStatus.CASH,
            price: 594000,
            time: '14:29',
            orderItems: ["1x Салат", "2x Сок апельсиновый", "1x Лаваш миясной"]
        },
        {
            id: 350019,
            status: OrderStatus.ONTHEWAY,
            payment: PaymentStatus.CLICK,
            price: 515000,
            time: '14:31',
            orderItems: ["1x Пепси 0.5", "1x Сэндвич", "2x Салат"]
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
            status: OrderStatus.ONTHEWAY,
            payment: PaymentStatus.PAYME,
            price: 590000,
            time: '14:33',
            orderItems: ["1x Пепси 0.5", "2x Шаурма", "1x Сэндвич"]
        },
        {
            id: 378945,
            status: OrderStatus.PREPARATION,
            payment: PaymentStatus.CLICK,
            price: 525000,
            time: '14:34',
            orderItems: ["1x Чизбургер", "1x Сок апельсиновый", "3x Мохито"]
        }

    ]
}

const orderCardSlice = createSlice({
    name: "orderCardSlice",
    initialState,
    reducers: {
        setOrderStatus: (
            state,
            action: PayloadAction<{ id: number; newStatus: `${OrderStatus}` | undefined }>
        ) => {
            switch (action.payload.newStatus) {
                case ("new"): {
                    const newData = state.filtredItems.new.find(item => item.id === action.payload.id)
                    state.filtredItems.new = state.filtredItems.new.filter(order => order.id !== action.payload.id)
                    state.filtredItems.preparation.push(newData as IOrderCard)
                    break
                }
                case ("preparation"): {
                    const newData = state.filtredItems.preparation.find(item => item.id === action.payload.id)
                    state.filtredItems.preparation = state.filtredItems.preparation.filter(order => order.id !== action.payload.id)
                    state.filtredItems.ready.push(newData as IOrderCard)
                    break
                }
                case ("ready"): {
                    const newData = state.filtredItems.ready.find(item => item.id === action.payload.id)
                    state.filtredItems.ready = state.filtredItems.ready.filter(order => order.id !== action.payload.id)
                    state.filtredItems.ontheway.push(newData as IOrderCard)
                    break
                }

            }

        },

        saveAllFiltredOrderCards: (
            state,
            action: PayloadAction<
                {
                    new: IOrderCard[];
                    preparation: IOrderCard[];
                    ready: IOrderCard[];
                    ontheway: IOrderCard[];
                }>
        ) => {
            state.filtredItems = action.payload
        },

        changeSearchId: (
            state,
            action: PayloadAction<number>
        ) => {
            state.searchOrderId = action.payload
        }
    }
})

export const { setOrderStatus, saveAllFiltredOrderCards, changeSearchId } = orderCardSlice.actions

export default orderCardSlice.reducer