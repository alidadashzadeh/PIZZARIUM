/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getCooks } from "../../services/apiCreatePizza";
import CookItem from "./CookItem";
import Spinner from "../../ui/Spinner";

const StyledCookList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  align-self: flex-start;
`;

function SizeCook() {
  const { isLoading, data: cooks } = useQuery({
    queryKey: ["cooks"],
    queryFn: getCooks,
  });

  if (isLoading) return <Spinner />;

  console.log(cooks);
  return (
    <div>
      <h3>Cook Styles</h3>
      <StyledCookList>
        {cooks?.map((cook) => (
          <CookItem cook={cook} key={cook.id} />
        ))}
      </StyledCookList>
    </div>
  );
}

export default SizeCook;
