import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";
const Container = styled.div`
  height: 571px;
  border: 2px solid red;
  position: relative;
`;
const Arrow = styled(arrow)`
  z-index: 100;
  position: absolute;
  top: 45%;
  width: 40px;
  height: 40px;
  padding: 18px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  transform: ${({ left }) => (left ? "rotate(-90deg)" : "rotate(+90deg)")};
  right: ${({ left }) => left && "20px"};
  left: ${({ left }) => !left && "20px"};
  cursor: pointer;
  :hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;
const Img = styled.img`
  width: 100%;
  height: 571px;
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
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom:30px;
`;
Content.Desc = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
`;
Content.Price = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  color: #ffffff;
`

export { Container, Arrow, Img, Blur, Content };
