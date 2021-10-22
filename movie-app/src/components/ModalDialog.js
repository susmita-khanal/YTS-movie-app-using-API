import React from "react";
import { Modal } from "react-bootstrap";

const ModalDialog = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <Modal isOpen={isModalOpen}>
        <Link to="/login"></Link>
      </Modal>
    </>
  );
};

export default ModalDialog;
