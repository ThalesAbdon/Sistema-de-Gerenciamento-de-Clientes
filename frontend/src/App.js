import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalSuccess from './components/ModalSuccess'; // Importe o componente ModalSuccess
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
  });

  const [modalIsOpen, setModalIsOpen] = useState(false); 
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Verifica se o valor contém apenas letras (para o campo nome)
    if (name === 'nome' && value !== '' && !/^[a-zA-Z]+$/.test(value)) {
      toast.error('O campo Nome deve conter apenas letras.');
      return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateTelefone = (telefone) => {
    if (telefone.replace(/\D/g, '').length !== 11) {
      toast.error('O telefone deve ter 11 dígitos.');
      return false;
    }
    return true;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.telefone.trim() === '') {
      toast.error('Por favor, preencha o campo Telefone.');
      return;
    }

    if (validateTelefone(formData.telefone)) {
      console.log('Dados do formulário:', formData);
      // Adicione aqui a lógica para enviar os dados para o backend ou realizar outras ações
      // Abre o modal de sucesso
      setModalIsOpen(true);
    } else {
      console.log('Formulário inválido. Corrija os erros.');
    }
  };

  const closeModal = () => {
    // Fecha o modal e limpa os campos de entrada
    setModalIsOpen(false);
    setFormData({
      nome: '',
      email: '',
      telefone: '',
    });
  };

  return (
    <div className="App">
      <h1>Cadastro</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite seu nome"
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
          <label htmlFor="telefone">Telefone:</label>
          <InputMask
            mask="99 99999-9999"
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Digite seu telefone"
          />
        </div>
        <div className='btn-container'>
          <button type="submit">Enviar</button>
        </div>
      </form>

      {/* Modal de Sucesso */}
      <ModalSuccess isOpen={modalIsOpen} ariaHideApp={false} onClose={closeModal} onOkClick={closeModal} />

      <ToastContainer />
    </div>
  );
}

export default App;
