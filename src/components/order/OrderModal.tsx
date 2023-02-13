import { useState } from "react";
import Modal from "../ui/Modal";
import OrderCard from "./OrderCard";

const OrderModal = () => {
  const [displayModal, setDisplayModal] = useState(true);
  const onDismiss = () => {
    setDisplayModal(false);
  };
  return (
    <Modal display={displayModal} onDismiss={onDismiss}>
      <OrderCard />
    </Modal>
  );
};

export default OrderModal;
