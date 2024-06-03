import styled from "styled-components";
import { useOrder } from "../context/OrderContext";
import { GoSun } from "react-icons/go";
import { FaRegMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const StyledMoon = styled(FaRegMoon)`
  font-size: 28px;
`;

const StyledSun = styled(GoSun)`
  font-size: 28px;
`;

export default function DarkToggle() {
  const { isDarkMode } = useOrder();

  return (
    <AnimatePresence>
      {isDarkMode ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={isDarkMode}
        >
          <StyledSun />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key={isDarkMode}
        >
          <StyledMoon />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
