import { styled } from "styled-components";
import Spinner from "../ui/Spinner";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { usePizza } from "../features/signaturePizza/usePizza";
import { useEffect, useState } from "react";
import { Button } from "../ui/Button";
import { BsCurrencyDollar } from "react-icons/bs";
import { useOrder } from "../context/OrderContext";
import toast from "react-hot-toast";

const StyledSignaturePizza = styled.div`
  display: grid;
  padding-top: 2rem;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
`;

const ImgContainer = styled.div`
  width: 500px;
  padding-top: 4rem;
  margin-left: -200px;
  transition: all 0.3s;
  transform: scale(
    ${(props) =>
      props.selectedSize === "small"
        ? 1
        : props.selectedSize === "medium"
        ? 1.1
        : 1.2}
  );
`;
const Img = styled.img`
  width: 100%;
`;

const Description = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--color-secondary);
`;
const H5 = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: var(--color-secondary);
`;
const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-top: 2rem;
`;
const SizeFlex = styled.div`
  display: flex;
  width: 70%;
  background-color: var(--color-grey-300);
  justify-content: space-between;
  gap: 0.1rem;
  border-radius: 50px;
  overflow: hidden;
`;

const SizeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem 2rem;
  flex-grow: 1;
  cursor: pointer;
  background-color: ${(props) =>
    props.identified ? "var(--color-yellow)" : "var(--color-grey-50)"};

  & span {
    font-size: 16px;
    font-weight: 600;
  }
`;

const SizeDetails = styled.div`
  display: flex;
  flex-direction: column;

  & span {
    color: var(--color-secondary);
    font-size: 14px;
    font-weight: 500;
  }
`;

const ToppingItem = styled.div`
  padding: 1rem 2rem;
  border-radius: 50px;
  background-color: ${(props) =>
    props.selected ? "var(--color-yellow)" : "var(--color-grey-50)"};
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const FlexRow = styled.div`
  display: flex;
  gap: 1rem;
`;
const PriceFlex = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 5rem;

  & span {
    font-size: 28px;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDollar = styled(BsCurrencyDollar)`
  font-size: 28px;
`;

const StyledPlus = styled(CiCirclePlus)`
  font-size: 28px;
  cursor: pointer;
`;
const StyledMinus = styled(CiCircleMinus)`
  font-size: 28px;
  cursor: pointer;
`;

const OrderButton = styled.div`
  padding: 1rem;
`;

export default function SignaturePizza() {
  const { addToOrder } = useOrder();
  const { isLoading, selectedPizza } = usePizza();
  const [selectedSize, setSelectedSize] = useState("small");
  const [qty, setQty] = useState(1);
  const [toppings, setToppings] = useState([]);

  useEffect(
    function () {
      setToppings(selectedPizza?.toppings?.map((topping) => topping.title));
    },
    [selectedPizza]
  );
  if (isLoading) return <Spinner />;

  function handleToppingClick(title) {
    const newToppings = toppings.includes(title)
      ? toppings?.filter((topping) => topping !== title)
      : [...toppings, title];
    setToppings(newToppings);
  }

  function handleAddToOrder() {
    addToOrder({
      title: selectedPizza.name,
      quantity: qty,
      isSignaturePizza: true,
      isCustomPizza: false,
      selectedSize,
      toppings,
      id: Date.now(),
      picture: selectedPizza.picture,
      price: selectedPizza.price,
    });

    toast.success(`${selectedPizza.title} was added to the card successfully`);
  }
  console.log(selectedPizza);
  return (
    <StyledSignaturePizza>
      <ImgContainer selectedSize={selectedSize}>
        <Img src={selectedPizza.picture} />
      </ImgContainer>
      <FlexColumn>
        <h1>{selectedPizza.name}</h1>
        <Description>{selectedPizza.details}</Description>
        <FlexColumn>
          <H5>SIZE</H5>
          <SizeFlex>
            <SizeItem
              identified={selectedSize === "small"}
              onClick={() => setSelectedSize("small")}
            >
              <span>SMALL</span>
              <SizeDetails>
                <span>{selectedPizza.weight.small}</span>
                <span>{selectedPizza.calorie.small}</span>
              </SizeDetails>
            </SizeItem>
            <SizeItem
              identified={selectedSize === "medium"}
              onClick={() => setSelectedSize("medium")}
            >
              <span>MEDIUM</span>
              <SizeDetails>
                <span>{selectedPizza.weight.medium}</span>
                <span>{selectedPizza.calorie.medium}</span>
              </SizeDetails>
            </SizeItem>
            <SizeItem
              identified={selectedSize === "large"}
              onClick={() => setSelectedSize("large")}
            >
              <span>LARGE</span>
              <SizeDetails>
                <span>{selectedPizza.weight?.large}</span>
                <span>{selectedPizza?.calorie?.large}</span>
              </SizeDetails>
            </SizeItem>
          </SizeFlex>
        </FlexColumn>
        <FlexColumn>
          <H5>TOPPINGS</H5>
          <FlexRow>
            {selectedPizza.toppings.map((topping) => (
              <ToppingItem
                key={topping.title}
                selected={toppings?.includes(topping?.title)}
                onClick={() => handleToppingClick(topping?.title)}
              >
                <span>{topping.title}</span>
              </ToppingItem>
            ))}
            <Button>More Toppings +</Button>
          </FlexRow>
        </FlexColumn>

        <PriceFlex>
          <Price>
            <StyledDollar />
            <span>{selectedPizza.price[selectedSize]}</span>
          </Price>
          <FlexRow>
            <StyledMinus onClick={() => setQty((s) => (s > 1 ? s - 1 : s))} />
            <span>{qty}</span>
            <StyledPlus onClick={() => setQty((s) => s + 1)} />
          </FlexRow>
        </PriceFlex>
        <OrderButton>
          <Button onClick={handleAddToOrder}>ADD TO ORDER</Button>
        </OrderButton>
      </FlexColumn>
    </StyledSignaturePizza>
  );
}
