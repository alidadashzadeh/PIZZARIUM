import { AiOutlineDollar } from "react-icons/ai";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--color-secondary);

  & span {
    font-size: 14px;
    font-weight: 600;
    line-height: 2;
  }
`;
const StyledIcon = styled(AiOutlineDollar)`
  font-size: 24px;
  background-color: #fff;
  border-radius: 50px;
  fill: var(--color-yellow-700);
`;

function ExtraPriceSign({ price }) {
  return (
    <Div>
      <StyledIcon />
      <span>{price}</span>
    </Div>
  );
}

export default ExtraPriceSign;
