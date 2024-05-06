/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";
import { useOrder } from "../../context/OrderContext";
import ExtraPriceSign from "../../ui/ExtraPriceSign";

const StyledSauceItem = styled.div`
  /* border: 2px solid var(--color-yellow-300); */
  border-radius: 10px;
  overflow: hidden;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 200px;
  flex-grow: 1;
  align-self: flex-start;
  position: relative;
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
const SauceDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin: 1rem;
`;

const Img = styled.img``;

function SauceItem({ sauce }) {
  const { customPizza, selectCustomSauce } = useOrder();

  return (
    <StyledSauceItem
      selected={customPizza.sauce.name === sauce.name}
      onClick={() =>
        selectCustomSauce({ name: sauce.name, extraPrice: sauce.extraPrice })
      }
    >
      <Img src={sauce.picture} />
      <SauceDetails>
        {sauce.name}{" "}
        {sauce.extraPrice ? <ExtraPriceSign price={sauce.extraPrice} /> : null}
      </SauceDetails>
    </StyledSauceItem>
  );
}

export default SauceItem;
