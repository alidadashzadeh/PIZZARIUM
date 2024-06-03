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
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../ui/PageTransition";

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

const StyledSelectedAddress = styled.div`
  padding: 1rem 2rem;
  border: 1px solid ${(props) => props.color};
  border-left: 5px solid ${(props) => props.color};
  border-radius: 5px;
  transition: all 0.3s ease;
`;

export default function Deliveryinfo() {
  const { currentUserData } = useUser();
  const { selectedAddress, setSelectedAddress } = useOrder("");
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
    <PageTransition>
      <Process step="delivery" />
      <H2>Delivery Details</H2>
      <StyledDeliveryInfo>
        <AddressInfo>
          <StyledSelectedAddress color={!selectedAddress ? "red" : "green"}>
            Selected Address:{" "}
            <strong>
              {addressOptions.length !== 0
                ? selectedAddress
                : "No Address Selected Yet"}
            </strong>
          </StyledSelectedAddress>
          <h3>Address List</h3>
          <div>
            <Select options={addressOptions} onChange={handleSelect} />
          </div>
          <AnimatePresence mode="wait" initial={false}>
            <div>
              {!showForm && (
                <Button
                  as={motion.button}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  onClick={() => setShowForm(true)}
                  key={showForm}
                >
                  Add New Address
                </Button>
              )}
            </div>
            {showForm && (
              <UserAddressForm setShowForm={setShowForm} key={showForm} />
            )}
          </AnimatePresence>
        </AddressInfo>
        <div>
          <OrderSummary step="delivery" />
        </div>
      </StyledDeliveryInfo>
    </PageTransition>
  );
}
