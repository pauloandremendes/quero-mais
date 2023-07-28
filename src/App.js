import React, { useState, useEffect } from 'react';
import './App.css';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleDataNascimentoChange = (event) => {
    setDataNascimento(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
  };

  const handleEnderecoChange = (event) => {
    setEndereco(event.target.value);
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Nome:', nome);
    console.log('Data de Nascimento:', dataNascimento);
    console.log('E-mail:', email);
    console.log('Telefone:', telefone);
    console.log('Endereço:', endereco);

    if (!nome || !dataNascimento || !email || !telefone || !endereco) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    if (!isEmailValid(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }
  };

  useEffect(() => {
    // Verifica se há dados armazenados no localStorage ao carregar o componente
    const formData = localStorage.getItem('formData');
    if (formData) {
      // Recupera os dados do localStorage
      const { nome, dataNascimento, email, telefone, endereco } = JSON.parse(formData);

      // Atualiza os valores dos campos de input
      setNome(nome);
      setDataNascimento(dataNascimento);
      setEmail(email);
      setTelefone(telefone);
      setEndereco(endereco);
    }
  }, []);

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} className="form-container">
        <div className="row">
          <div className="col-md-6">
            <div>
              <label htmlFor="nome" className="label-input">Nome *</label>
              <input type="text" id="nome" value={nome} onChange={handleNomeChange} />
            </div>
            <div>
              <label htmlFor="dataNascimento" className="label-input">Data de Nascimento *</label>
              <input type="date" id="dataNascimento" value={dataNascimento} onChange={handleDataNascimentoChange} />
            </div>
            <div>
              <label htmlFor="email" className="label-input">E-mail *</label>
              <input type="email" id="email" value={email} onChange={handleEmailChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div>
              <label htmlFor="telefone" className="label-input">Telefone *</label>
              <input type="text" id="telefone" value={telefone} onChange={handleTelefoneChange} />
            </div>
            <div>
              <label htmlFor="endereco" className="label-input">Endereço *</label>
              <input type="text" id="endereco" value={endereco} onChange={handleEnderecoChange} />
            </div>
            <div>
              <button type="submit" className="button-container">OK</button>
            </div>
          </div>
        </div>
      </form>
      <div className="form-spacing"></div>
    </div>
  );
};

function App() {
  return (
    <div className="App">    
      <div className="bg-image"/>  
      <div className="container">      
        <h1>Cadastro de Participantes - Shalom Aquiraz</h1>
        <Formulario />
      </div>
    </div>
  );
}

export default App;
