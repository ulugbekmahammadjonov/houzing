import React from "react";
import Carousel from "../Carousel";
import Recommended from "../Recommended"
import Category from "../Category";
import Why from "../Why";
import Resent from "../Resent";
import { Container } from "./style";
import Banner from "../Banner";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <Why />
      <Category />
      <Banner />
      <Resent />
    </Container>
  );
};

export default Home;
