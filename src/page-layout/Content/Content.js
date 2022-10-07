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
  background: #e9eff5;
`;

const Container = styled.div`
  padding: 20px;
  color: #000000;
  font-size: 14px;
  font-weight: bold;

  @media (min-width: 768px) {
    width: 80%;
    margin: auto;
    font-size: 16px;
  }
`;
