import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Basket = ({ basket, empty, ocb, rfb }) => {
  const navigate = useNavigate();

  let totalPrice = 0;
  let totalItems = 0;

  basket.forEach((item) => {
    totalPrice += item.price * item.quantity;
    totalItems += item.quantity;
  });

  const onCloseBasket = () => {
    ocb();
  };
  const onEmptyBasket = () => {
    empty();
  };

  const onRemoveFromBasket = (e) => {
    rfb(e.target.id);
  };

  const onGoToBasket = () => {
    ocb();
    navigate("/checkout");
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
                <RemoveItem id={item.id} onClick={onRemoveFromBasket}>
                  Remove Item
                </RemoveItem>
              </CartItem>
            );
          })}

          <BasketText>Total Items: {totalItems}</BasketText>
          <BasketText>Total Price: &pound;{totalPrice}</BasketText>

          <EmptyBasket onClick={onEmptyBasket}>Empty Basket</EmptyBasket>

          <GoToCheckout onClick={onGoToBasket}>Go To Checkout</GoToCheckout>
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
  background: #e90000;
  text-align: center;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background: #8c0000;
  }
`;

const GoToCheckout = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 10px;
  background: #089c00;
  text-align: center;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background: #067500;
  }
`;

const RemoveItem = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 10px;
  background: #ee9900;
  text-align: center;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background: #905d00;
  }
`;

const BasketText = styled.div`
  width: 100%;
  margin: 4px 0;
  padding: 4px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;
