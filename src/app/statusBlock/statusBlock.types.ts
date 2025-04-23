import { OrderStatus } from "../../types/enums"

export interface IStatusBlock {
    id: number
    title : string
    blockStatus: OrderStatus
}

export interface IOrdersState {
    statusBlocks: IStatusBlock[]
}