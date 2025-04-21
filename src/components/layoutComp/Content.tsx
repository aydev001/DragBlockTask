import { useSelector } from "react-redux"
import { RootState } from "../../app/store"
import OrderCard from "../basicComp/OrderCard"


const Content = () => {

  const { statusBlocks } = useSelector((state: RootState) => state.statusBlock)
  const { orderCards } = useSelector((state: RootState) => state.orderCard)
  
  

  return (
    <div className='min-h-[calc(100vh-65px)] max-h-[calc(100vh-70px)] overflow-x-auto mt-[5px] bg-white rounded-sm shadow-sm'>
      <div className="flex gap-[10px] p-[8px] items-start">
        {statusBlocks.map(block => (
          <div key={block.id} className="bg-slate-200 min-h-[150px] min-w-[260px] w-full p-[5px] rounded-sm border-[1px] border-gray-200">
            <div className="h-[35px] bg-green-500 text-shadow-sm font-medium text-[14px] text-white rounded-t-sm flex justify-center items-center">
              {block.title}
            </div>
            <div className="mt-[10px] flex flex-col gap-[5px]">
              {(orderCards.filter(orderCardItem => orderCardItem.status === block.blockStatus)).map(itemData => (
                <OrderCard key={itemData.id} orderCardData={itemData}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Content
