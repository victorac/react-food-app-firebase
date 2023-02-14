import { useState } from "react";
import CartCard from "../cart/CartCard";
import Modal from "../ui/Modal";
import OrderCard from "./OrderCard";

const OrderModal = () => {
  const [displayModal, setDisplayModal] = useState(true);
  const [checkout, setCheckout] = useState(false);

  const onDismissModal = () => {
    setDisplayModal(false);
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
    <Modal display={displayModal} onDismiss={onDismissModal}>
      {content}
    </Modal>
  );
};

export default OrderModal;
