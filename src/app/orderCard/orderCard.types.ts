import { OrderStatus, PaymentStatus } from "../../types/enums"

type OrderStatusLiteral = `${OrderStatus}`;
type PaymentStatusLiteral = `${PaymentStatus}`;

export interface IOrderCard {
    id: number
    status: OrderStatusLiteral
    price: number
    payment: PaymentStatusLiteral
    time: string
    orderItems: string[]
}

export interface IOrdersState {
    searchOrderId: number | null,
    filtredItems: {
        new: IOrderCard[];
        preparation: IOrderCard[];
        ready: IOrderCard[];
        ontheway: IOrderCard[];
    }
    orderCards: IOrderCard[]
}