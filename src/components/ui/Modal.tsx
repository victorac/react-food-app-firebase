import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface Props {
  children: React.ReactNode;
}

const Modal: React.FC<Props> = ({ children }) => {
  const backdropElement = document.getElementById("backdrop-root")!;
  const modalElement = document.getElementById("modal-root")!;
  return (
    <>
      {ReactDOM.createPortal(
        <div className={classes.backdrop}></div>,
        backdropElement
      )}
      {ReactDOM.createPortal(
        <div className={classes.modal}>
            {children}
        </div>,
        modalElement
      )}
    </>
  );
};

export default Modal;
