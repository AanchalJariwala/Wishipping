import { useState } from 'react';
import CartProvider from './store/CartProvider';
import './App.css';
import Items from './components/Items/Items';
// import Login from './components/Login/Login.js'
import Home from './components/Login/Home';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';


function App() {
  const [cartIsShown,setCartIsShown]=useState(false);

  const ShowCartHandler=()=>{
    setCartIsShown(true);
  }

  const HideCartHandler=()=>{
    setCartIsShown(false);
  }

  return (
    // <Home>

    // </Home>
     <CartProvider>
      {cartIsShown && <Cart onClose={HideCartHandler}/>} 
       <Header onShowCart={ShowCartHandler}/> 
         <main>
          <Items />
      
        </main>
   </CartProvider> 
  )
}


export default App;
