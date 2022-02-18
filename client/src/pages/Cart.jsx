import { Add, Remove } from "@material-ui/icons";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import StripeCheckout from "react-stripe-checkout";
import { useEffect, useState } from "react";
import { userRequest } from "../requestMethods";
import { useHistory } from "react-router";
import { popularProducts } from "../data";
import "../components/slider.css";
import { FiTrash2 } from 'react-icons/fi'

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``;

const Wrapper = styled.div`
  direction: rtl;
  padding: 20px;
  padding-top: 7rem;
  ${mobile({ padding: "15px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  font-family: 'A Iranian Sans';

`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 0px;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
  font-family: 'A Iranian Sans';
  width: 13rem;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'A Iranian Sans';
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
  font-family: 'A Iranian Sans';
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: 'A Iranian Sans';
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  font-family: 'A Iranian Sans';
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'A Iranian Sans';
`;

const ProductName = styled.span`
  font-family: 'A Iranian Sans';

`;

const ProductId = styled.span``;

const ProductColor = styled.div`
font-family: 'A Iranian Sans';
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'A Iranian Sans';

`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  font-family: 'A Iranian Sans';
  flex: 1;
  // border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 60vh;
  background-color: #2e2e2e;
  box-shadow: #aaa 1px 1px 4px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  font-family: 'A Iranian Sans';
  font-size: 24px;
  text-align: center;

`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-family: 'A Iranian Sans';
  font-size: 18px;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span`
  font-family: 'A Iranian Sans';
  font-size: 15px;

`;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 0px;
  background-color: black;
  color: white;
  font-weight: 600;
  margin-top: 17px;
  font-family: 'A Iranian Sans';

`;

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  // const [productss, setProductss] = useState(cart.products)
  const [stripeToken, setStripeToken] = useState(null);
  const history = useHistory();
  
  const [productss, setProductss] = useState(cart.products); // set campaign as default

  const onToken = (token) => {
    setStripeToken(token);
  };
  
  const handleQuantity = (type, product) => {
    // if (type === "dec") {
    //   product.quantity > 1 && setQuantity(product.quantity - 1);
    // } else {
    //   setQuantity(product.quantity + 1);
    // }
    const index = productss.indexOf(product);
if (index > -1) {
  ; // 2nd parameter means remove one item only
  productss.splice(index, 1)
  console.log((productss))
  const lst = productss
  setProductss(lst);

  cart.products = productss
  console.log('lennnn', cart.products.length)
}
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: stripeToken.id,
          amount: 500,
        });
        history.push("/success", {
          stripeData: res.data,
          products: cart, });
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, cart.total, history]);
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Title>سبد خرید</Title>
        <Top>
          <a href="/">
          <TopButton className="custom-btn btn-3" ><span style={{fontFamily: 'A Iranian Sans'}}>ادامه فرایند خرید</span></TopButton>
          </a>
          {/* <TopButton type="filled">CHECKOUT NOW</TopButton> */}
        </Top>
        <Bottom>
          <Info>
            {productss.map((product) => (
              <Product>
                <ProductDetail>
                  <Image src={product.img} />
                  <Details>
                    <ProductName>
                      <b  style={{fontFamily: 'A Iranian Sans'}}>محصول:</b> {product.title}
                    </ProductName>
                    {/* <ProductId>
                      <b>ID:</b> {product._id}
                    </ProductId> */}
                    <ProductColor color={product.color} />
                    <ProductSize>
                      <b  style={{fontFamily: 'A Iranian Sans'}}>توضیحات:</b> {product.desc}
                    </ProductSize>
                  </Details>
                </ProductDetail>
                <PriceDetail>
                  <ProductAmountContainer>
                    <Add style={{ cursor: "pointer" }} onClick={() => handleQuantity("inc", product)} />
                    <ProductAmount>{product.quantity}</ProductAmount>
                    <Remove style={{ cursor: "pointer" }} onClick={() => handleQuantity("dec", product)} />
                  </ProductAmountContainer>
                  <ProductPrice  style={{fontFamily: 'A Iranian Sans', fontSize: "18px"}}>
                    تومان {product.price * product.quantity}
                  </ProductPrice>
                  <FiTrash2 style={{ marginTop: "15px", cursor: "pointer", margin: "10px" }}/>
                </PriceDetail>
              </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>سفارش شما</SummaryTitle>
            {/* <SummaryItem>
              <SummaryItemText>قیمت</SummaryItemText>
              <SummaryItemPrice> {cart.total} تومان</SummaryItemPrice>
            </SummaryItem> */}
            <SummaryItem>
              <SummaryItemText>مجموع</SummaryItemText>
              <SummaryItemPrice>{cart.total} <span>تومان</span></SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>تخفیف</SummaryItemText>
              <SummaryItemPrice>{0} <span>تومان</span></SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>قابل پرداخت</SummaryItemText>
              <SummaryItemPrice>{cart.total} تومان</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Poosha"
              image=""
              billingAddress
              shippingAddress
              description={`مجوع خرید شما ${cart.total} تومان`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <Button className="custom-btn btn-3"><span style={{fontFamily: 'A Iranian Sans'}}>نهایی کردن خرید</span></Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <hr></hr>
      <Footer />
    </Container>
  );
};

export default Cart;
