import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

const StyledSignaturePizzaOperations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 1rem;
`;
const H2 = styled.h2`
  font-size: 24px;
`;

const CategoryList = styled.ul`
  display: flex;
  flex-direction: column;
`;
const Category = styled.li`
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 50px;
  transition: all 0.4s;
  background-color: ${(props) => props.selected && "#ddd"};
  margin-left: ${(props) => props.selected && "1rem"};

  &:hover {
    background-color: var(--color-yellow-300);
  }
`;

const categories = [
  { label: "ALL", value: "all" },
  { label: "BEEF", value: "beef" },
  { label: "CHICKEN", value: "chicken" },
  { label: "MIXED BEEF & CHICKEN", value: "mixed" },
  { label: "VEGGIE", value: "veggie" },
];
function SignaturePizaaOperations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "all";

  function handleClick(value) {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  }

  return (
    <StyledSignaturePizzaOperations>
      <H2>Categories</H2>

      <CategoryList>
        {categories.map((category) => (
          <Category
            key={category.value}
            selected={currentCategory === category.value}
            onClick={() => handleClick(category.value)}
          >
            {category.label}
          </Category>
        ))}
      </CategoryList>
    </StyledSignaturePizzaOperations>
  );
}

export default SignaturePizaaOperations;
