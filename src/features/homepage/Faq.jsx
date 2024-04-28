import styled from "styled-components";
import { motion } from "framer-motion";

import FaqItem from "./FaqItem";
import { Button } from "../../ui/Button";

const MotionFaqItem = motion(FaqItem);
const StyledFaq = styled.div`
  padding: 6rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const H2 = styled.h2`
  font-size: 26px;
`;

const P = styled.p`
  font-size: 16px;
  line-height: 2rem;
`;

const Faqs = [
  {
    question: "Where do you deliver?",
    answer:
      "We deliver to wide range of areas. Enter your addres during checkout to see if we deliver to your location.",
  },
  {
    question: "What payment methods are accepted?",
    answer: "We accept all major credit card, as well as PayPal and Apple Pay.",
  },
  {
    question: "Can I customize my pizza?",
    answer:
      "Absolutely! You can choose from our signature pizzas or create your own by selecting your preffered toppings. NOTE: For quality purposes, there is a limit on the number of toppings .",
  },
  {
    question: "How lomg does delivery take?",
    answer:
      "Delivery times may vary depending on your location and order volume. We strive to deliver your pizza as quickly as possible.",
  },
  {
    question: "is there a minimum order?",
    answer:
      "There is no minimum order requirement. You can order as little or as much as you'd like.",
  },
];

export default function Faq() {
  return (
    <StyledFaq>
      <H2>FAQs</H2>
      <P>
        Find answers to common questions about delivery areas, payment methods,
        and customizing your pizza.
      </P>
      {Faqs.map((faq, i) => (
        <MotionFaqItem
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          question={faq.question}
          answer={faq.answer}
          key={i}
        />
      ))}
      <H2>Still have question?</H2>
      <P>Contact our support team for further assistance.</P>
      <div>
        <Button variation="secondary">Contact</Button>
      </div>
    </StyledFaq>
  );
}
