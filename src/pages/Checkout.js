import React from "react";
import styled from "styled-components";

const Checkout = ({ basket }) => {
  let totalPrice = 0;
  let totalItems = 0;

  basket.forEach((item) => {
    totalPrice += item.price * item.quantity;
    totalItems += item.quantity;
  });
  return (
    <div>
      <CheckoutTitle>Checkout</CheckoutTitle>

      <BasketItems>
        <CheckoutText>Your Basket Contains The Following:</CheckoutText>

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
          </>
        )}
        <CheckoutText>Total Items: {totalItems}</CheckoutText>
        <CheckoutText>Total Price: &pound;{totalPrice}</CheckoutText>

        <BuyNow>Buy Now</BuyNow>
      </BasketItems>
    </div>
  );
};

export default Checkout;

const CheckoutTitle = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  text-align: center;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
`;

const BasketItems = styled.div`
  width: 50%;
  margin: 10px auto;
  padding: 10px;
`;

const CheckoutText = styled.div`
  width: 100%;
  margin: 4px 0;
  padding: 4px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
`;

const CartItem = styled.div`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
`;
const BuyNow = styled.div`
  width: 100%;
  margin: 20px 0;
  padding: 10px;
  background: #089c00;
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
  border-radius: 3px;
  font-weight: bold;
  cursor: pointer;

  :hover {
    background: #067500;
  }
`;
