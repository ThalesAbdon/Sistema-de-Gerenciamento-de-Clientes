import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalSuccess from '../components/ModalSuccess';
import axios from 'axios';

export default function Registrar() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    x: '',
    y: '',
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name' && value !== '' && !/^[a-zA-Z]+$/.test(value)) {
      toast.error('O campo name deve conter apenas letras.');
      return;
    }

    if (name === 'x' || name === 'y') {
      // Substituir vírgula por ponto nas coordenadas
      const sanitizedValue = value.replace(',', '.');
      setFormData((prevData) => ({
        ...prevData,
        [name]: sanitizedValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateTelefone = (phone) => {
    const phoneDigits = phone.replace(/\D/g, '');
    if (phone.replace(/\D/g, '').length !== 11) {
      toast.error('O telefone deve ter 11 dígitos.');
      return false;
    }

    const thirdDigit = phoneDigits.charAt(2);
    if (thirdDigit !== '9') {
      toast.error('O terceiro dígito do telefone deve ser 9.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.trim() === '' || formData.x.trim() === '' || formData.y.trim() === '') {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    if (validateTelefone(formData.phone)) {
      const phoneFormat = formData.phone.replace(/\D/g, '');
      formData.phone = phoneFormat;
      console.log('Dados do formulário:', formData);

      try {
        const response = await axios.post('http://localhost:3006/register', formData);
        console.log('Resposta do servidor:', response.data);
        setModalIsOpen(true);
      } catch (error) {
        console.error('Erro ao enviar dados para o backend:', error);
      }
    } else {
      console.log('Formulário inválido. Corrija os erros.');
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      x: '',
      y: '',
    });
  };

  return (
    <div className="Registrar">
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Digite seu name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Telefone:</label>
          <InputMask
            mask="99 99999-9999"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Digite seu telefone"
          />
        </div>

        <div className="form-group">
          <label htmlFor="coordinates">Coordenadas:</label>
          <div style={{ display: 'flex' }}>
            <input
              type="text"
              id="x"
              name="x"
              value={formData.x}
              onChange={handleChange}
              placeholder="Digite a coordenada X"
              style={{ marginRight: '10px' }}
            />
            <input
              type="text"
              id="y"
              name="y"
              value={formData.y}
              onChange={handleChange}
              placeholder="Digite a coordenada Y"
            />
          </div>
        </div>

        <div className="btn-container">
          <button type="submit">Enviar</button>
        </div>
      </form>

      {/* Modal de Sucesso */}
      <ModalSuccess isOpen={modalIsOpen} ariaHideApp={false} onClose={closeModal} onOkClick={closeModal} />

      <ToastContainer />
    </div>
  );
}
