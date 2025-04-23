import SearchInput from "../basicComp/SearchInput"
import TimeCurrent from "../basicComp/TimeCurrent"

const Header = () => {
    return (
        <div className="p-[10px] bg-white rounded-sm shadow-sm min-h-[55px] max-h-[55px] flex justify-between items-center gap-1">
            <div>
                Сегодняшние заказы
            </div>
            <div className="flex justify-end items-center gap-1">
                <SearchInput/>
                <TimeCurrent/>
            </div>
        </div>
    )
}

export default Header
