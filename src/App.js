import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Loading } from './components/Loading/loading';
import RoutesApp from './routes';

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
      ) : (
        <RoutesApp/>
        
      )}
    </div>
  );
};

export default App;
