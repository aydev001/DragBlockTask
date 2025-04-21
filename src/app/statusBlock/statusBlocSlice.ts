import { createSlice } from "@reduxjs/toolkit";
import { OrderStatus } from "../../types/enums";
import { IOrdersState } from "./statusBlock.types";

const initialState: IOrdersState = {
    statusBlocks: [
        {
            id: 1,
            title : "Новый",
            blockStatus: OrderStatus.NEW,
        },
        {
            id: 2,
            title : "Загатовка",
            blockStatus: OrderStatus.PREPARATION,
        },
        {
            id: 3,
            title : "Готов",
            blockStatus: OrderStatus.READY,
        },
        {
            id: 4,
            title : "Курьер в пути",
            blockStatus: OrderStatus.ONTHEWAY,
        }
    ]
}

const statusBlockSlice = createSlice({
    name: "statusBlockSlice",
    initialState,
    reducers: {}
})

export const { } = statusBlockSlice.actions

export default statusBlockSlice.reducer