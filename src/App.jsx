//  import { Button } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import Auth from "./pages/AuthPage/Auth"
import PageLayout from "./Layout/PageLayout/PageLayout"
import ProfilePage from "./pages/ProfilePage/ProfilePage"




function App() {

  return (
    <PageLayout>
    <Routes>
       <Route path = '/' element={ <HomePage/>} />
       <Route path = '/auth' element={ <Auth/>} />
       <Route path = '/:username' element={ <ProfilePage />} />
    </Routes>
    </PageLayout>
  )
}

export default App
