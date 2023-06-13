import React from 'react';
import ItemList from './itemlist';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import CadastrarItem from './itens/cadastraritem';
import EditarItem from './itens/editaritem';
import DeletarItem from './itens/deletaritem';

function Inventory() {
  

  return (
    <div>
      <header>
        <Header />
      </header>
      <ItemList />

      

      <Footer />
    </div>
  );
}

export default Inventory;
