import classes from './AvailableItems.module.css';
import Card from '../UI/Card';
import DifferentItems from './DifferentItems/DifferentItems.js';

const DUMMY_ITEMS = [
    {
        id: 'm1',
        name: 'Shirt',
        description: 'Pure Cotton',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Jeans',
        description: 'Comfortable & Trendy!',
        price: 16.5,
    },

];

const AvailableItems = () => {
    const ItemList = DUMMY_ITEMS.map((item) => 
    (<DifferentItems 
        id={item.id}
        key={item.id} name={item.name} description={item.description} price={item.price} 
    
    />
    ));

    return (
        <section className={classes.items}>
            <Card>
                <ul >{ItemList}</ul>
            </Card>

        </section>
    )
}
export default AvailableItems;