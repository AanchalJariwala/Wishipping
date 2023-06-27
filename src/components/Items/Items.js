import ItemsSummary from "./ItemsSummary";
import AvailableItems from "./AvailableItems";
import { Fragment, useState, createContext, useContext } from "react";
import List from '../Layout/Filter/List';
import '../Layout/Filter/List.css';
import * as axios from 'axios';
import { useEffect } from 'react'
import DUMMY_ITEMS from './AvailableItems';
import CartContext from "../../store/cart-context";

const Items = () => {
    const [filteredlabel, setFilteredlabel] = useState('');
    const cartContext = useContext(CartContext);

    useEffect(() => {

        axios.default.get("http://localhost:8001/products")
            .then((response) => {
                console.log("Use Effect called");
                console.log(response.data);
                // setProducts(response.data['products']);
                cartContext.fetchProducts(response.data['products'])
            });
    },[]);

    return (
        <Fragment >
            <ItemsSummary />
            <div className='aaa'>
                <List setFilteredlabel={setFilteredlabel} filteredlabel={filteredlabel} />
                    <AvailableItems selected={filteredlabel} />
            </div>
        </Fragment>
    )

}
export default Items;