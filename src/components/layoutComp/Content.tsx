import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import {
  DndContext,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragOverEvent,
  DragEndEvent
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";
import { useState } from "react";
import { IOrderCard } from "../../app/orderCard/orderCard.types";
import DropContainer from "../basicComp/DropContainer";
import { useDispatch } from "react-redux";
import { changeAllStatusEnd} from "../../app/orderCard/orderCardSlice";


interface ItemsState {
  new: IOrderCard[];
  preparation: IOrderCard[];
  ready: IOrderCard[];
  ontheway: IOrderCard[];
}

const Content = () => {

  const { orderCards } = useSelector((state: RootState) => state.orderCard);
  const dispatch = useDispatch()
  
  const filtredOrders = (orderCardsData:IOrderCard[]) => {
    return {
      new: orderCardsData.filter((order) => order.status === "new"),
      preparation: orderCardsData.filter((order) => order.status === "preparation"),
      ready: orderCardsData.filter((order) => order.status === "ready"),
      ontheway: orderCardsData.filter((order) => order.status === "ontheway"),
    }
  }
  const [items, setItems] = useState<ItemsState>(filtredOrders(orderCards)); 
  

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  );


  const handleDragOver = (event: DragOverEvent) => {
   
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    let activeContainer: keyof ItemsState | null = null;

    for (const key in items) {
      if (items[key as keyof ItemsState].some(item => item.id === activeId)) {
        activeContainer = key as keyof ItemsState;
        break;
      }
    }

    if (!activeContainer) return;
    const activeItem = items[activeContainer].find(item => item.id === activeId);
    if (!activeItem) return;

    
    const isOverContainer = Object.keys(items).includes(overId as string);
    if (isOverContainer && activeContainer !== overId) {
      const toStatus = overId as keyof ItemsState;

      setItems(prev => {
        const newActiveList = prev[activeContainer!].filter(item => item.id !== activeId);
        const newOverList = [{...activeItem, status : toStatus}, ...prev[toStatus]];
        return {
          ...prev,
          [activeContainer!]: newActiveList,
          [toStatus]: newOverList,
        };
      });
      return;
    }

  
    let overContainer: keyof ItemsState | null = null;

    for (const key in items) {
      if (items[key as keyof ItemsState].some(item => item.id === overId)) {
        overContainer = key as keyof ItemsState;
        break;
      }
    }

    if (activeContainer && overContainer && activeContainer !== overContainer) {
      const activeItem = items[activeContainer].find(item => item.id === activeId);
      if (!activeItem) return;

   
      setItems(prev => {
        const newActiveList = prev[activeContainer!].filter(item => item.id !== activeId);
        const newOverList = [...prev[overContainer!], { ...activeItem, status: overContainer }];

        return {
          ...prev,
          [activeContainer!]: newActiveList,
          [overContainer!]: newOverList,
        };
      });
    }

  };


  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const activeId = active.id;
    const overId = over.id;

    let container: keyof ItemsState | null = null;
    for (const key in items) {
      if (items[key as keyof ItemsState].some(item => item.id === activeId)) {
        container = key as keyof ItemsState;
        break;
      }
    }

    if (!container) return;

    const itemsInContainer = items[container];
    const oldIndex = itemsInContainer.findIndex(item => item.id === activeId);
    const newIndex = itemsInContainer.findIndex(item => item.id === overId);
    
    setItems(prev => {
      return {
        ...prev,
        [container!]: arrayMove(prev[container!], oldIndex, newIndex),
      }
    });

    dispatch(changeAllStatusEnd([...items.new, ...items.preparation, ...items.ready, ...items.ontheway]))
  };


  return (
    <div className="min-h-[calc(100vh-70px)] max-h-[calc(100vh-70px)] overflow-x-auto mt-[5px] bg-white rounded-sm shadow-sm">
      <div className="flex gap-[10px] p-[8px] items-start">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCorners}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <DropContainer status={"new"} items={items.new} />
          <DropContainer status={"preparation"} items={items.preparation} />
          <DropContainer status={"ready"} items={items.ready} />
          <DropContainer status={"ontheway"} items={items.ontheway} />

        </DndContext>
      </div>
    </div>
  );
};



export default Content;
