import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Golf from "../pages/Golf"
import Home from "../pages/Home"
import About from "../pages/About"
import ProtectedRoute from "../routes/ProtectedRoutes"
import Login from "../pages/Login"
import Profile from "../pages/Profile"
import NewsPage from "../pages/NewsPage"
import Shop2 from "../pages/Shop2"

export default function AppRoutes(props){


    return(
<Routes>
    <Route index element={<Home {...props}></Home>}></Route>

    <Route path="About" element={<About></About>}></Route>

    <Route path="Profile" element={<ProtectedRoute><Profile></Profile></ProtectedRoute>}></Route>

    <Route path="Login" element={<Login></Login>}></Route>

    <Route path="News" element={<NewsPage></NewsPage>}></Route>

    <Route path="Shop2" element={<Shop2></Shop2>}></Route>

    <Route path="Golf" element={<Golf></Golf>}></Route> 

</Routes>


    )
} {/*<>*/}