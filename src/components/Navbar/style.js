import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as LogoImg } from "../../assets/icons/logo.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Main = styled.div`
  display: flex;
  // justify-content: center;
  background: var(--colorPrimary);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1260px;
  width: 100%;
  margin:0 auto;
  color: #ffff;
  padding: var(--padding);
  height: 65px;
  font-size: 16px;
`;
const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: red;
  }
`;
const Logo = styled(LogoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #ffff;
  }
`;
const Link = styled(NavLink)`
  text-decoration: none;
  padding: 32px;
  color: #ffff;
`;
export { Container, Wrapper, Section, Logo, Link, Main };
