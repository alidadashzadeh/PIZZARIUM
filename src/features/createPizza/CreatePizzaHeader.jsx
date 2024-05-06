import styled from "styled-components";

const StyledHeader = styled.div`
  grid-column: 1/-1;
  background-color: blue;
`;
const H1 = styled.h1`
  font-size: 36px;
  font-weight: 600;
`;

function CreatePizzaHeader() {
  return (
    <StyledHeader>
      <H1>CREATE YOUR OWN STYLE PIZZA</H1>
    </StyledHeader>
  );
}

export default CreatePizzaHeader;
