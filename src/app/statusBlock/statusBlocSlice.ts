import { createSlice } from "@reduxjs/toolkit";
import { OrderStatus } from "../../types/enums";
import { IOrdersState } from "./statusBlockTypes";

const initialState: IOrdersState = {
    statusBlocks: [
        {
            id: 1,
            blockStatus: OrderStatus.NEW,
        },
        {
            id: 2,
            blockStatus: OrderStatus.PREPARATION,
        },
        {
            id: 3,
            blockStatus: OrderStatus.READY,
        },
        {
            id: 4,
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