import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center bg-white sm:py-2 h-14">
            <ul className="container flex items-center justify-center h-full m-auto sm:gap-4 ">
                <NavLink className='relative flex items-center justify-center w-full h-full px-2 overflow-hidden transition-all duration-300 bg-[#FDF7E4] border border-[#FAEED1] shadow hover:bg-[#FAEED1] navlink sm:rounded-xl' to={'/'}>
                    <li className="font-medium text-center navItem">Home</li>
                </NavLink>
                <NavLink className='relative flex items-center justify-center w-full h-full px-2 overflow-hidden transition-all duration-300 bg-[#FDF7E4] border border-[#FAEED1] shadow hover:bg-[#FAEED1] navlink sm:rounded-xl' to={'/data-table'}>
                    <li className="font-medium text-center navItem">Table</li>
                </NavLink>
                <NavLink className='relative flex items-center justify-center w-full h-full px-2 overflow-hidden transition-all duration-300 bg-[#FDF7E4] border border-[#FAEED1] shadow hover:bg-[#FAEED1] navlink sm:rounded-xl' to={'/types-table'}>
                    <li className="font-medium text-center navItem">Types</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navbar;