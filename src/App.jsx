//  import { Button } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage/HomePage"
import Auth from "./pages/AuthPage/Auth"
import PageLayout from "./Layout/PageLayout/PageLayout"




function App() {

  return (
    <PageLayout>
    <Routes>
       <Route path = '/' element={ <HomePage/>} />
       <Route path = '/auth' element={ <Auth/>} />
    </Routes>
    </PageLayout>
  )
}

export default App
