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
  margin-left: ${(props) => props.selected && "2rem"};

  &:hover {
    background-color: var(--color-yellow-300);
  }
`;

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
        <Category
          selected={currentCategory === "all"}
          onClick={() => handleClick("all")}
        >
          All
        </Category>
        <Category
          selected={currentCategory === "beef"}
          onClick={() => handleClick("beef")}
        >
          Beef
        </Category>
        <Category
          selected={currentCategory === "chicken"}
          onClick={() => handleClick("chicken")}
        >
          Chicken
        </Category>
        <Category
          selected={currentCategory === "mixed"}
          onClick={() => handleClick("mixed")}
        >
          Mixed Beef & Chicken
        </Category>
        <Category
          selected={currentCategory === "veggie"}
          onClick={() => handleClick("veggie")}
        >
          Vegie
        </Category>
        <Category
          selected={currentCategory === "neapolitan"}
          onClick={() => handleClick("neapolitan")}
        >
          Neapolitan{" "}
        </Category>
        <Category
          selected={currentCategory === "margherita"}
          onClick={() => handleClick("margherita")}
        >
          Margherita
        </Category>
        <Category
          selected={currentCategory === "california"}
          onClick={() => handleClick("california")}
        >
          California
        </Category>
      </CategoryList>
    </StyledSignaturePizzaOperations>
  );
}

export default SignaturePizaaOperations;
