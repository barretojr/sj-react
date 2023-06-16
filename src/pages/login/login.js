import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import Logo from "../../components/Logo/logo";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("", {
        method: "POST",
        headers: { "Context-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      setUser(response.data);
      console.log(user);

      const authResponse = await axios.post("", {
        headers: { Autorizacao: `Bearer ${response.data.token}` },
      });

      if (authResponse.data.authenticated) {
        return "Authentic";
      } else {
        return "not Authemtic";
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setError('Usuário ou Senha inválidos');
        } else {
          setError('Erro ao acessar o servidor');
        }
      } else {
        setError('Erro de conexão', error);
      }
    }
  };

  return (
    <div>
      <section className="bg-success vh-100 custom-section">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card shadow-2-strong">
                <div className="card-body p-5 text-center">
                  <Logo />
                  <h3 className="mt-3 mb-5">Faça seu Login</h3>

                  {error && (
                    <div className="container d-flex justify-content-center alert alert-danger">
                      <h5>{error}</h5>
                    </div>
                  )}

                  <form onSubmit={handleLogin}>
                    <div className="form-floating mb-4">
                      <input
                        type="text"
                        className="form-control"
                        id="floatingInput"
                        placeholder="Usuário"
                        required
                        onChange={(e) => setUsername(e.target.value)}
                      />

                      <label htmlFor="floatingInput">Usuário</label>
                    </div>

                    <div className="form-floating mb-4">
                      <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Senha"
                        required
                        onChange={(e) => setPassword(e.target.value)}
                      />

                      <label htmlFor="floatingPassword">Senha</label>
                    </div>

                    <div className="form-check d-flex justify-content-start mb-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="form1Example3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form1Example3"
                      >
                        Lembrar Usuário
                      </label>
                    </div>

                    <button
                      className="btn btn-success btn-lg btn-block"
                      type="submit"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
