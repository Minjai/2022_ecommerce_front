import { Outlet } from "react-router-dom"
import Footer from "../shared/Footer"
import Header from "../shared/Header"

const AppLayout = () => {
  return (
    <>
      {/* <Header/> */}
      <Outlet/>
      <Footer/>
    </>
  )
}

export default AppLayout