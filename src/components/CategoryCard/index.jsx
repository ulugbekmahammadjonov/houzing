import React from "react";
import { Blur, Container, Content, Img } from "./style";
import noImg from "../../assets/img/noimg.jpg";
import category from "../../assets/img/category.png";

const HouseCard = ({ data = {} }) => {
  // console.log(data);
  const { name } = data
  return (
    <Container>
      <Img src={category} />
      <Blur />
      <Content>{name || "Category Name"}</Content>
    </Container>
  );
};

export default HouseCard;
