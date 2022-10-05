import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <MainContainer>
      <Container>
        <Logo>Cats4Homes</Logo>
        
        <LinksContainer>
          <LinkSection>
            <LinkHeader>Cats And Kittens For sale</LinkHeader>
            <LinkItem>Sphynx For sale</LinkItem>
            <LinkItem>Persian For sale</LinkItem>
            <LinkItem>Bengal For sale</LinkItem>
          </LinkSection>

          <LinkSection>
            <LinkHeader>Accessories &amp; Services</LinkHeader>
            <LinkItem>Scratching Posts</LinkItem>
            <LinkItem>Litter Trays</LinkItem>
            <LinkItem>Squeaky Mice</LinkItem>
          </LinkSection>

          <LinkSection>
            <LinkHeader>Other Popular Pages</LinkHeader>
            <LinkItem>Cats For Sale In Manchester</LinkItem>
            <LinkItem>Cats For Sale In Liverpool</LinkItem>
            <LinkItem>Cats For Sale In London</LinkItem>
          </LinkSection>

          <LinkSection>
            <LinkHeader>Information</LinkHeader>
            <LinkItem>Home</LinkItem>
            <LinkItem>About Us</LinkItem>
            <LinkItem>Checkout</LinkItem>
          </LinkSection>
        </LinksContainer>

        <BrandContainer>
          <Brand>Our Brands:</Brand>
          <BrandLinkItem>Monkeys4Homes</BrandLinkItem>
          <Dot></Dot>
          <BrandLinkItem>Giraffes4Homes</BrandLinkItem>
          <Dot></Dot>
          <BrandLinkItem>Spiders4Homes</BrandLinkItem>
        </BrandContainer>

        <Copy>&copy; Copyright 2022 - Cats4Homes</Copy>
      </Container>
    </MainContainer>
  );
};

export default Footer;

const MainContainer = styled.div`
  width: 100%;
  background: #181133;
`;

const Container = styled.div`
  width: 100%;
  padding: 20px;
  color: #8392a5;
  font-size: 18px;
  font-weight: bold;

  @media (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
`;

const Logo = styled.div`
  color: #ffffff;
  margin-bottom: 30px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LinkSection = styled.div`
  width: 250px;
`;

const LinkHeader = styled.div`
  color: #ffffff;
`;

const LinkItem = styled.div`
  margin: 10px 0;
  cursor: pointer;

  :hover {
    color: #ffffff;
  }
`;

const BrandContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Brand = styled.div`
  color: #ffffff;
`;

const BrandLinkItem = styled.div`
  margin: 0 10px;
  color: #f6b032;
  text-decoration: underline;
  cursor: pointer;

  :hover {
    text-decoration: none;
  }
`;

const Dot = styled.div`
  height: 5px;
  width: 5px;
  background: #ffffff;
  border-radius: 50%;
`;

const Copy = styled.div`
  font-size: 12px;
  font-weight: normal;
  color: #ffffff;
`;
