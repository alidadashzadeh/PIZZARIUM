import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../ui/Header";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-rows: 120px 1fr;
`;

const Main = styled.main``;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
