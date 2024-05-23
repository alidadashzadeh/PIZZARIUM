/* eslint-disable react/prop-types */
import { useOrder } from "../../context/OrderContext";
import { StyledIconPlus } from "../../ui/StyledIconPlus";
import { StyledIconMinus } from "../../ui/StyledIconMinus";
import { StyledItem } from "../../ui/StyledItem";
import { StyledImgItem } from "../../ui/StyledImgItem";
import StyledPriceItem from "../../ui/StyledPriceItem";
import { motion } from "framer-motion";

function CreatePizzaItem({ label, item, handleClick, index }) {
  const { customPizza } = useOrder();

  console.log(customPizza);
  console.log(item);
  return (
    <StyledItem
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0, transition: { delay: index * 0.05 } }}
      selected={customPizza[label].name === item.name}
      onClick={() =>
        handleClick({ name: item.name, extraPrice: item.extraPrice })
      }
    >
      <StyledImgItem src={item?.picture} />
      <StyledPriceItem extraPrice={item.extraPrice} />

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
