import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export const Profile = () => {
    
    const user = useSelector((store) => store.user)
    console.log(user);
    const { photoUrl,firstName, lastName, age, gender} = user
    
    const dispatch = useDispatch()
    

    const fetchUser = async() => {
        try {
            const res = await axios.get("http://localhost:7777/profile/view",{withCredentials:true})
            console.log(res.data);
            
        } catch (error) {
            console.log("Error while fetching User");
            
        }
    }

    useEffect(()=>{
        fetchUser()
    },[])
    return (
        <div className="flex  justify-center m-15">
            <img src={photoUrl} alt="" />
            <h1>{firstName}</h1>
            <p>{lastName}</p>
        </div>
    )
}