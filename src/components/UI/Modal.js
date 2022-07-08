import { Fragment } from "react";
import { createPortal } from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = ({ onCloseCart }) => {
    return <div className={classes.backdrop} onClick={onCloseCart} />
}
const ModalOverlay = ({ children }) => {
    return <div className={classes.modal}>
        <div className={classes.content}>
            {children}
        </div>
    </div>
}

const Modal = ({ children, onCloseCart }) => {
    return <Fragment>
        {createPortal(<Backdrop onCloseCart={onCloseCart} />, document.getElementById('overlays'))}
        {createPortal(<ModalOverlay>{children}</ModalOverlay>, document.getElementById('overlays'))}
    </Fragment>
}

export default Modal;