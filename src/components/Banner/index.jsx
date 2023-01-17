import { Blur, Container, Content, Img } from "./style";
import { Button } from "../Generic";
import img2 from "../../assets/img/house2.png";

const GenCarousel = () => {
  return (
    <Container>
      <Img src={img2} />
      <Blur />
      <Content>
        <Content.Title style={{ margin: "20px" }}>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home,
          the Week's Most Popular Home
        </Content.Title>
        <Button>Read More</Button>
      </Content>
    </Container>
  );
};

export default GenCarousel;
