import React, { useEffect, useState } from "react";
import { Container, Content } from "./style";

import HauseCard from "../HouseCard";
import Slider from "react-slick";
import { useNavigate, useLocation } from "react-router-dom";
const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "25px",
  slidesToShow: 3,
  speed: 500,
  arrows: true,
  adaptiveHeight: true,
  dots: true,

  appendDots: (dots) => <h1> {dots} </h1>,
};

const Recommended = () => {
  const [data, setData] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
      });
  }, []);

  const navigate = useNavigate();
  return (
    <Container>
      <Content>
        <h1 className="title">Recommended</h1>
        <div className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Content>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <HauseCard
              onClick={() => navigate(`/properties?category_id=${value.id}`)}
              key={value.id}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Recommended;
