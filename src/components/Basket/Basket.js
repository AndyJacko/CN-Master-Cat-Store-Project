import React from "react";
import styled from "styled-components";

const Basket = ({ basket, empty, ocb }) => {
  const onCloseBasket = () => {
    ocb();
  };
  const onEmptyBasket = () => {
    empty();
  };

  return (
    <div id="sidebar" className="sidebar">
      <div className="closebtn" onClick={onCloseBasket}>
        X
      </div>

      <BasketTitle>Shopping Basket</BasketTitle>

      {basket[0] && (
        <>
          {basket.map((item) => {
            return (
              <CartItem key={item.id}>
                <p>Cat ID: {item.id}</p>
                <p>Cat Name: {item.name}</p>
                <p>Price: &pound;{item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </CartItem>
            );
          })}

          <EmptyBasket onClick={onEmptyBasket}>Empty Basket</EmptyBasket>
        </>
      )}
    </div>
  );
};

export default Basket;

const BasketTitle = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  text-transform: uppercase;
`;

const CartItem = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
`;

const EmptyBasket = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 10px;
  background: red;
  text-align: center;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;
`;
