import  Navbar  from "./components/Navbar"
import  Spinner  from "./components/Spinner"
import ModalSearch  from "./components/ModalSearch"
import  Home  from "./components/Home"
import Featurs  from "./components/Featurs"
import Fruits  from "./components/Fruits"
import Vesitable  from "./components/Fruits"
import Footer from "./components/Footer"
import { Routes, Route } from "react-router-dom"
import Shop from "./components/Shop"
import ShopDetails from "./components/ShopDetails"
import Checkout from "./components/Checkout"
import Testimonial from "./components/Testimonial"
import Contact from "./components/Contact"
import Cart from "./components/Cart"
import NotFound from "./components/NotFound"
import Login from "./components/Login"


function App() {


  return (
    <>

    {/* <Spinner/> */}
    <Navbar/>
    <ModalSearch/>
    {/* <Home/> */}
    {/* <Featurs/>
    <Fruits/>
    <Vesitable/> */}
    
    <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="shop" element={ <Shop/> } />
        <Route path="shop-details" element={ <ShopDetails/> } />
        <Route path="cart" element={ <Cart/> } />
        <Route path="checkout" element={ <Checkout/> } />
        <Route path="testimonial" element={ <Testimonial/> } />
        <Route path="not-found" element={ <NotFound/> } />
        <Route path="contact" element={ <Contact/> } />
        <Route path="login" element={ <Login/> } />
      </Routes>
      <Footer/>

      
    </>
  )
}

export default App
