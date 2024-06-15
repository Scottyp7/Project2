import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import GolfRankings from "../pages/GolfRankings"
import Home from "../pages/Home"
import About from "../pages/About"
import ProtectedRoute from "../routes/ProtectedRoutes"
import Shop from "../pages/Shop"
import CurrentEvents from "../../CurrentEvents"

export default function AppRoutes(props){


    return(
<Routes>
    <Route index element={<Home {...props}></Home>}></Route>

    <Route path="About" element={<About></About>}></Route>

    <Route path="CurrentEvents" element={<CurrentEvents></CurrentEvents>}></Route>

    <Route path="Shop" element={<Shop></Shop>}></Route>
    
    <Route path="GolfRankings" element={<GolfRankings></GolfRankings>}></Route> 

                
            
     
           
</Routes>


    )
} {/*<ProtectedRoute></ProtectedRoute>}>*/}