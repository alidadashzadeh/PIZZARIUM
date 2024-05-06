import styled from "styled-components";
import Process from "../features/order/Process";
import { useUser } from "../features/auth/useUser";
import OrderSummary from "../features/order/OrderSummary";
import Select from "../ui/Select";
import { useState } from "react";
import UserAddressForm from "../features/user/UserAddressForm";
import { Button } from "../ui/Button";
import { useOrder } from "../context/OrderContext";

const StyledDeliveryInfo = styled.div`
  padding: 4rem;
  display: flex;
`;

const AddressInfo = styled.div`
  flex: 2;

  & h2 {
    padding: 2rem 0;
  }

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

  function handleSelect(e) {
    setSelectedAddress(e.target.value);
  }

  if (!currentUserData) return <div>There is no user, Please login</div>;
  return (
    <>
      <Process step="delivery" />
      <StyledDeliveryInfo>
        <AddressInfo>
          <h2>Delivery Information</h2>

          <span>Choose Address from list below or add new address </span>
          <Select options={addressOptions} onChange={handleSelect} />
          <span>
            selected ddress: <strong>{selectedAddress}</strong>
          </span>
          {!showForm && (
            <Button onClick={() => setShowForm(true)}>Add New Address</Button>
          )}
          {showForm && <UserAddressForm setShowForm={setShowForm} />}
        </AddressInfo>
        <OrderSummary step="delivery" />
      </StyledDeliveryInfo>
    </>
  );
}
