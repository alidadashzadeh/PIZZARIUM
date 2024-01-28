import { useQuery } from "@tanstack/react-query";
import { getCheeses } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import CheeseItem from "./CheeseItem";
import styled from "styled-components";

const StyledCheeseList = styled.div`
	display: flex;
	gap: 1rem;
	margin: 0 1rem;
	margin-top: 2rem;
`;

function CheeseList() {
	const { isLoading, data: cheeses } = useQuery({
		queryKey: ["cheese"],
		queryFn: getCheeses,
	});

	if (isLoading) return <Spinner />;
	return (
		<StyledCheeseList>
			{cheeses.map((cheese) => (
				<CheeseItem cheese={cheese} key={cheese.id} />
			))}
		</StyledCheeseList>
	);
}

export default CheeseList;
