import { OrderStatus } from "../../types/enums"

interface IOrderCard {
    id: number
    blockStatus: OrderStatus
}

export interface IOrdersState {
    statusBlocks: IOrderCard[]
}