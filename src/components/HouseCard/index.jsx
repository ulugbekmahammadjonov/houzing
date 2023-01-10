import React from "react";
import { Container, Content, Details, Divider, Img, Icons } from "./style";
import noImg from "../../assets/img/noimg.jpg";
const HouseCard = ({ data={} }) => {
  // console.log(data);
  const {
    attachments,
    city,
    country,
    category,
    description,
    address,
    houseDetails,
    price,
    salePrice
  } = data;
  return (
    <Container>
      <Img src={(attachments&&attachments[0]?.imgPath) || noImg} />
      <Content>
        <div className="subTitle inline">
          {city}, {country}, {description}
        </div>
        <div className="info">{address || "Quincy St, Brooklyn, NY, USA"}-{" "}
        {category?.name || "Category"} {houseDetails?.room || 0}-rooms</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info">Bed {houseDetails?.beds || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info">Both {houseDetails?.bath || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info">Garage {houseDetails?.garage || 0}</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info">Ruler {houseDetails?.area || 0}kv</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className="info">{salePrice || 0}/mo</div>
          <div className="subTitle">{price || 0}/mo</div>
        </Details.Item>
        <Details.Item row>
          <Icons.Resize />
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;
