import { getDoughs } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import { useQuery } from "@tanstack/react-query";

import styled from "styled-components";
import DoughItem from "./DoughItem";

const StyledDoughList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;
  align-self: flex-start;
`;

const StyledDoughsHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
function DoughList() {
  const { isLoading, data: doughs } = useQuery({
    queryKey: ["doughs"],
    queryFn: getDoughs,
  });

  if (isLoading) return <Spinner />;

  return (
    <div>
      <StyledDoughsHeader>
        <h3>Doughs</h3>
      </StyledDoughsHeader>
      <StyledDoughList>
        {doughs.map((dough) => (
          <DoughItem dough={dough} key={dough.id} />
        ))}
      </StyledDoughList>
    </div>
  );
}

export default DoughList;
