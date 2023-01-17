import styled from "styled-components";

const Container = styled.div`
  border-radius: 3px;
  width: 100%;
  max-width: 280px;
  min-width: 230px;
  max-height: 380px;
  min-height: 350px;
  cursor:pointer;
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  margin-bottom: 100px;
`;

const Img = styled.img`
  border-radius: 3px;
  width: 100%;
`;

const Icons = styled.div``;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom 0;
  left:0;
  right:0;
  background:rgba(0,0,0,0.7);
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
   font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
`;
export { Container, Img, Content, Icons, Blur };
