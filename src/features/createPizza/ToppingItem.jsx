/* eslint-disable react/prop-types */
import { useOrder } from "../../context/OrderContext";
import { StyledIconPlus } from "../../ui/StyledIconPlus";
import { StyledIconMinus } from "../../ui/StyledIconMinus";
import { StyledItem } from "../../ui/StyledItem";
import { StyledImgItem } from "../../ui/StyledImgItem";
import StyledPriceItem from "../../ui/StyledPriceItem";
import { motion } from "framer-motion";

function ToppingItem({ topping, index }) {
  const { customPizza, selectCustomTopping } = useOrder();
  return (
    <StyledItem
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: index * 0.05 } }}
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
