import classes from './ItemsSummary.module.css';

const ItemsSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Shop anytime, anywhere</h2>
            <p>
                Choose your favourite items from our broad selection of available items
                and enjoy shopping
            </p>
            <p>
                All our items are of high-quality
            </p>
        </section>
    );
};

export default ItemsSummary;