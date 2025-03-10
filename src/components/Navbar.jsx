import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GiNinjaStar } from 'react-icons/gi';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';

export default function Navbar({ isMobile }) {
    const [openMenu, setOpenMenu] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }
    const handleLogout = () => {
        localStorage.removeItem('Token');
        setIsLoggedIn(false);
        navigate(`/`);
    }

    useEffect(() => {
        const token = localStorage.getItem('Token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <nav className='flex item-center'>
            <Link className='flex item-center cursor-pointer' to={`/`}> 
                <GiNinjaStar className='size-[30px]'/>
                <span className='text-[20px] font-bold ml-1'>NR Wiki</span>
            </Link>
            <div className='ml-auto text[20px] font-bold'>
                {openMenu && isMobile ? (
                    <MdOutlineClose className='size-[30px] cursor-pointer' onClick={handleMenu}/>
                ) : !openMenu && isMobile ? (
                    <HiOutlineMenu className='size-[30px] cursor-pointer' onClick={handleMenu}/>
                ) : (
                    <div className='flex item-center'>
                        {isLoggedIn ? (
                            <>
                                <Link className='cursor-pointer mr-8 hover:text-orange-200 transition-all duration-200' to={`/create`}>Add ninja</Link>
                                <span className='cursor-pointer hover:text-orange-200 transition-all duration-200' onClick={handleLogout}>Logout</span>
                            </>
                        ) : (
                            <Link className='cursor-pointer hover:text-orange-200 transition-all duration-200' to={`/login`}>Login</Link>
                        )}
                    </div>
                )}
                {openMenu && (
                    <div className='absolute right-8 bg-white p-6 text-center rounded-xl'>
                        {isLoggedIn ? (
                            <>
                                <Link className='cursor-pointer block' to={`/create`}>Add ninja</Link>
                                <span className='cursor-pointer block mt-2' onClick={handleLogout}>Logout</span>
                            </>
                        ) : (
                            <Link className='cursor-pointer block mt-2' to={`/login`}>Login</Link>
                        )}
                    </div>
                )}
            </div>
        </nav>
    );
}
