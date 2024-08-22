import React from "react";
import { useSelector } from "react-redux";
import { CartItem } from "./CartItem";
// import { CartItem } from "./CartItem";

export const CartList = () => {
  const { Phone } = useSelector((store) => store.phone);
  return (
    <div style={{ display: "flex" }}>
      {Phone.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};
