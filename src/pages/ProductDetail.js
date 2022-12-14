import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

import CatImage from "../components/CatImage/CatImage";

const ProductDetail = ({ atb }) => {
  const { id } = useParams();
  const [cat, setCat] = useState();

  useEffect(() => {
    const getCatDetails = async () => {
      const response = await fetch(`https://api.thecatapi.com/v1/images/${id}`);
      const resData = await response.json();
      setCat(resData);
    };

    getCatDetails();
  }, [id]);

  const onAddCat = () => {
    atb({ id: cat.id, name: cat.breeds[0].name, price: 250, quantity: 1 });
  };

  return (
    <MainContainer>
      {cat && (
        <>
          <div>
            <CatSection>
              <CatName>{cat.breeds[0].name}</CatName>

              <CatPrice>&pound;250</CatPrice>
            </CatSection>

            <CatSection>
              <CatImageContainer>
                <CatImage img={cat.url} />
              </CatImageContainer>

              <CatCart>
                <RedButton to="/">Back To Home</RedButton>
                <OrangeButton>Show Phone Number</OrangeButton>
                <OrangeButton>Message</OrangeButton>
                <BlueButton onClick={onAddCat}>Add To Cart</BlueButton>
              </CatCart>
            </CatSection>
          </div>

          <CatDescription>{cat.breeds[0].description}</CatDescription>

          <CatDetails>
            <p>Affection Level: {cat.breeds[0].affection_level}</p>
            <p>Child Friendly Level: {cat.breeds[0].child_friendly}</p>
            <p>Dog Friendly Level: {cat.breeds[0].dog_friendly}</p>
            <p>Stranger Friendly Level: {cat.breeds[0].stranger_friendly}</p>
            <p>Temperament: {cat.breeds[0].temperament}</p>
          </CatDetails>
        </>
      )}
    </MainContainer>
  );
};

export default ProductDetail;

const MainContainer = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px 10px #cccccc;
`;

const CatSection = styled.div`
  padding: 10px 0;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CatName = styled.div`
  width: 100%;
  margin: 0 0 20px 0;
  padding: 10px 0;
  font-size: 24px;
  text-transform: uppercase;
  text-align: center;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 2px 2px 10px #cccccc;

  @media (min-width: 768px) {
    margin: 0 20px 0 0;
  }
`;

const CatImageContainer = styled.div`
  width: 100%;
  margin: 0 0 20px 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 2px 2px 10px #cccccc;

  @media (min-width: 768px) {
    margin: 0 20px 0 0;
  }
`;

const CatPrice = styled.div`
  width: 100%;
  padding: 10px 0;
  font-size: 24px;
  text-align: center;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 2px 2px 10px #cccccc;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

const CatCart = styled.div`
  width: 100%;
  padding: 10px;
  text-align: center;
  border-radius: 10px;

  @media (min-width: 768px) {
    width: 300px;
  }
`;

const CatDescription = styled.div`
  margin: 10px 0;
  padding: 10px;
  font-size: 14px;
  font-weight: normal;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 2px 2px 10px #cccccc;
`;

const CatDetails = styled.div`
  margin: 10px 0;
  padding: 10px;
  font-size: 14px;
  font-weight: normal;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 2px 2px 10px #cccccc;
`;

const OrangeButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  background: #ee9900;
  box-shadow: 2px 2px 10px #cccccc;
  cursor: pointer;

  :hover {
    background: #905d00;
  }
`;

const BlueButton = styled.button`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  background: #042d83;
  box-shadow: 2px 2px 10px #cccccc;
  cursor: pointer;

  :hover {
    background: #022163;
  }
`;

const RedButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  background: #7f0000;
  box-shadow: 2px 2px 10px #cccccc;
  cursor: pointer;

  :hover {
    background: #5f0000;
  }
`;
