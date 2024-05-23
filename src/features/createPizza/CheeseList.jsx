import { useQuery } from "@tanstack/react-query";
import { getCheeses } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import CreatePizzaItem from "./CreatePizzaItem";
import { useOrder } from "../../context/OrderContext";
import { CustomPizzaList } from "../../ui/CustomPizzaList";

function CheeseList() {
  const { isLoading, data: cheeses } = useQuery({
    queryKey: ["cheese"],
    queryFn: getCheeses,
  });
  const { selectCustomCheese } = useOrder();

  if (isLoading) return <Spinner />;
  return (
    <div>
      <h3>Cheese</h3>
      <CustomPizzaList>
        {cheeses.map((cheese, i) => (
          <CreatePizzaItem
            label="cheese"
            item={cheese}
            handleClick={selectCustomCheese}
            key={cheese.id}
            index={i}
          />
        ))}
      </CustomPizzaList>
    </div>
  );
}

export default CheeseList;

// <CheeseItem cheese={cheese} key={cheese.id} />
