import Menu from "./components/menu/Menu";
import OrderModal from "./components/order/OrderModal";
import { CartProvider } from "./store/cart-context";

function App() {
  return (
    <CartProvider>
      <OrderModal />
      <Menu />
    </CartProvider>
  );
}

export default App;
