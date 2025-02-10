import { useState } from "react";
import { Link } from "react-router-dom";
import { GiNinjaStar } from "react-icons/gi";
import { HiOutlineMenu } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

export default function Navbar(props) {
    const {isMobile} = props;
    const [openMenu, setOpenMenu] = useState(false);
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <nav className="flex item-center">
            <Link className="flex item-center" to={"/"}> {}
                <GiNinjaStar className="size-[30px] cursor-pointer"/>
                <div className="text-[20px] font-bold ml-1 cursor-pointer"> NR Wiki </div>
            </Link>
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
