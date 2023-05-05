import ItemsSummary from "./ItemsSummary";
import AvailableItems from "./AvailableItems";
import { Fragment, useState } from "react";
import List from '../Layout/Filter/List';
import '../Layout/Filter/List.css';


const Items = () => {
    const [filteredlabel, setFilteredlabel] = useState('');
   
    return (
        <Fragment >

            <ItemsSummary />
            <div className='aaa'>
                <List setFilteredlabel={setFilteredlabel} />
                <AvailableItems selected={filteredlabel}/>
            </div>

        </Fragment>
    )

}
export default Items;