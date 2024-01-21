import React, { useState, useEffect } from 'react';
import axios from 'axios';

const itemsPerPage = 5;

const formatPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  const formatted = cleaned.replace(/(\d{2})(\d{5})(\d{4})/, '$1 $2-$3');
  return formatted;
};

const formatCoordinates = (x, y) => `(${x.toFixed(2)}, ${y.toFixed(2)})`;

const ListagemPage = () => {
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL_GET}`);
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase()) ||
    item.email.toLowerCase().includes(filter.toLowerCase()) ||
    item.phone.includes(filter)
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Lista de Clientes</h2>
      <div>
        <label>Filtrar por nome, email ou telefone:</label>
        <input
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Digite para filtrar"
        />
      </div>
      <table className="customer-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{formatPhoneNumber(item.phone)}</td>
              <td>{formatCoordinates(item.x, item.y)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-buttons">
        {[...Array(Math.ceil(filteredData.length / itemsPerPage)).keys()].map(pageNumber => (
          <button key={pageNumber + 1} onClick={() => paginate(pageNumber + 1)}>
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ListagemPage;
