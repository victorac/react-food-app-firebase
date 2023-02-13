import { useState } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface Props {
  children: React.ReactNode;
  display?: boolean;
  onDismiss: VoidFunction;
}

const Modal: React.FC<Props> = ({ children, display = false, onDismiss }) => {
  const backdropElement = document.getElementById("backdrop-root")!;
  const modalElement = document.getElementById("modal-root")!;
  const backdropClickHandler = () => {
    onDismiss();
  };
  console.log(display);
  return (
    <>
      {display &&
        ReactDOM.createPortal(
          <div
            className={classes.backdrop}
            onClick={backdropClickHandler}
          ></div>,
          backdropElement
        )}
      {display &&
        ReactDOM.createPortal(
          <div className={classes.modal}>{children}</div>,
          modalElement
        )}
    </>
  );
};

export default Modal;
