import { useState } from "react";
import { GiNinjaStar } from "react-icons/gi";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <nav className="flex item-center">
            <div className="flex item-center">
                <GiNinjaStar className="size-[30px] cursor-pointer"/>
                <div className="text-[20px] font-bold ml-1 cursor-pointer"> NR Wiki </div>
            </div>
            <input className="bg-white ml-2 rounded-xl "/>
            <ul className="ml-auto text[20px] font-semibold">
                {openMenu ? (
                    <MdOutlineClose className="size-[30px] cursor-pointer" onClick={handleMenu}/>
                ) : (
                    <HiOutlineMenu className="size-[30px] cursor-pointer" onClick={handleMenu}/>
                )}
                {openMenu && (
                    <div className="absolute right-8 bg-white p-6 text-center rounded-xl">
                        <li className="cursor-pointer">Add ninja</li>
                        <li className="cursor-pointer">Login</li>
                    </div>
                )}
            </ul>
        </nav>
    )
}

export default Navbar