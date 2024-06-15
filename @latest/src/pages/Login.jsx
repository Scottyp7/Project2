import LoginForm from "../components/LoginForm"
import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { Link } from "react-router-dom"
import NewsCard from "../components/NewsCard"
export default function Home()
{
    const {currentUser, handleUpdateUser} = useContext(UserContext)

    const myStyle = {
    }

    if(!currentUser.email)
        return(<>
            <LoginForm></LoginForm>
        </>)

    return(
    <>

    </>
    
    )
}

