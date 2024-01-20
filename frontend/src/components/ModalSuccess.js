// ModalSuccess.js
import React from 'react';
import Modal from 'react-modal';

const ModalSuccess = ({ isOpen, onClose, onOkClick }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Cliente Cadastrado com Sucesso"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
        },
      }}
    >
      <h2>Cliente Cadastrado com Sucesso!</h2>
      <button onClick={onOkClick}>OK</button>
    </Modal>
  );
};

export default ModalSuccess;
