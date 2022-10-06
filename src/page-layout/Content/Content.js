import React from "react";
import styled from "styled-components";

const Content = ({ children }) => {
  return (
    <MainContainer>
      <Container>{children}</Container>
    </MainContainer>
  );
};

export default Content;

const MainContainer = styled.div`
  width: 100%;
  background: #e9eff5;
`;

const Container = styled.div`
  width: 100%;
  padding: 20px;
  color: #000000;
  font-size: 18px;
  font-weight: bold;

  @media (min-width: 768px) {
    width: 80%;
    margin: auto;
  }
`;
