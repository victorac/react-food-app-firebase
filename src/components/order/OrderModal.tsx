import { useState } from "react";
import Modal from "../ui/Modal";

const CheckoutModal = () => {
  const [displayModal, setDisplayModal] = useState(false);
  const onDismiss = () => {
    setDisplayModal(false);
  };
  return (
    <Modal display={displayModal} onDismiss={onDismiss}>
      <div></div>
    </Modal>
  );
};

export default CheckoutModal;
