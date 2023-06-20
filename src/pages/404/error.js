import React from 'react';
import Logo from '../../components/Logo/logo';

const Error404 = () => {
  const handleGoHome = () => {
    // Lógica para redirecionar para a página inicial
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="text-center">
          <Logo/>
            <h1 className="display-1 fw-bold">404</h1>
            <p className="fs-3"> <span className="text-success">Ops!</span> Página não encontrada.</p>
            <p className="lead">
                A página que você procura não existe ou está fora do ar.
            </p>
            <button className="btn btn-success" onClick={handleGoHome}>Voltar para a Home</button>
        </div>
    </div>
  );
};

export default Error404;
