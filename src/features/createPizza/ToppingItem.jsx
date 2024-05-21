/* eslint-disable react/prop-types */
import { useOrder } from "../../context/OrderContext";
import { StyledIconPlus } from "../../ui/StyledIconPlus";
import { StyledIconMinus } from "../../ui/StyledIconMinus";
import { StyledItem } from "../../ui/StyledItem";
import { StyledImgItem } from "../../ui/StyledImgItem";
import StyledPriceItem from "../../ui/StyledPriceItem";

function ToppingItem({ topping }) {
  const { customPizza, selectCustomTopping } = useOrder();
  return (
    <StyledItem
      selected={customPizza.topping.some((ss) => ss.name === topping.name)}
      onClick={() =>
        selectCustomTopping({
          name: topping.name,
          extraPrice: topping.extraPrice,
          onPizzaImg: topping.onPizzaImg,
        })
      }
    >
      <StyledImgItem src={topping.picture} />
      <StyledPriceItem extraPrice={topping.extraPrice} />

      {topping.name}
      {customPizza.topping.map((el) => el.name).includes(topping.name) ? (
        <StyledIconMinus />
      ) : (
        <StyledIconPlus />
      )}
    </StyledItem>
  );
}

export default ToppingItem;
