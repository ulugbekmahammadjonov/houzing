import React,{forwardRef} from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = forwardRef(({
  type,
  onChange,
  defaultValue,
  placeholder,
  name,
  width,
  height,
  icon
},
ref)=>{
  return(
    <Wrapper>
    <Icon>{icon}</Icon>
      <Container
        ref={ref}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        name={name}
        width={width}
        height={height}
        icon={icon}
      />
    </Wrapper>
  )
});

export default Input;
