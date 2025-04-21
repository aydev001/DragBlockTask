import { FaStoreAlt } from "react-icons/fa"; 
import { GiMoneyStack } from "react-icons/gi"; 
import { MdOutlineDirectionsRun } from "react-icons/md"; 
import React from 'react'
import { PaymentStatus } from '../../types/enums'
import paymeLogo from "../../assets/payme.png"
import clickLogo from "../../assets/click.jpg"

interface PaymentStatusLogoProps {
    status: "cash" | "payme" | "click"
}

const PaymentStatusLogo: React.FC<PaymentStatusLogoProps> = ({ status }) => {

    if (status === PaymentStatus.CASH) {
        return (
            <div className='flex justify-end items-center gap-1 text-gray-500'>
                <div className="text-[16px]">
                    <GiMoneyStack />
                </div>
                <div>
                    <MdOutlineDirectionsRun />
                </div>
            </div>
        )
    }

    if (status === PaymentStatus.PAYME) {
        return (
            <div className='flex justify-end items-center gap-1'>
                <div>
                    <img className="w-[16px] h-[16px]" src={paymeLogo} alt="" />
                </div>
                <div className="text-gray-500">
                    <FaStoreAlt />
                </div>
            </div>
        )
    }

    if (status === PaymentStatus.CLICK) {
        return (
            <div className='flex justify-end items-center gap-1'>
                <div>
                    <img className="w-[16px] h-[16px]" src={clickLogo} alt="" />
                </div>
                <div className="text-gray-500">
                    <FaStoreAlt />
                </div>
            </div>
        )
    }

}

export default PaymentStatusLogo
