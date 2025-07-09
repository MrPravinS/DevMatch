import axios from "axios";
import { useState } from "react";
import {Link} from "react-router"
import {motion} from "framer-motion"
export const SignIn = () => {
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")


 const handleSignIn = async() => {
    try {
        const res = await axios.post("http://localhost:7777/login",{
            password,
            email
        },{
            withCredentials:true
        })


    } catch (error) {
        console.log("Sign In failed.. " , error);
        
    }
 }
  return (
    <motion.div
     initial={{opacity:0, y:60}}
     animate={{opacity:1, y:0}}
     transition={{duration:0.7}}
     className="flex  justify-center m-6">
      <div className="card card-dash bg-base-300 w-96 ">
        <div className="card-body  ">
          <h2 className="card-title justify-center mb-4">Sign In</h2>

           
          <label className="floating-label m-2">
            <input
             value={email}
             onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
              className="input input-md"
            />
            <span>Email</span>
          </label>
          <label className="floating-label m-2">
            <input
            value={password}
             onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="password"
              className="input input-md"
            />
            <span>Password</span>
          </label>
          

          <div className=" card-actions justify-center m-2">
            <button className="btn btn-primary  w-full items-center" onClick={handleSignIn}>Sign In</button>
            <p className="font-semibold text-center mt-2">Don't have an account ?  <Link  className="hover:underline text-blue-300" to="/">Sign Up</Link></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
