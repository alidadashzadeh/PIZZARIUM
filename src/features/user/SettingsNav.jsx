/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledNav = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

const StyledLi = styled.li`
  cursor: pointer;
  padding: 1rem 2rem;
  transition: all 0.4s;
  color: ${(props) => props.selected && "var(--color-primary)"};
  margin-left: ${(props) => props.selected && "8px"};
`;

const categories = [
  { label: "User Profile", value: "userProfile" },
  { label: "Address History", value: "addresses" },
  { label: "Custom pizzas", value: "customPizzas" },
  { label: "Order History", value: "orders" },
];

export default function SettingsNav({ location, setLocation }) {
  return (
    <StyledNav>
      {categories.map((el) => (
        <StyledLi
          selected={location === el.value}
          onClick={() => {
            setLocation(el.value);
          }}
          key={el.value}
        >
          {el.label}
        </StyledLi>
      ))}
    </StyledNav>
  );
}
