import { getDoughs } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import { useQuery } from "@tanstack/react-query";

import DoughItem from "./DoughItem";
import styled from "styled-components";

const StyledDoughList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  margin: 0 1rem;
  margin-top: 2rem;
  align-self: flex-start;
`;
function DoughList() {
  const { isLoading, data: doughs } = useQuery({
    queryKey: ["doughs"],
    queryFn: getDoughs,
  });

  if (isLoading) return <Spinner />;

  return (
    <StyledDoughList>
      {doughs.map((dough) => (
        <DoughItem dough={dough} key={dough.id} />
      ))}
    </StyledDoughList>
  );
}

export default DoughList;
