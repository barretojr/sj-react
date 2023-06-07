import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Loading } from './components/Loading/loading';
import Inventory from './components/pages/inventario/inventario';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (<Inventory/>
      )}
    </div>
  );
};

export default App;
