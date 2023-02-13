import classes from "./OrderSummary.module.css";

const OrderSummary = () => {
    return <div className={classes.summary}>
        <ul>
            <li>Food item 1</li>
            <li>Food item 2</li>
        </ul>
    </div>
}

export default OrderSummary;