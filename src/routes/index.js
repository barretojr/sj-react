import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import Inventory from "../pages/inventario/inventario";

const Private = ({ Item }) => {
  const signed = false;

  return signed > 0 ? <Item /> : <Login />;
};
const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/Home" element={<Private Item={Home} />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/inventario" element={<Private Item={Inventory} />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
