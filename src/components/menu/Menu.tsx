import Card from "../ui/Card";
import classes from "./Menu.module.css";
import MenuHeader from "./MenuHeader";

const Menu = () => {
  return (
    <>
      <MenuHeader />
      <div className={classes.menu}>
        <h1>Menu</h1>
        <main>
          <Card className={classes.menuCard}>
            <span>Menu</span>
          </Card>
        </main>
      </div>
    </>
  );
};

export default Menu;
