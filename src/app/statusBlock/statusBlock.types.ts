import { OrderStatus } from "../../types/enums"

interface IOrderCard {
    id: number
    title : string
    blockStatus: OrderStatus
}

export interface IOrdersState {
    statusBlocks: IOrderCard[]
}