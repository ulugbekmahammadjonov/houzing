import styled from "styled-components";
const Container = styled.div`
  height: fit-content;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
`;
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom 0;
  left:0;
  right:0;
  background:rgba(0,0,0,0.5);
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  bottom 0;
  left:0;
  right:0;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  color:white; 
`;
Content.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;
  width: 555px;
  // width: 100%;
`;

export { Container, Img, Blur, Content };
