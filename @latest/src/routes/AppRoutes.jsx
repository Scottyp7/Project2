import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import GolfRankings from "../pages/GolfRankings"
import Home from "../pages/Home"
import About from "../pages/About"
import ProtectedRoute from "../routes/ProtectedRoutes"

export default function AppRoutes(props){


    return(
<Routes>
    <Route index element={<Home {...props}></Home>}></Route>

    <Route path="About" element={<About></About>}></Route>
    
    <Route path="GolfRankings" element={
            <ProtectedRoute>
                <GolfRankings></GolfRankings> 
            </ProtectedRoute>}>
    </Route>   

</Routes>


    )
}