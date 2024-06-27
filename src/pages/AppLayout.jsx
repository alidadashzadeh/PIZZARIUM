import styled from "styled-components";
import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

const StyledAppLayout = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 1536px;
  grid-template-rows: 120px 1fr;
  background-color: var(--color-background);
`;

const Main = styled.main`
  min-height: 100vh;
`;

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
