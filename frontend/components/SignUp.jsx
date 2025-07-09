import { useState } from "react";
import {Link} from "react-router"
import axios from "axios"
import {motion} from "framer-motion"
export const SignUp = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignUp = async(e) => {
    e.preventDefault()

    try {
      const res = axios.post("http://localhost:7777",{
        email,
        password,
        username
      },
      {
        withCredentials:true
      }
    )
      
    } catch (error) {
      console.log("Error while Sign up", error);
      
    }
  }

  return (
    <motion.div 
    initial={{opacity:0, y:60}}
     animate={{opacity:1, y:0}}
     transition={{duration:0.7}}
     viewport={{once:true}}
    className="flex  justify-center m-6">
      <div className="card card-dash bg-base-300 w-96 ">
        <div className="card-body  ">
          <h2 className="card-title justify-center mb-4">Sign Up</h2>

           <label className="floating-label m-2">
            <input
             value={username}
             onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="username"
              className="input input-md"
            />
            <span>username</span>
          </label>
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
            <button className="btn btn-primary  w-full items-center" onClick={handleSignUp}>Sign Up</button>
            <p className="font-semibold text-center mt-2" >Already have an account ?  <Link  className="hover:underline text-blue-300" to="/signin">Sign In</Link></p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
