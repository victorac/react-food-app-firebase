import { useRef, forwardRef } from "react";
import classes from "./FoodItemForm.module.css";

interface Props {
  onAdd: VoidFunction;
}

const FoodItemForm = forwardRef<HTMLInputElement, Props>(({ onAdd }, ref) => {
  const addHandler = () => {
    onAdd();
  };

  return (
    <div className={classes.itemForm}>
      <label className={classes.formLabel}>Amount:</label>
      <input
        ref={ref}
        className={classes.formInput}
        type="number"
        defaultValue={1}
        min={1}
        step={1}
        max={10}
      />
      <button className={classes.formAction} type="button" onClick={addHandler}>
        Add
      </button>
    </div>
  );
});

export default FoodItemForm;
