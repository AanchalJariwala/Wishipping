import ItemsSummary from "./ItemsSummary";
import AvailableItems from "./AvailableItems";
import { Fragment } from "react";

const Items = () => {
    return (
        <Fragment >
            <ItemsSummary />
            <AvailableItems />
        </Fragment>
    )

}
export default Items;