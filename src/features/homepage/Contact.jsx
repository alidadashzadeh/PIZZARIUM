import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";

const StyledContact = styled.div`
  padding: 6rem 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 2rem;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`;

const StyledEmail = styled(MdOutlineEmail)`
  font-size: 32px;
`;
const StyledPhone = styled(FiPhone)`
  font-size: 32px;
`;
const StyledMap = styled(FiMapPin)`
  font-size: 32px;
`;

const FlexItem = styled.div`
  max-width: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: var(--color-grey-100);
  border-radius: 50px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (min-width: 769px) and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const H2 = styled.h2`
  font-size: 26px;
`;

const P = styled.p`
  font-size: 16px;
  line-height: 2rem;
`;

const StyledLink = styled.a`
  font-size: 16px;
  line-height: 2rem;
  text-decoration: underline;
  cursor: pointer;
`;

export default function Contact() {
  return (
    <StyledContact>
      <FlexItem>
        <StyledEmail />
        <H2>Email</H2>
        <P>
          For any inquiries or feedback, please fill out the contact form below.
        </P>
        <StyledLink>Support@pizzarium.com</StyledLink>
      </FlexItem>
      <FlexItem>
        <StyledPhone />
        <H2>Phone</H2>
        <P>For urgent matters, you can reach us at the following number:</P>
        <StyledLink> +1 (555) 123-4345</StyledLink>
      </FlexItem>
      <FlexItem>
        <StyledMap />
        <H2>Office</H2>
        <P>visit our office at the address below:</P>
        <StyledLink>123 Main street, Toronto, M8M A8A</StyledLink>
      </FlexItem>
    </StyledContact>
  );
}
