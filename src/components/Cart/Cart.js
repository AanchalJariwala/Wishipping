import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import { useContext,useState } from 'react';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = (props) => {

    
    const cartCtx = useContext(CartContext);

    const TotalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const CartItemRemoveHandler = (id) => { 
        cartCtx.removeItem(id);
    };

    const CartItemAddHandler = (item) => {
        cartCtx.addItem(item);
     };
 
    
    
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) =>
            (<CartItem
                image={item.image}
                key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price} 
                
                onRemove={CartItemRemoveHandler.bind(null,item.id)}
                onAdd={CartItemAddHandler.bind(null,item)}
                />
            ))
            }
        </ul>
    )
    return (<Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{TotalAmount}</span>
        </div>
     
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <Link to='/Checkout'><button className={classes.button} >Order</button></Link>}
        </div>
    </Modal>)
}
export default Cart;
