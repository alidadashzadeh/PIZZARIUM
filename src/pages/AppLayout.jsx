import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const StyledAppLayout = styled.div`
  display: grid;
  max-width: 100vw;
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
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
