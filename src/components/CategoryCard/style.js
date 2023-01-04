import styled from "styled-components";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";

const Container = styled.div`
  border-radius: 30%;
  width: 100%;
  max-width: 280px;
  min-width: 230px;
  max-height: 380px;
  min-height: 350px;

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
Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;
Icons.Love = styled(love)`
  width: 27px;
  height: 27px;
  padding: 6px;
  background: #f6f8f9;
  border-radius: 50%;
  margin-left: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
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
   font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  color: #ffffff;
`;
export { Container, Img, Content, Icons, Blur };
