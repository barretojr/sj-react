import React, { useEffect, useState } from 'react';
import style from './intemlist.module.css';
import EditarItem from './itens/editaritem';


const ItemList = () => {
  const [listagem, setListagem] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch('http://localhost:3001/inventario');
      const data = await response.json();
      setListagem(data.listagem);
    } catch (error) {
      console.error(error);
    }
  }

  const sortData = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedListagem = [...listagem].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'asc' ? 1 : -1;
    }
    return 0;
  });

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = sortedListagem.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(sortedListagem.length / itemsPerPage);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleEditarItem = (patrimonio) => {
    const itemSelecionado = listagem.find((item) => item.patrimonio === patrimonio);
    if (!itemSelecionado) {
      return <EditarItem item={itemSelecionado} />;
    }
  };

  return (
    <section className="container-fluid mt-5">

      <div className="table-responsive">
        <table className="table table-hover table-striped table-light" id="table">
          <thead>
            <tr>
              <th className={style.pointer} scope="col" onClick={() => sortData('patrimonio')}>Patrimônio</th>
              <th className={style.pointer} scope="col" onClick={() => sortData('unidade')}>Unidade</th>
              <th className={style.pointer} scope="col" onClick={() => sortData('descricao')}>Descrição</th>
              <th className={style.pointer} scope="col" onClick={() => sortData('usuario')}>Usuário</th>
              <th className={style.pointer} scope="col" onClick={() => sortData('modelo')}>Modelo</th>
              <th className={style.pointer} scope="col" onClick={() => sortData('departamento')}>Departamento</th>
              <th className={style.pointer} scope="col" onClick={() => sortData('departamento')}>Valor da Compra</th>
              <th className={style.pointer} scope="col" onClick={() => sortData('departamento')}>Data da compra</th>
              <th className={style.pointer} scope="col">Ações</th>
            </tr>
          </thead>
          <tbody className="table-group-divider" id="tbody" aria-label="Items table" data-page="0">
            {currentItems.map((element) => (
              <tr key={element.patrimonio}>
                <td className="col col-lg-1">{element.patrimonio}</td>
                <td className="col col-lg-1">{element.unidade}</td>
                <td className="col col-lg-1">{element.descricao}</td>
                <td className="col col-lg-1">{element.usuario}</td>
                <td className="col col-lg-1">{element.modelo}</td>
                <td className="col col-lg-1">{element.localizacao}</td>
                <td className="col col-lg-1">R$ {element.valorestim}</td>
                <td className="col col-lg-1">{element.formattedDataCompra}</td>
                <td className="col col-lg-2">
                  <div>
                    <button
                      type="button"
                      className="btn btn-sm btn-warning"
                      onClick={() => handleEditarItem(element.patrimonio)}
                    >
                      Editar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav className="d-flex justify-content-center text-center mt-3">
        <ul className="pagination">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${pageNumber === currentPage ? 'active' : ''}`}
              onClick={() => goToPage(pageNumber)}
            >
              <button className="page-link">{pageNumber}</button>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default ItemList;
