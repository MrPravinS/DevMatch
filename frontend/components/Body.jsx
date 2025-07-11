import { Outlet, useNavigate } from "react-router";
// import { Navbar } from "./Navbar";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { addUser } from "../utils/userSlice";





export const Body = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const fetchUser = async() => {

      try {
        const res = await axios.get("http://localhost:7777/profile/view",
            {
                withCredentials:true
            }
        )

        dispatch(addUser(res.data))

      } catch (error) {
        if(error.response.status === 401){

            navigate("/login")
        }
        console.log("Error in body Components", error);
        
      }
    }

    useEffect(()=>{
        fetchUser()
    },[])
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}