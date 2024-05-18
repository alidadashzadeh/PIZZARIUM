/* eslint-disable react/prop-types */
import { useOrder } from "../../context/OrderContext";
import { StyledIconPlus } from "../../ui/StyledIconPlus";
import { StyledIconMinus } from "../../ui/StyledIconMinus";
import { StyledItem } from "../../ui/StyledItem";
import { StyledImgItem } from "../../ui/StyledImgItem";
import { StyledPriceItem } from "../../ui/StyledPriceItem";

function CookItem({ cook }) {
  const { customPizza, selectCookType } = useOrder();
  console.log(cook);
  return (
    <StyledItem
      selected={customPizza.cook.name === cook.name}
      onClick={() => selectCookType(cook?.name)}
    >
      <StyledImgItem src={cook?.picture} />
      <StyledPriceItem>
        {cook?.extraPrice ? cook?.extraPrice : "Free"}
      </StyledPriceItem>
      <span>{cook?.name}</span>
      {customPizza.cook === cook.name ? (
        <StyledIconMinus />
      ) : (
        <StyledIconPlus />
      )}
    </StyledItem>
  );
}

export default CookItem;
