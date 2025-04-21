import React from "react"
import ButtonOrderStatus from "./ButtonOrderStatus"
import PaymentStatusLogo from "./PaymentStatusLogo"
import { IOrderCard } from "../../app/orderCard/orderCard.types"

interface OrderCardProps {
    orderCardData : IOrderCard
}

const OrderCard: React.FC<OrderCardProps> = ({ orderCardData }) => {
    console.log(orderCardData)
    return (
        <div className="rounded-sm border-[1px] border-gray-200 bg-white select-none">
            <div className="flex justify-between items-center gap-1 p-[8px]">
                <div className="text-[14px]">
                    ID : {orderCardData.id}
                </div>
                <div className="text-[12px] flex justify-end items-center gap-1 text-gray-600">
                    <div className="text-[11px]">{orderCardData.price} сум</div>
                    <PaymentStatusLogo status={orderCardData.payment}/>
                </div>
            </div>
            <div className="min-h-[50px] p-[8px] text-[14px] border-y-[1px] border-gray-200">
                {orderCardData.orderItems.map((item, index) => (
                    <div key={index} className="text-[12px]">{item}</div>
                ))}
                <div className="flex justify-end items-center">
                    <div className="text-[12px] text-gray-600">{orderCardData.time}</div>
                </div>
            </div>
            <div className="p-[8px]">
                <ButtonOrderStatus status={orderCardData.status}/>
            </div>
        </div>
    )
}

export default OrderCard
