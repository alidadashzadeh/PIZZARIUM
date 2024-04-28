import styled from "styled-components";

const StyledSignaturePizzasHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  grid-column: 1 / -1;
`;

const H1 = styled.h1`
  font-size: 36px;
  font-weight: 600;
`;

function SignaturePizzasHeader() {
  return (
    <StyledSignaturePizzasHeader>
      <H1>SIGNATURE PIZZAS </H1>
    </StyledSignaturePizzasHeader>
  );
}

export default SignaturePizzasHeader;
