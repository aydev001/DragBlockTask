import { FiCheck } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import React from 'react'
import { OrderStatus } from '../../types/enums'

interface ButtonOrderStatusProps {
    status: "new" | "preparation" | "ready" | "ontheway"
}

const ButtonOrderStatus: React.FC<ButtonOrderStatusProps> = ({ status }) => {

    if (status === OrderStatus.NEW) {
        return (
            <div className="text-[14px] flex justify-between items-center gap-[10px]">
                <button className="btn btn-outline-red">
                    <CgClose />
                    <div>
                        Отменить
                    </div>
                </button>
                <button className="btn btn-solid-blue">
                    <div>
                        <FiCheck />
                    </div>
                    <div>
                        Принят
                    </div>
                </button>
            </div>
        )
    }

    if (status === OrderStatus.PREPARATION) {
        return (
            <div className="text-[14px]">
                <button className="btn btn-outline-indigo">
                    <div>
                        <FiCheck />
                    </div>
                    <div>
                        Готово
                    </div>
                </button>
            </div>
        )
    }

    if (status === OrderStatus.READY) {
        return (
            <div className="text-[14px]">
                <button className="btn btn-outline-indigo">
                    <div>
                        Завершить
                    </div>
                </button>
            </div>
        )
    }
    return (
        <></>
    )
}

export default ButtonOrderStatus
