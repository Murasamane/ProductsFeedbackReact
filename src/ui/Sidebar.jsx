import styled from "styled-components";
import { StyledNavLinkCategory } from "./StyledNavLinkCategory";
import { SidebarHeader, SidebarSubTitle, SidebarTitle } from "./SidebarHeader";
import RoadmapSidebar from "./RoadmapSidebar";

const StyledSidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 860px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Navigation = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  background-color: #fff;
  padding: 1.4rem;
  border-radius: 1rem;
  width: 25.5rem;
  max-width: 100%;
`;
function Sidebar() {
  return (
    <StyledSidebar>
      <SidebarHeader>
        <SidebarTitle>Frontend Mentor</SidebarTitle>
        <SidebarSubTitle>Feedback Board</SidebarSubTitle>
      </SidebarHeader>
      <Navigation>
        <StyledNavLinkCategory to="/">All</StyledNavLinkCategory>
        <StyledNavLinkCategory to="/ui">UI</StyledNavLinkCategory>
        <StyledNavLinkCategory to="/ux">UX</StyledNavLinkCategory>
        <StyledNavLinkCategory to="/enhancements">
          Enhancment
        </StyledNavLinkCategory>
        <StyledNavLinkCategory to="/features">Features</StyledNavLinkCategory>
        <StyledNavLinkCategory to="/bugs">Bugs</StyledNavLinkCategory>
      </Navigation>
      <RoadmapSidebar />
    </StyledSidebar>
  );
}

export default Sidebar;
