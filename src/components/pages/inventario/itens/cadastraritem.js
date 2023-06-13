import React, { useState } from 'react';
import axios from 'axios';

const ItemForm = () => {
  const [patrimonio, setPatrimonio] = useState('');
  const [unidade, setUnidade] = useState('');
  const [descricao, setDescricao] = useState('');
  const [modelo, setModelo] = useState('');
  const [localizacao, setLocalizacao] = useState('');
  const [valorEstimado, setValorEstimado] = useState('');
  const [usuario, setUsuario] = useState('');
  const [numeroSerie, setNumeroSerie] = useState('');
  const [dataCompra, setDataCompra] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      patrimonio,
      unidade,
      descricao,
      modelo,
      localizacao,
      valorestim: valorEstimado,
      usuario,
      nserie: numeroSerie,
      data_compra: dataCompra,
    };

    axios.post('https://localhost:3001/inventario/register', data)
      .then((response) => {
        console.log('Resposta da API:', response.data);
        // Limpar os campos após a submissão
        setPatrimonio('');
        setUnidade('');
        setDescricao('');
        setModelo('');
        setLocalizacao('');
        setValorEstimado('');
        setUsuario('');
        setNumeroSerie('');
        setDataCompra('');
      })
      .catch((error) => {
        console.error('Erro ao enviar dados:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Patrimônio</label>
        <input
          type="text"
          className="form-control"
          value={patrimonio}
          onChange={(e) => setPatrimonio(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Unidade</label>
        <input
          type="text"
          className="form-control"
          value={unidade}
          onChange={(e) => setUnidade(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Descrição</label>
        <input
          type="text"
          className="form-control"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Modelo</label>
        <input
          type="text"
          className="form-control"
          value={modelo}
          onChange={(e) => setModelo(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Localização</label>
        <input
          type="text"
          className="form-control"
          value={localizacao}
          onChange={(e) => setLocalizacao(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Valor Estimado</label>
        <input
          type="text"
          className="form-control"
          value={valorEstimado}
          onChange={(e) => setValorEstimado(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Usuário</label>
        <input
          type="text"
          className="form-control"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Número de Série</label>
        <input
          type="text"
          className="form-control"
          value={numeroSerie}
          onChange={(e) => setNumeroSerie(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Data de Compra</label>
        <input
          type="text"
          className="form-control"
          value={dataCompra}
          onChange={(e) => setDataCompra(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Cadastrar
      </button>
    </form>
  );
};

export default ItemForm;
