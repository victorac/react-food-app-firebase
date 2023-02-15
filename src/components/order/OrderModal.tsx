import { useState } from "react";
import CartCard from "../cart/CartCard";
import Modal from "../ui/Modal";
import OrderCard from "./OrderCard";

interface Props {
  display: boolean;
  onDismiss: VoidFunction;
}

const OrderModal: React.FC<Props> = ({ display, onDismiss }) => {
  const [checkout, setCheckout] = useState(false);

  const onDismissModal = () => {
    onDismiss();
  };
  const onOrder = () => {
    setCheckout(true);
  };
  const onConfirm = () => {};

  const content = checkout ? (
    <OrderCard onCancel={onDismissModal} onConfirm={onConfirm} />
  ) : (
    <CartCard onCancel={onDismissModal} onOrder={onOrder} />
  );
  return (
    <Modal display={display} onDismiss={onDismissModal}>
      {content}
    </Modal>
  );
};

export default OrderModal;
