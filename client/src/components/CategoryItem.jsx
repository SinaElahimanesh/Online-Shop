import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";
import Button from "./Button";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "20vh" })}

`;

const Info = styled.div`
  position: absolute;
  top: 4rem;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'A Iranian Sans';

`;

const Title = styled.h1`
    color:white;
    margin-bottom: 20px;
    font-family: 'A Iranian Sans';

`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button title = "مشاهده کالا"/>

      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
