import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { GoSun } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";
import { useOrder } from "../context/OrderContext";

const FlexItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;
const StyledMoon = styled(FaRegMoon)`
  font-size: 28px;
`;

const StyledSun = styled(GoSun)`
  font-size: 28px;
`;
export default function DarkMode() {
  const { isDarkMode, setIsDarkMode } = useOrder();

  return (
    <FlexItem
      onClick={() => {
        setIsDarkMode((s) => !s);
      }}
    >
      <span>Dark Mode</span>
      <AnimatePresence mode="wait">
        {isDarkMode ? (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.1 } }}
            exit={{ opacity: 0, y: 100, transition: { duration: 0.1 } }}
            key="moon"
          >
            <StyledMoon />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.1 } }}
            exit={{ opacity: 0, y: -100, transition: { duration: 0.1 } }}
            key="sun"
          >
            <StyledSun />
          </motion.div>
        )}
      </AnimatePresence>
    </FlexItem>
  );
}
