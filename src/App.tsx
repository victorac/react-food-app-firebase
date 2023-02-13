import { useState } from "react";
import Modal from "./components/ui/Modal";

function App() {
  const [displayModal, setDisplayModal] = useState(false);
  const onDismiss = () => {
    setDisplayModal(false);
  };
  return (
    <>
      <Modal display={displayModal} onDismiss={onDismiss}>
        <div>Hey There!</div>
      </Modal>
      <button onClick={() => setDisplayModal((prev) => !prev)}>
        Display modal!
      </button>
    </>
  );
}

export default App;
