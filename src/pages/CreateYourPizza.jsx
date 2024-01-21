import CreatePizzaCrust from "../features/createPizza/CreatePizzaCrust";
import CreatePizzaDough from "../features/createPizza/CreatePizzaDough";
import CreatePizzaNav from "../features/createPizza/CreatePizzaNav";
import CreatePizzaSauce from "../features/createPizza/CreatePizzaSauce";

function CreateYourPizza() {
	return (
		<div>
			<CreatePizzaNav />
			<div>PRICE AND SIZE STUFF</div>
			<CreatePizzaDough />
			<CreatePizzaCrust />
			<CreatePizzaSauce />
		</div>
	);
}

export default CreateYourPizza;
