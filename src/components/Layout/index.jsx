import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";


const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="container m-auto mt-16">
                <Outlet />
            </div>
        </>
    )
}

export default Layout;