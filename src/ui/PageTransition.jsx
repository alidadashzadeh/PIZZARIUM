import { motion } from "framer-motion";
import { IoPlayBackCircleOutline } from "react-icons/io5";

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
    >
      {children}
    </motion.div>
  );
}
