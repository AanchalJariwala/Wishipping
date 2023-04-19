import classes from'./DifferentItems.module.css';
import ItemForm from './ItemForm';
import {useContext} from 'react';
import CartContext from '../../../store/cart-context';



const DifferentItems=(props)=>{
    const cartCtx=useContext(CartContext);
    const price=`$${Number(props.price).toFixed(2)}`;

    const addToCartHandler=amount=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price,
        })
    };
return(
    <li className={classes.item}>
            <img
            
            className={classes.img}
           src={props.image}
            style={{
                display: "flex", width: "55%", height: "215px", border: "1px solid #ddd",
                borderRadius: "15px",flex: '0.75' 

            }}
        />
        <div className={classes.align}>
           
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <ItemForm id={props.id} onAddToCart={addToCartHandler}/>
        </div>
    </li>
)
}
export default DifferentItems;