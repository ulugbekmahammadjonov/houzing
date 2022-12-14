import React from "react";
import { Container } from "./style";
const Button = ({ children, type, onClick}) => {
  return <Container onClick={onClick} type={type} width ={100}>{children || "generic button"}</Container>;
};

export default Button;
