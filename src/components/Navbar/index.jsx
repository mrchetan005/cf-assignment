import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center bg-white sm:pt-4 h-14">
            <ul className="container flex items-center justify-center h-full m-auto sm:gap-4 ">
                <NavLink className='relative flex items-center justify-center w-full h-full px-2 overflow-hidden transition-all duration-300 bg-gray-200 border shadow hover:bg-gray-300 navlink sm:rounded-xl' to={'/'}>
                    <li className="text-center navItem">Home</li>
                </NavLink>
                <NavLink className='relative flex items-center justify-center w-full h-full px-2 overflow-hidden transition-all duration-300 bg-gray-200 border shadow hover:bg-gray-300 navlink sm:rounded-xl' to={'/data-table'}>
                    <li className="text-center navItem">Table</li>
                </NavLink>
                <NavLink className='relative flex items-center justify-center w-full h-full px-2 overflow-hidden transition-all duration-300 bg-gray-200 border shadow hover:bg-gray-300 navlink sm:rounded-xl' to={'/types-table'}>
                    <li className="text-center navItem">Types</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navbar;