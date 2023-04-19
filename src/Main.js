import Home from "./components/Login/Home";
import { BrowserRouter, Route, useNavigate, Routes } from 'react-router-dom';
import Thankyou from "./components/Checkout/Thankyou";
import App from "./App";
import Items from "./components/Items/Items";


const Main = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" exact element={<Home></Home>}></Route>
                    <Route path="/HomePage" exact element={<App></App>}></Route>
                    <Route path="/thankyou" exact element={<Thankyou></Thankyou>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )

}
export default Main;