import { useQuery } from "@tanstack/react-query";
import { getSauces } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import { useOrder } from "../../context/OrderContext";
import CreatePizzaItem from "./CreatePizzaItem";
import { CustomPizzaList } from "../../ui/CustomPizzaList";

function SauceList() {
  const { isLoading, data: sauces } = useQuery({
    queryKey: ["sauce"],
    queryFn: getSauces,
  });
  const { selectCustomSauce } = useOrder();

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h3>Sauces</h3>
      <CustomPizzaList>
        {sauces.map((sauce) => (
          <CreatePizzaItem
            label="sauce"
            item={sauce}
            handleClick={selectCustomSauce}
            key={sauce.id}
          />
        ))}
      </CustomPizzaList>
    </div>
  );
}

export default SauceList;
