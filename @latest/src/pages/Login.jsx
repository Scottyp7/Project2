
import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import LoginForm from "../components/LoginF"
import '../styles/LoginForm.css'

export default function Login()
{
    const {currentUser, handleUpdateUser} = useContext(UserContext)



    {/*if(!currentUser.email)
        return(<>
            <LoginForm></LoginForm>
        </>)*/}

    return(
    <>
    <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>


        <div className="App">
            <LoginForm />
        </div>
    </div>
    </>
    
    )
}

