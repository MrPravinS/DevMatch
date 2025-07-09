import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import { Body } from "../components/Body";
import { SignIn } from "../components/SignIn";
import { SignUp } from "../components/SignUp";
import {Provider} from "react-redux"
import { appStore } from "../utils/appStore";

function App() {

  return (
    <Provider store={appStore}>

   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Body/>}>
      <Route path="/" element={<SignUp/>}/>
      <Route path="/signin" element={<SignIn/>}/>
      
    </Route>
   
   </Routes>
   </BrowserRouter>
    </Provider>
  )
}

export default App
