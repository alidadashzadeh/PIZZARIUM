/* eslint-disable react/prop-types */
import { useOrder } from "../../context/OrderContext";
import { StyledIconPlus } from "../../ui/StyledIconPlus";
import { StyledIconMinus } from "../../ui/StyledIconMinus";
import { StyledItem } from "../../ui/StyledItem";
import { StyledImgItem } from "../../ui/StyledImgItem";
import { StyledPriceItem } from "../../ui/StyledPriceItem";

function CreatePizzaItem({ label, item, handleClick }) {
  const { customPizza } = useOrder();
  return (
    <StyledItem
      selected={customPizza[label].name === item.name}
      onClick={() =>
        handleClick({ name: item.name, extraPrice: item.extraPrice })
      }
    >
      <StyledImgItem src={item?.picture} />
      <StyledPriceItem>
        {item?.extraPrice ? item?.extraPrice : "Free"}
      </StyledPriceItem>
      <span>{item?.name}</span>

      {customPizza[label].name === item.name ? (
        <StyledIconMinus />
      ) : (
        <StyledIconPlus />
      )}
    </StyledItem>
  );
}

export default CreatePizzaItem;
