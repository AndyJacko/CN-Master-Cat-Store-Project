import React from "react";
import styled from "styled-components";

const CatImage = ({ img }) => {
  return <CatImg src={img} alt="" />;
};

export default CatImage;

const CatImg = styled.img`
  width: 100%;
  display: block;
  object-fit: contain;
`;
