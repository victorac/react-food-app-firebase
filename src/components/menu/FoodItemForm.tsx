import classes from  "./FoodItemForm.module.css";

const FoodItemForm = () => {
    return <form className={classes.itemForm}>
        <label className={classes.formLabel}>Amount:</label>
        <input className={classes.formInput} type="number" min={1} step={1} max={10}/>
        <button className={classes.formAction} type="submit">Add</button>
    </form>
}

export default FoodItemForm;