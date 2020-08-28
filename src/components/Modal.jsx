import React from "react";
import { Modal } from "@material-ui/core";

export default ({ open, handleClose, className, backdrop, children }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      className={className}
      onBackdropClick={backdrop}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      {children}
    </Modal>
  );
};
