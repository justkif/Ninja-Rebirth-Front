import { GiNinjaStar } from "react-icons/gi";
import { HiOutlineMenu } from "react-icons/hi";

function Navbar() {
    return (
        <nav className="flex item-center">
            <div className="flex item-center">
                <GiNinjaStar className="size-[30px] cursor-pointer"/>
                <div className="text-[20px] font-bold ml-2 cursor-pointer"> NR Wiki </div>
            </div>
            <ul className="ml-auto text[16px] font-semibold">
                <HiOutlineMenu className="size-[30px] cursor-pointer"/>
            </ul>
        </nav>
    )
}

export default Navbar