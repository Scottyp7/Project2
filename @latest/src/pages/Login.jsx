
import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import LoginForm from "../components/LoginF"
import '../styles/LoginForm.css'

export default function Login()
{
    const {currentUser, handleUpdateUser} = useContext(UserContext)



    {/* if(!currentUser.email)
       return(<>
            <LoginForm></LoginForm>
        </>)*/}

    return(
    <>
    <div style={{display:"inline-flex",justifyContent:"space-evenly", width:"100%"}}>


        <div className="App">
            <img style={{marginTop:48}} src="https://png.pngtree.com/thumb_back/fw800/background/20230901/pngtree-an-image-of-sports-equipment-and-equipment-image_13168221.jpg" width={"400"} height={"420"} ></img>      
        </div>

        <div style={{float:"right"}}>
            <LoginForm />
        </div>

        <div className="App">
            <img style={{marginTop:48}} src="https://png.pngtree.com/thumb_back/fw800/background/20230901/pngtree-an-image-of-sports-equipment-and-equipment-image_13168221.jpg" width={"400"} height={"420"}></img>

        </div>
    </div>
    </>
    
    )
}

