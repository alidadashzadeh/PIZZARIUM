/* eslint-disable react/prop-types */
import styled from "styled-components";
import { useOrder } from "../../context/OrderContext";
import { StyledIconPlus } from "../../ui/StyledIconPlus";
import { StyledIconMinus } from "../../ui/StyledIconMinus";
import { CountInput } from "../../ui/CountInput";
import { CiCircleRemove } from "react-icons/ci";
import SizeSelect from "../../ui/SizeSelect";
import { GiFullPizza } from "react-icons/gi";

const StyledOrderItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 4rem;
  padding: 2rem 0.5rem;
  border-bottom: 1px solid var(--color-grey-200);
`;

const OrderImage = styled.div`
  width: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 500px;
  box-shadow: 1px 1px 5px 0px #000;
`;

const Details = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  align-items: center;
  gap: 1rem;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  position: absolute;
  top: 10%;
  right: 0;
  width: 20px;
  height: 20px;
  border-radius: 100px;
  transition: all 0.2s;
  background-color: transparent;

  &:hover {
    transform: scale(1.1);
  }
`;

const Count = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

const Price = styled.div`
  padding-left: 4rem;
`;

const StyledIcon = styled(CiCircleRemove)`
  font-size: 24px;
`;
const StyledIconPizza = styled(GiFullPizza)`
  font-size: 124px;
  color: var(--color-primary);
`;
function OrderItem({ item }) {
  const { increaseQuantity, decreaseQuantity, removeItemFromOrder } =
    useOrder();
  return (
    <>
      <StyledOrderItem>
        <OrderImage>
          {item.isCustomPizza ? (
            <StyledIconPizza />
          ) : (
            <img src={item.picture} />
          )}
        </OrderImage>

        <Details>
          <Title>
            {item.isCustomPizza ? <div>YOUR</div> : <div>Our Signature </div>}
            {item.title}
          </Title>

          {!item.isDrink && <SizeSelect item={item} />}

          {item.isDrink && <span>Price: ${item.price}</span>}

          <Count>
            <StyledIconMinus onClick={() => decreaseQuantity(item.id)} />
            <CountInput value={item.quantity} />
            <StyledIconPlus onClick={() => increaseQuantity(item.id)} />
          </Count>
          <Price>{item.price[item.selectedSize] * item.quantity} $</Price>
          <Button
            variations="secondary"
            onClick={() => removeItemFromOrder(item.id)}
          >
            <StyledIcon />
          </Button>
        </Details>
      </StyledOrderItem>
    </>
  );
}

export default OrderItem;
