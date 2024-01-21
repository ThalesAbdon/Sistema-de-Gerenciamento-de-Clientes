import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalDelivery from '../components/ModalDelivery';

const Entregas = () => {
  const [clientes, setClientes] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3006/location');
        setClientes(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <h2>Entregas</h2>
      <div className="centralized-container">
        <p>Para calcular a melhor rota de entregas, clique no botão abaixo</p>
        <button onClick={openModal}>Mostrar Ordem de Visitas</button>
      </div>
      <ModalDelivery
        isOpen={modalIsOpen}
        onClose={closeModal}
        clientes={clientes}
      />
    </div>
  );
};

export default Entregas;
