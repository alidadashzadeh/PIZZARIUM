import styled from "styled-components";
import { useOrder } from "../../context/OrderContext";

const StyledPizzaDemo = styled.div`
  position: relative;
  /* width: 50%; */
  aspect-ratio: 1;
`;
const ImgContainer = styled.div`
  width: 65%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default function PizzaDemo() {
  const { customPizza } = useOrder();
  console.log(customPizza);
  return (
    <StyledPizzaDemo>
      <ImgContainer>
        <img src="raw-dough.png" />
      </ImgContainer>

      {customPizza.topping.map((el) => (
        <ImgContainer key={el.name}>
          <img src={el.onPizzaImg} />
        </ImgContainer>
      ))}
    </StyledPizzaDemo>
  );
}
