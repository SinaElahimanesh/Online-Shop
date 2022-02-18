import styled from "styled-components";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useLocation } from "react-router";
import { useState } from "react";
import About from "../components/About";
import Product from "../components/Product";
import Gallery from "../components/Gallery";
import ProductsGallery from "../components/ProductsGallery";
import '../components/fonts.css';

const Container = styled.div`
`;

const Wrapper = styled.div`
  direction: rtl;
  padding-top: 5.7rem;
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const Title = styled.h1`
  margin: 20px;
  text-align: center;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  font-family: 'IranSans';
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  border-radius: .9rem;
  font-family: 'IranSans';
  font-size: 13px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option`
font-family: 'IranSans';
font-size: 13px;
`;

const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilters = (e) => {
    const value = e.target.value;
    console.log(e.target.name, value)
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>{cat == 'men'? 'مردانه' : cat == 'women'? 'زنانه':'بچگانه'}</Title>
        {/* <FilterContainer>
          <Filter>
            <FilterText>فیلتر:</FilterText>
            <Select name="color" onChange={handleFilters}>
              <Option disabled>رنگ </Option>
              <Option>سفید</Option>
              <Option>مشکی</Option>
              <Option>قرمز</Option>
              <Option>آبی</Option>
              <Option>زرد</Option>
              <Option>سبز</Option>
            </Select>
            <Select name="size" onChange={handleFilters}>
              <Option disabled>سایز</Option>
              <Option>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>مرتب سازی</FilterText>
            <Select onChange={(e) => setSort(e.target.value)}>
              <Option value="newest">جدیدترین</Option>
              <Option value="asc">ارزانترین</Option>
              <Option value="desc">گرانترین</Option>
            </Select>
          </Filter>
        </FilterContainer> */}
        <Products cat={cat} filters={filters} sort={sort} />
        {/* <Product /> */}
        <hr />
        <ProductsGallery />
        <hr />
        <Footer />
      </Wrapper>
    </Container>
  );
};

export default ProductList;
