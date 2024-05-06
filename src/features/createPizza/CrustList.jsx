import { useQuery } from "@tanstack/react-query";
import { getCrusts } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import CrustItem from "./CrustItem";
import styled from "styled-components";

const StyledCrustList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
  margin: 0 1rem;
  margin-top: 2rem;
  align-self: flex-start;
`;
function CrustList() {
  const { isLoading, data: crusts } = useQuery({
    queryKey: ["crust"],
    queryFn: getCrusts,
  });

  if (isLoading) return <Spinner />;
  return (
    <StyledCrustList>
      {crusts.map((crust) => (
        <CrustItem crust={crust} key={crust.id} />
      ))}
    </StyledCrustList>
  );
}

export default CrustList;
