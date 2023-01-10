import React from "react";
import { Blur, Container, Content, Img } from "./style";
import noImg from "../../assets/img/noimg.jpg";
import category from "../../assets/img/category.png";

const CategoryCard = ({onClick, data = {} }) => {
  // console.log(data);
  const { name } = data
  return (
    <Container onClick={onClick}>
      <Img src={category || noImg} />
      <Blur />
      <Content>{name || "Category Name"}</Content>
    </Container>
  );
};

export default CategoryCard;
