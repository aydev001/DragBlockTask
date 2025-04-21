import { OrderStatus, PaymentStatus } from "../../types/enums"

interface IOrderCard {
    id: number
    status : OrderStatus
    price : number
    payment : PaymentStatus
    time : string
    orderItems: string[]
}

export interface IOrdersState {
    orderCards: IOrderCard[]
}