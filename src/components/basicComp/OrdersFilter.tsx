import React from 'react'
import { IOrderCard } from '../../app/orderCard/orderCard.types'
import OrderCard from './OrderCard'

interface OrdersFilterProps {
  filtredOrders: IOrderCard[]
}

const OrdersFilter: React.FC<OrdersFilterProps> = ({ filtredOrders }) => {
  
  
  return (
      <div  className='mt-[10px] flex flex-col gap-[5px] bg-gray-100 min-h-[100px]'>
        {filtredOrders.map(itemData => (
          <OrderCard key={itemData.id} orderCardData={itemData} />
        ))}
      </div>
    
  )
}

export default OrdersFilter
