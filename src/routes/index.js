import { Fragment, BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/login";
import Home from "../pages/home/home";
import Inventory from "../pages/inventario/inventario";
import Error404 from "../pages/404/error";

const Private = ({ Item }) => {
  const signed = false;

  return signed ? <Item /> : <Login />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/" element={<Private Item={Home} />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/inventario" element={<Private Item={Inventory} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
