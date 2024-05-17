import styled from "styled-components";
import Process from "../features/order/Process";
import { useUser } from "../features/auth/useUser";
import OrderSummary from "../features/order/OrderSummary";
import Select from "../ui/Select";
import { useEffect, useState } from "react";
import UserAddressForm from "../features/user/UserAddressForm";
import { Button } from "../ui/Button";
import { useOrder } from "../context/OrderContext";
import EmptyDelivery from "../features/order/EmptyDelivery";

const StyledDeliveryInfo = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
const H2 = styled.h2`
  font-size: 20;
  font-weight: 700;
  padding: 1rem 2rem;
`;

const AddressInfo = styled.div`
  padding: 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & span {
    display: block;
    padding: 1rem 0;
  }
`;

export default function Deliveryinfo() {
  const { currentUserData } = useUser();
  const { selectedAddress, setSelectedAddress } = useOrder();
  const [showForm, setShowForm] = useState(false);
  const addressOptions = currentUserData?.address?.map((address) => {
    return { label: address?.address, value: address?.address };
  });

  useEffect(
    function () {
      if (addressOptions?.length === 1)
        setSelectedAddress(addressOptions[0].value);
    },
    [addressOptions, setSelectedAddress]
  );

  function handleSelect(e) {
    setSelectedAddress(e.target.value);
  }

  if (!currentUserData) return <EmptyDelivery />;
  return (
    <>
      <Process step="delivery" />
      <H2>Delivery Details</H2>
      <StyledDeliveryInfo>
        <AddressInfo>
          <span>
            Selected Address:{" "}
            <strong>
              {addressOptions.length !== 0
                ? selectedAddress
                : "No Address Selected Yet"}
            </strong>
          </span>
          <h3>Address List</h3>
          <div>
            <Select options={addressOptions} onChange={handleSelect} />
          </div>
          <div>
            {!showForm && (
              <Button onClick={() => setShowForm(true)}>Add New Address</Button>
            )}
          </div>
          {showForm && <UserAddressForm setShowForm={setShowForm} />}
        </AddressInfo>
        <div>
          <OrderSummary step="delivery" />
        </div>
      </StyledDeliveryInfo>
    </>
  );
}
