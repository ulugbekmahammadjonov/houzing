import React, { useRef } from "react";
import { Arrow, Blur, Container, Content, Img } from "./style";
import { Carousel } from "antd";
import { getValue } from "@testing-library/user-event/dist/utils";
import img1 from "../../assets/img/house1.png";
import img2 from "../../assets/img/house2.png";

// const contentStyle = {
//   margin: 0,
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };
const GenCarousel = () => {
  const slider = useRef();
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };
  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img1} />
        <Img src={img2} />
      </Carousel>
      <Arrow data-name="right" onClick={onMove} left={getValue.toString()} />
      <Arrow data-name="left" onClick={onMove} />
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
        <Content.Price>5,250 / month</Content.Price>
      </Content>
    </Container>
  );
};

export default GenCarousel;
