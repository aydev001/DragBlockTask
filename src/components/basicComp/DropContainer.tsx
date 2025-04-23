import React from 'react'
import OrdersFilter from './OrdersFilter'
import { IOrderCard } from '../../app/orderCard/orderCard.types'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { OrderStatus } from '../../types/enums'
import { useDroppable } from '@dnd-kit/core'
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

interface DropContainerProps {
    status: `${OrderStatus}`,
    items: IOrderCard[]
}

const DropContainer: React.FC<DropContainerProps> = ({ status, items }) => {
    const { statusBlocks } = useSelector((state: RootState) => state.statusBlock);
    const { setNodeRef } = useDroppable({ id: status });
    return (
        <SortableContext id={`${status}`} items={items.map(order => {
            return { id: order.id }
        })} strategy={verticalListSortingStrategy}>
            <div ref={setNodeRef} className="bg-slate-200 min-h-[150px] min-w-[270px] w-full p-[5px] rounded-sm border-[1px] border-gray-200"
            >
                <div className="h-[35px] bg-green-500 text-shadow-sm font-medium text-[14px] text-white rounded-t-sm flex justify-center items-center">
                    {statusBlocks.find(blockItem => blockItem.blockStatus === status)?.title}
                </div>
                <div>
                    <OrdersFilter filtredOrders={items} />
                </div>

            </div>
        </SortableContext>
    )
}

export default DropContainer
