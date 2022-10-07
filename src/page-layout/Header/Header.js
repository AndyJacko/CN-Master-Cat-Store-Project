import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Burger from "../../assets/img/burger.svg";
import Basket from "../../assets/img/basket.svg";
import Cat from "../../assets/img/cat.svg";
import Cat1 from "../../assets/img/cat1.svg";
import Cat2 from "../../assets/img/cat2.svg";
import Cat3 from "../../assets/img/cat3.svg";
import Cat4 from "../../assets/img/cat4.svg";
import Cat5 from "../../assets/img/cat5.svg";
import Cat6 from "../../assets/img/cat6.svg";
import Cute from "../../assets/img/cute.jpeg";
import Mail from "../../assets/img/mail.svg";
import Sell from "../../assets/img/sell.svg";
import Logoimg from "../../assets/img/logo.png"

const Header = () => {
  const onOpenBasket = () => {
    document.getElementById("overlay").classList.remove("hide");
    document.getElementById("sidebar").classList.add("open");
  };

  return (
    <MainContainer>
      <Container>
          <NavContainer>
            <NavLeft >
                <Link className="burger" href="#">
                  <img className="icon" src={Burger} height="35px" width="35px" alt=""/>
                </Link>
                <Logo><img src={Logopic} width="36" height="20" />Cats4Homes</Logo>
            </NavLeft>
            <NavRight>
                <Link className="basket" href="#">
                    <img className="icon" src={Basket} width="35px" border="solid black" border-radius="5px" alt=""/>
                </Link>
                <Link className="mail" href="mailto:mail@cat4homes.com">
                    <img className="icon" src={Mail} width="35px" border="solid black" border-radius="5px" alt=""/>
                </Link>
                <Link className="sell" href="#">
                    <img className="icon" src={Sell} width="35px" border="solid black" border-radius="5px" alt=""/>
                </Link>
            </NavRight>
        </NavContainer>
        <NavPhoto >
            <img className="banner" src={Cute} width="100%" alt=""/>
        </NavPhoto>
        <Round className="round-icon">
            <Link className="cat" href="#">
                <RoundIcon>
                  <img className="cat1" src={Cat} alt=""/>
                  Abyssinian
                </RoundIcon>
            </Link>
            <Link className="cat" href="#">
              <RoundIcon>
                <img className="cat1" src={Cat1} alt=""/>
                Birman
              </RoundIcon>
            </Link>
            <Link className="cat" href="#">
              <RoundIcon>
                <img className="cat1" src={Cat2} alt=""/>
                Bombay
              </RoundIcon>
            </Link>
            <Link className="cat" href="#">
              <RoundIcon>
                <img className="cat1" src={Cat3} alt=""/>
                British
              </RoundIcon>
            </Link>
            <Link to="/">
              <Logo><img src={Logoimg} width="36" height="20" />Cats4Homes</Logo>
            </Link>
          </Round>
          <NavRight>
            <BasketToggle className="basket" onClick={onOpenBasket}>
              <img
                className="icon"
                src={Basket}
                width="35px"
                border="solid black"
                border-radius="5px"
                alt=""
              />
            </BasketToggle>
            <Link className="mail" href="mailto:mail@cat4homes.com">
              <img
                className="icon"
                src={Mail}
                width="35px"
                border="solid black"
                border-radius="5px"
                alt=""
              />
            </Link>
            <Link className="sell" href="#">
              <img
                className="icon"
                src={Sell}
                width="35px"
                border="solid black"
                border-radius="5px"
                alt=""
              />
            </Link>
          </NavRight>
        <NavPhoto>
          <img className="banner" src={Cute} width="100%" alt="" />
        </NavPhoto>
        <Round className="round-icon">
          <Link className="cat" href="#">
            <RoundIcon>
              <img className="cat1" src={Cat} alt="" />
              Abyssinian
            </RoundIcon>
          </Link>
          <Link className="cat" href="#">
            <RoundIcon>
              <img className="cat1" src={Cat1} alt="" />
              Birman
            </RoundIcon>
          </Link>
          <Link className="cat" href="#">
            <RoundIcon>
              <img className="cat1" src={Cat2} alt="" />
              Bombay
            </RoundIcon>
          </Link>
          <Link className="cat" href="#">
            <RoundIcon>
              <img className="cat1" src={Cat3} alt="" />
              British
            </RoundIcon>
          </Link>
          <Link className="cat" href="#">
            <RoundIcon>
              <img className="cat1" src={Cat4} alt="" />
              Burmese
            </RoundIcon>
          </Link>
          <Link className="cat" href="#">
            <RoundIcon>
              <img className="cat1" src={Cat5} alt="" />
              Chartreux
            </RoundIcon>
          </Link>
          <Link className="cat" href="#">
            <RoundIcon>
              <img className="cat1" src={Cat6} alt="" />
              Bengal
            </RoundIcon>
          </Link>
          <Link className="cat" href="#">
            <RoundIcon>
              <img className="cat1" src={Cat5} alt="" />
              American
            </RoundIcon>
          </Link>
        </Round>
      </Container>
    </MainContainer>
  );
};

export default Header;

const MainContainer = styled.div`
  background: #181133;
`;

const Container = styled.div`
  padding: 20px;
  color: #8392a5;
  font-size: 18px;
  font-weight: bold;

  @media (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
  width: 100%;
  height: 70px;

  background-color: white;
`;

const NavLeft = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-left: 50px;
`;

const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  margin-left: 50px;
`;

const NavRight = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  margin-right: 60px;
`;

const NavPhoto = styled.div`
  width: 100%;
  background-color: white;
  margin: 0;
`;

const Round = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
`;

const RoundIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-decoration: none;
  color: white;
`;

const BasketToggle = styled.div`
  cursor: pointer;
`;
