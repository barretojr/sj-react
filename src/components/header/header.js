import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/logo";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  const handleLogout = () => {
    // Lógica para fazer logout do usuário
    setIsLoggedIn(false);
  };

  const handleLogin = () => {
    // Lógica para fazer login do usuário
    setIsLoggedIn(true);
  };

  return (
    <div>
      <nav className="navbar bg-light bg-gradient">
        <div className="container">
          <Logo width={200} />

          <ul className="nav justify-content-center">
            <li className="nav-item">
              {/* <Link to="/home" className="nav-link active link-success" aria-current="page">
                Home
              </Link> */}
              <h5>home</h5>
            </li>
            {hasPermission && (
              <li className="nav-item">
                {/* <Link to="/inventario" className="nav-link link-success">
                  Inventário
                </Link> */}
                <h5>inventario</h5>
              </li>
            )}
            {!isLoggedIn ? (
              <li className="nav-item">
                <button onClick={handleLogin} className="nav-link link-success">
                  Login
                </button>
              </li>
            ) : (
              <li className="nav-item">
                <button
                  onClick={handleLogout}
                  className="nav-link link-success"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
