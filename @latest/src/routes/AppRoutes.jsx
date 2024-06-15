import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Golf from "../pages/Golf"
import Home from "../pages/Home"
import About from "../pages/About"
import ProtectedRoute from "../routes/ProtectedRoutes"
import Shop from "../pages/Shop"
import CurrentEvents from "../../CurrentEvents"
import MySports from "../pages/MySports"

export default function AppRoutes(props){


    return(
<Routes>
    <Route index element={<Home {...props}></Home>}></Route>

    <Route path="About" element={<About></About>}></Route>

    <Route path="MySports" element={<MySports></MySports>}></Route>

    <Route path="CurrentEvents" element={<CurrentEvents></CurrentEvents>}></Route>

    <Route path="Shop" element={<Shop></Shop>}></Route>
    
    <Route path="Golf" element={<Golf></Golf>}></Route> 

                
            
     
           
</Routes>


    )
} {/*<ProtectedRoute></ProtectedRoute>}>*/}