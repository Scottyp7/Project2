
import AppRoutes from "./routes/AppRoutes"
import UserProvider from "./context/UserProvider"
import SearchAppBar from "./components/SportBar"
import TopBar from "./components/TopBar"



function App() {

  return (
<>
  <UserProvider>
    <TopBar></TopBar>
    <SearchAppBar></SearchAppBar>
    <AppRoutes></AppRoutes>  
  </UserProvider>
</>
  )
} 

export default App