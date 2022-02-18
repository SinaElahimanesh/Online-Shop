import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import './fonts.css'

const Container = styled.div`
  display: flex;
  font-family: 'IranSans';
  padding-left: 10%;
  padding-right: 10%;
  ${mobile({ flexDirection: "column", textAlign: "center" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: 'IranSans';
  ${mobile({ textAlign: "center" , display: 'relative', marginLeft: "35px"})}

`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ textAlign: "center", display: 'inline' })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  text-align: center;
  font-family: 'IranSans';
  ${mobile({  padding: "0", display: 'flex', marginLeft: "2em", fontSize: "20px"})}
`;

const Right = styled.div`
  direction: rtl;
  flex: 1;
  padding: 20px;
  font-family: 'IranSans';
  ${mobile({ textAlign: "center", display: 'none' , fontSize: "12px"})}

`;

const Map = styled.div`
    ${mobile({  padding: "auto", display: 'flex', margin: "auto" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  font-family: 'IranSans';
  ${mobile({  padding: "0", display: 'flex', fontSize: "15px"})}
`;

const Footer = () => {
  return (
    <Container id="contact">
      <Left>
        <Title>تماس با ما</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> دانشگاه صنتی شریف
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 021 12345678
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@webdev.dev
        </ContactItem>
        </Left>
      <Center>
      <div class="col-md-10 col-md-6">
        <Map>
        <iframe 
          class="map relative-vertical-center" 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12959.680768283184!2d51.3517227!3d35.7035815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x61a5a909b878501!2sSharif%20University%20of%20Technology!5e0!3m2!1sen!2s!4v1645003775242!5m2!1sen!2s" 
          width="100%" height="300" frameborder="0" 
          style={{border:"0", height:"100%", borderRadius: ".34rem", margin: "30px", height: "200px"}} 
          allowfullscreen="" >
        </iframe>
        </Map>
        
      </div>
      </Center>
      <Right>
        <Title>درباره ما</Title>
        فروشگاه ما سالها تجربه در زمینه پوشاک و مد دارد.
      </Right>
    </Container>
  );
};

export default Footer;
