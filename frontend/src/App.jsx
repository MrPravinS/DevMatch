import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import { Body } from "./components/Body";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";
import {Provider} from "react-redux"
import { appStore } from "../utils/appStore";
import { Profile } from "./components/Profile";
import { Feed } from "./components/Feed";
import { Connections } from "./components/Connections";
import {Requests} from "./components/Requests"

function App() {

  return (
    <Provider store={appStore}>

   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Body/>}>
       <Route path="/feed" element={<Feed/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<SignIn/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/requests" element={<Requests/>}/>
      <Route path="/connections" element={<Connections/>}/>
    </Route>
   
   </Routes>
   </BrowserRouter>
    </Provider>
  )
}

export default App
