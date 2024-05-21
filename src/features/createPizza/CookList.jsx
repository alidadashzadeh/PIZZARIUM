/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { getCooks } from "../../services/apiCreatePizza";
import Spinner from "../../ui/Spinner";
import CreatePizzaItem from "./CreatePizzaItem";
import { useOrder } from "../../context/OrderContext";
import { CustomPizzaList } from "../../ui/CustomPizzaList";

function CookList() {
  const { isLoading, data: cooks } = useQuery({
    queryKey: ["cooks"],
    queryFn: getCooks,
  });
  const { selectCookType } = useOrder();

  if (isLoading) return <Spinner />;

  return (
    <div>
      <h3>Cook Styles</h3>
      <CustomPizzaList>
        {cooks?.map((cook) => (
          <CreatePizzaItem
            label="cook"
            item={cook}
            handleClick={selectCookType}
            key={cook.id}
          />
        ))}
      </CustomPizzaList>
    </div>
  );
}

export default CookList;
