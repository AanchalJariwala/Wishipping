import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import { Button } from "bootstrap";


const HeaderCartButton = (props) => {
    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

    const cartCtx = useContext(CartContext);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);


    const btnClasses = `${classes.button} ${buttonIsHighlighted ? classes.bump : ""}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonIsHighlighted(true);

        const timer = setTimeout(() => {//empty string is added instead of bump class
            setButtonIsHighlighted(false);
        }, 300)
        return () => {
            clearTimeout(timer);
        }
    }, [items]);
    return (
     
        <div >
            <button className={btnClasses} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon />
                </span>
                <span>
                    Your Cart
                </span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
            
          
        </div>

    )
}
export default HeaderCartButton;