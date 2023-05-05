import classes from './CartItem.module.css';
import Cart from './Cart';




const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
      <div className={classes.summary}>
        <img
            
          className={classes.img}
           src={props.image}
            style={{
                display: "flex", width: "7em", height: "7em", border: "1px solid #ddd",
                borderRadius: "15px",flex: '0.75' 

            }}
        />
        <div className={classes.align}>
          <h2 className={classes.name}>{props.name}</h2>
          <span className={classes.price}>{price}</span>
          
          </div>
        </div>


      
        
      </div>
      <div className={classes.actions}>
      <span className={classes.amount}>x{props.amount}</span>
        <button onClick={props.onRemove}>−</button>
        <button onClick={props.onAdd}>+</button>
      
 


 
      </div>
    </li>
  );
};

export default CartItem;
