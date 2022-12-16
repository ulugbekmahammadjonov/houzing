import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #ffffff",
        color: "#ffffff",
      };
    case "light":
      return {
        background: "#ffffff",
        border: "1px solid #e6e9ec",
        color: "#0d263b",
      };
    case "primary":
      return {
        background: "#0061df",
        border: "none",
        color: "#ffffff",
      };
    default:
      return {
        background: "#0061df",
        border: "none",
        color: "#ffffff",
      };
  }
};

const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 120px;
  font-size: 14px;
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  border-radius: 2px;
  // ${getType}
  outline: none;
  border: 2px solid #e6e9ec;
  padding-left: ${({ icon }) => (icon ? "35px" : "20px")};
  :active {
    opacity: 0.7;
  }
`;

const Wrapper = styled.div`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  display: flex;
  align-items: center;
  position: relative;
`;
const Icon = styled.div`
  position: absolute;
  left:10px;
`;
export { Container, Wrapper, Icon };
