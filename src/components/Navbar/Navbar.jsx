import { useState } from "react";
import { GiNinjaStar } from "react-icons/gi";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

function Navbar(props) {
    const {isMobile} = props;
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
            <input className="bg-white ml-2 rounded-xl h-[30px]"/>
            <ul className="ml-auto text[20px] font-bold">
                {openMenu && isMobile ? (
                    <MdOutlineClose className="size-[30px] cursor-pointer" onClick={handleMenu}/>
                ) : !openMenu && isMobile ? (
                    <HiOutlineMenu className="size-[30px] cursor-pointer" onClick={handleMenu}/>
                ) : (
                    <div className="flex item-center ">
                        <li className="cursor-pointer mr-8 hover:text-orange-200 transition-all duration-200">Add ninja</li>
                        <li className="cursor-pointer hover:text-orange-200 transition-all duration-200">Login</li>
                    </div>
                )}
                {openMenu && (
                    <div className="absolute right-8 bg-white p-6 text-center rounded-xl">
                        <li className="cursor-pointer">Add ninja</li>
                        <li className="cursor-pointer mt-2">Login</li>
                    </div>
                )}
            </ul>
        </nav>
    )
}

export default Navbar
