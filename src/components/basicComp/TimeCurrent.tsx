import { useEffect, useState } from "react";
import { BiTimeFive } from "react-icons/bi";

const TimeCurrent = () => {
    const [time, setTime] = useState<string>(
        new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        }));

    useEffect(() => {
        const intervalId = setInterval(() => {
            const timeNow = new Date().toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
            setTime(timeNow);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="border-[1px] text-[14px] rounded-md border-gray-300 text-gray-700 py-[5px] px-[10px] flex justify-center items-center gap-1">
            <div className="text-gray-600">
                <BiTimeFive />
            </div>
            <div className="text-nowrap">
                {time}
            </div>
        </div>
    );
};

export default TimeCurrent;
