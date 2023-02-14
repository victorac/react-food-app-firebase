import classes from "./ProgressIndicator.module.css";
const ProgressIndicator = () => {
  return (
    <div className={classes.indicator}>
      <div className={classes.progress} />
      <span>Loading</span>
    </div>
  );
};

export default ProgressIndicator;
