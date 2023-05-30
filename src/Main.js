import Home from "./components/Login/Home";
import { BrowserRouter, Route, useNavigate, Routes } from 'react-router-dom';
import Thankyou from "./components/Checkout/Thankyou";
import App from "./App";
import './Main.css';
import Items from "./components/Items/Items";
import Checkout from "./components/Checkout/Checkout";
import isCheckout from './components/Cart/Cart'
import Checkout_1 from "./components/Checkout/Checkout_1";

const Main = () => {
   
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" exact element={<Home></Home>}></Route>
                    <Route path="/HomePage" exact element={<App></App>}></Route>
                    <Route  classname="app"path="/Checkout" exact element={<Checkout_1/>}></Route>
                    <Route path="/thankyou" exact element={<Thankyou></Thankyou>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )

}
export default Main;