import { Outlet } from "react-router";
// import { Navbar } from "./Navbar";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";


export const Body = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}