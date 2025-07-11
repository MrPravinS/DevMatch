import {useSelector } from "react-redux"
import { EditProfile } from "./EditProfile";
import { FeedCard } from "./FeedCard";

export const Profile = () => {
    
    const user = useSelector((store) => store.user)
    console.log(user);
    // const { photoUrl,firstName, lastName, age, gender, about} = user
    
    

   
    return (
        
          <EditProfile user={user}/>
        

    )
}