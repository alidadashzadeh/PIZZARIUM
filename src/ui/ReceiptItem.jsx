/* eslint-disable react/prop-types */
import { styled } from "styled-components";

const StyledReceiptItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  text-align: center;

  padding: 1rem;
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
`;
export default function ReceiptItem({ item }) {
  return (
    <StyledReceiptItem>
      <img src={item.isCustomPizza ? "/custom pizza.png" : item.picture} />
      <div>{item.title}</div>
      <div>{item.isDrink ? "--" : item.selectedSize}</div>
      <div>{item.quantity}</div>
      <div>{item.isDrink ? item.price : item.price[item.selectedSize]} $</div>
      <div>
        total:{" "}
        {item.quantity * item.isDrink
          ? item.price
          : item.price[item.selectedSize]}{" "}
        $
      </div>
    </StyledReceiptItem>
  );
}
