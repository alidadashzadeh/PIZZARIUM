import styled from "styled-components";
import SignaturePizzaItem from "../features/signaturePizza/SignaturePizzaItem";
import { useQuery } from "@tanstack/react-query";
import { getPizzas } from "../services/apiSignatures";
import Spinner from "../ui/Spinner";
import SignaturePizzasHeader from "../features/signaturePizza/SignaturePizzasHeader";
import { useSearchParams } from "react-router-dom";

const StyledSignaturePizzas = styled.div``;

const StyledPizzaList = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 0.5rem;
	padding: 0 1rem;
`;
function SignaturePizzas() {
	const [searchParams] = useSearchParams();
	const {
		isLoading,
		data: signaturePizzas,
		error,
	} = useQuery({ queryKey: ["signaturePizzas"], queryFn: getPizzas });

	const filterValue = searchParams.get("type") || "all";

	let filteredPizzas;

	if (filterValue === "all") filteredPizzas = signaturePizzas;
	if (filterValue === "veggie")
		filteredPizzas = signaturePizzas?.filter((pizza) => pizza.Veggie);
	if (filterValue === "non-veggie")
		filteredPizzas = signaturePizzas?.filter((pizza) => !pizza.Veggie);

	if (isLoading) return <Spinner />;
	return (
		<StyledSignaturePizzas>
			<SignaturePizzasHeader />
			<StyledPizzaList>
				{filteredPizzas.map((pizza) => (
					<SignaturePizzaItem pizza={pizza} key={pizza.id} />
				))}
			</StyledPizzaList>
		</StyledSignaturePizzas>
	);
}

export default SignaturePizzas;
