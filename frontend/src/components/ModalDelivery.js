import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';

const itemsPerPage = 7;

const formatPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const formatted = cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '$1 $2-$3');
  return formatted;
};

const formatCoordinates = (x, y) => `(${x.toFixed(2)}, ${y.toFixed(2)})`;

const ModalDelivery = ({ isOpen, onClose, clientes }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = clientes.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Clientes a serem visitados"
    >
      <h2>Ordem de Visitas</h2>
      <table className="customer-table">
        <thead>
          <tr>
            <th>Ordem</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((cliente, index) => (
            <tr key={index + indexOfFirstItem}>
              <td>{index + indexOfFirstItem + 1}</td>
              <td>{cliente.name}</td>
              <td>{cliente.email}</td>
              <td>{formatPhoneNumber(cliente.phone)}</td>
              <td>{formatCoordinates(cliente.x, cliente.y)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-buttons">
        {[...Array(Math.ceil(clientes.length / itemsPerPage)).keys()].map(pageNumber => (
          <button key={pageNumber + 1} onClick={() => paginate(pageNumber + 1)}>
            {pageNumber + 1}
          </button>
        ))}
      </div>
      <button onClick={onClose}>Fechar</button>
    </Modal>
  );
};

export default ModalDelivery;
