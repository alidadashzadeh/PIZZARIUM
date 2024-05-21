import { useQuery } from "@tanstack/react-query";
import { getCrusts } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import CreatePizzaItem from "./CreatePizzaItem";
import { useOrder } from "../../context/OrderContext";
import { CustomPizzaList } from "../../ui/CustomPizzaList";

function CrustList() {
  const { isLoading, data: crusts } = useQuery({
    queryKey: ["crust"],
    queryFn: getCrusts,
  });
  const { selectCustomCrust } = useOrder();

  if (isLoading) return <Spinner />;
  return (
    <div>
      <h3>Crusts</h3>
      <CustomPizzaList>
        {crusts.map((crust) => (
          <CreatePizzaItem
            label="crust"
            item={crust}
            handleClick={selectCustomCrust}
            key={crust.id}
          />
        ))}
      </CustomPizzaList>
    </div>
  );
}

export default CrustList;
