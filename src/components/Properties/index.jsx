import React, { useEffect, useState } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
// import useId from "../../hooks/useId";
const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${url}/houses/list?`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data);
      });
  }, []);
  return (
    <Container>
      {data.map((value) => {
        return <HouseCard key={value.id} data={value} />;
      })}
    </Container>
  );
};

export default Properties;
