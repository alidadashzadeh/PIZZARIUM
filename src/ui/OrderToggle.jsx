import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Button } from "./Button";
import { SlBasket } from "react-icons/sl";

const StyledIcon = styled(SlBasket)`
  font-size: 20px;
`;
function OrderToggle() {
  const navigate = useNavigate();
  return (
    <div onClick={() => navigate("/order")}>
      <Button>
        <StyledIcon />
      </Button>
    </div>
  );
}

export default OrderToggle;
