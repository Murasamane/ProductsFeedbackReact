import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import Header from "./Header";
import BackToTopBtn from "./BackToTopBtn";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 3.2rem;
  gap: 1rem;
  position: relative;
  max-width: 117.5rem;
  margin: 0 auto;
  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const OutletMain = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
function AppLayout() {
  return (
    <StyledAppLayout>
      <Sidebar />
      <OutletMain>
        <Header />
        <Outlet />
      </OutletMain>
      <BackToTopBtn/>
    </StyledAppLayout>
  );
}

export default AppLayout;
