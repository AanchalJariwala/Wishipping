import ItemsSummary from "./ItemsSummary";
import AvailableItems from "./AvailableItems";
import { Fragment } from "react";
import List from '../Layout/Filter/List';
import '../Layout/Filter/List.css';

const Items = () => {
    return (
        <Fragment >

            <ItemsSummary />
            <div className='aaa'>
                <List></List>
                <AvailableItems />
            </div>

        </Fragment>
    )

}
export default Items;