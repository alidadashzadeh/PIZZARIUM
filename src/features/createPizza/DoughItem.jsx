/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { useOrder } from "../../context/OrderContext";
import ExtraPriceSign from "../../ui/ExtraPriceSign";

const StyledDoughItem = styled.div`
  /* border: 2px solid var(--color-yellow-300); */
  border-radius: 10px;
  overflow: hidden;
  font-size: 16px;
  font-weight: 500;
  position: relative;
  flex: 1;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.25);

  &:hover {
    cursor: pointer;
    transition: all 0.5s;
  }
  ${(props) =>
    props.selected &&
    css`
      background-color: var(--color-yellow-700);

      &::after {
        content: "✔";
        display: block;
        background-color: var(--color-yellow-700);
        padding: 0.5rem 1rem;
        border-radius: 55px;
        position: absolute;
        right: 5%;
        top: 5%;
      }
    `}
`;
const DoughDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem;
`;

function DoughItem({ dough }) {
  const { customPizza, selectCustomDough } = useOrder();
  return (
    <StyledDoughItem
      selected={customPizza.dough.name === dough.name}
      onClick={() =>
        selectCustomDough({ name: dough.name, extraPrice: dough.extraPrice })
      }
    >
      <img src={dough.picture} />
      <DoughDetails>
        <span>{dough.name}</span>
        {dough.extraPrice ? <ExtraPriceSign price={dough.extraPrice} /> : null}
      </DoughDetails>
    </StyledDoughItem>
  );
}

export default DoughItem;
