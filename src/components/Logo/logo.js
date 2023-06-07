import React from "react";
import logo from '../../assets/logo.png'

const Logo = ({ width }) => {
    return <img src={logo} style={{ width: width}} />
}

export default Logo