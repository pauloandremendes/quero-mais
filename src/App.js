import React, { useState, useEffect } from 'react';
import GoogleFontLoader from 'react-google-font-loader';
import './App.css';

const Formulario = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [telefone, setTelefone] = useState('');
  const [bairro, setBairro] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleIdadeChange = (event) => {
    setIdade(event.target.value);
  };

  const handleSobrenomeChange = (event) => {
    setSobrenome(event.target.value);
  };

  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
  };

  const handleBairroChange = (event) => {
    setBairro(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Nome:', nome);
    console.log('Idade:', idade);
    console.log('Telefone:', telefone);
    console.log('Sobrenome:', sobrenome);
    
      // Verifica se está online
    if (navigator.onLine) {
      // Envia os dados para a planilha do Google
      enviarParaPlanilhaDoGoogle();
    } else {
      // Armazena os dados no localStorage
      const formData = {
      nome,
      idade,
      telefone,
      bairro,
      sobrenome
    };
    localStorage.setItem('formData', JSON.stringify(formData));
    }
    
        // Limpa os campos de input
        setNome('');
        setIdade('');
        setTelefone('');
        setBairro('');
        setSobrenome('');
  };

  const enviarParaPlanilhaDoGoogle = () => {
    // Implemente o código para enviar os dados para a planilha do Google aqui
    // Você precisará das credenciais e da chave da API do Google Sheets
    // Siga a documentação da API do Google Sheets para obter mais detalhes sobre como fazer isso
  };

  useEffect(() => {
    // Verifica se há dados armazenados no localStorage ao carregar o componente
    const formData = localStorage.getItem('formData');
    if (formData) {
      // Recupera os dados do localStorage
      const { nome, idade, telefone, bairro, sobrenome } = JSON.parse(formData);

      // Atualiza os valores dos campos de input
      setNome(nome);
      setIdade(idade);
      setTelefone(telefone);
      setBairro(bairro);
      setSobrenome(sobrenome);
    }
  }, []);


  return (
    <div className="form-wrapper">
    <form onSubmit={handleSubmit} className="form-container">
      <div className="column">
        <div>
          <label htmlFor="nome" className="label-input">Nome *</label>
          <input type="text" id="nome" value={nome} onChange={handleNomeChange} />
        </div>
        <div>
          <label htmlFor="idade" className="label-input">Idade *</label>
          <input type="number" id="idade" value={idade} onChange={handleIdadeChange} />
        </div>
        <div>
          <label htmlFor="bairro" className="label-input">Local *</label>
          <select id="bairro" value={bairro} onChange={handleBairroChange}>
            <option value="">Selecione um local</option>
            <option value="Bairro 1">ARACOIABA @shalomaracoiaba Capela de S; Francisco, Caninhas</option>
            <option value="Bairro 2">AQUIRAZ @shalom.aquiraz CE-025, 13, Lot. Mirante do Rio</option>
            <option value="Bairro 3">ANCURI @shalomancuri R. Luciano Monteiro, 46</option>
            <option value="Bairro 4">ARACOIABA @shalomaracoiaba Capela de S; Francisco, Caninhas</option>
            <option value="Bairro 5">AQUIRAZ @shalom.aquiraz CE-025, 13, Lot. Mirante do Rio</option>
            <option value="Bairro 6">ANCURI @shalomancuri R. Luciano Monteiro, 46</option>
            <option value="Bairro 7">ARACOIABA @shalomaracoiaba Capela de S; Francisco, Caninhas</option>
            <option value="Bairro 8">AQUIRAZ @shalom.aquiraz CE-025, 13, Lot. Mirante do Rio</option>
            <option value="Bairro 9">ANCURI @shalomancuri R. Luciano Monteiro, 46</option>
            <option value="Bairro 10">ARACOIABA @shalomaracoiaba Capela de S; Francisco, Caninhas</option>
            <option value="Bairro 11">AQUIRAZ @shalom.aquiraz CE-025, 13, Lot. Mirante do Rio</option>
            <option value="Bairro 12">ANCURI @shalomancuri R. Luciano Monteiro, 46</option>
            <option value="Bairro 13">ARACOIABA @shalomaracoiaba Capela de S; Francisco, Caninhas</option>
            <option value="Bairro 14">ARACOIABA @shalomaracoiaba Capela de S; Francisco, Caninhas</option>
            <option value="Bairro 15">AQUIRAZ @shalom.aquiraz CE-025, 13, Lot. Mirante do Rio</option>
            <option value="Bairro 16">ANCURI @shalomancuri R. Luciano Monteiro, 46</option>
            <option value="Bairro 17">ARACOIABA @shalomaracoiaba Capela de S; Francisco, Caninhas</option>
            <option value="Bairro 18">AQUIRAZ @shalom.aquiraz CE-025, 13, Lot. Mirante do Rio</option>
            <option value="Bairro 19">ANCURI @shalomancuri R. Luciano Monteiro, 46</option>
            <option value="Bairro 20">ARACOIABA @shalomaracoiaba Capela de S; Francisco, Caninhas</option>
            <option value="Bairro 21">AQUIRAZ @shalom.aquiraz CE-025, 13, Lot. Mirante do Rio</option>
            <option value="Bairro 22">ANCURI @shalomancuri R. Luciano Monteiro, 46</option>
          </select>
        </div>
      </div>
      <div className="column">
      <div>
          <label htmlFor="sobrenome" className="label-input">Sobrenome *</label>
          <input type="text" id="sobrenome" value={sobrenome} onChange={handleSobrenomeChange} />
        </div>
        <div>
          <label htmlFor="telefone" className="label-input">Telefone *</label>
          <input type="text" id="telefone" value={telefone} onChange={handleTelefoneChange} />
        </div>
        <div>
          <button type="submit" className="button-container">OK</button>
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
      <div className="bg-container">
        <div className="bg-image"></div> 
      </div>
      <h1 className="animation">HALLELUYA QUERO MAIS</h1>
        <div className="animation">
          <p style={{ fontFamily: 'Raleway', fontWeight: 200 }} className="tag-p-1">Viva uma experiência transformadora, viva a festa que nunca acaba na sua vida, participe de um encontro que vai encher o seu coração de alegria e esperança. Aqui você poderá se inscrever e viver de forma ainda mais profunda a experiência do nosso festival, através do QUERO MAIS.</p>
          <p style={{ fontFamily: 'Raleway', fontWeight: 200 }}>Venha participar desse encontro nos dias 29 e 30 de julho no Shalom mais perto de você!</p>
        </div>
      <h2 className="titulo-dois">VENHA PARTICIPAR DESSE ENCONTRO</h2>
      <Formulario />
    </div>
  );
}

export default App;
