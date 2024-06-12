import styled from "styled-components";
import { useOrder } from "../context/OrderContext";
import { GoSun } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";

const StyledMoon = styled(FaRegMoon)`
  font-size: 28px;
`;

const StyledSun = styled(GoSun)`
  font-size: 28px;
`;

export default function DarkToggle() {
  const { isDarkMode } = useOrder();

  return <div>{isDarkMode ? <StyledSun /> : <StyledMoon />}</div>;
}
