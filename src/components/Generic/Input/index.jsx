import React from "react";
import { Container } from "./style";
const Input = ({ type, onChange, defaultValue, placeholder, name,width, height }) => {
  return (
    <Container
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      name={name}
      width={width}
      height= {height}
    />
  );
};

export default Input;
