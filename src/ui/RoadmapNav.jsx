/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const StyledRoadmapNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-bottom: 1px solid #999;
`;
const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;
const NavigationListItem = styled.li`
  color: #3a4374;
  text-align: center;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.181px;
`;

const StyledNavLink = styled.button`
  background: none;
  border: none;
  padding: 1rem;
  opacity: 0.4;
  ${({ $isActive }) =>
    $isActive === true
      ? css`
          border-bottom: 4px solid #ad1fea;
          color: #3a4374;
          opacity: 1;
        `
      : ""}
`;
function RoadmapNav({ isActive, onActive }) {
  return (
    <StyledRoadmapNav>
      <NavigationList>
        <NavigationListItem>
          <StyledNavLink
            name="planned"
            $isActive={isActive === "planned"}
            onClick={(e) => onActive(e.target.name)}
          >
            Planned ({3})
          </StyledNavLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledNavLink
            name="inprogress"
            $isActive={isActive === "inprogress"}
            onClick={(e) => onActive(e.target.name)}
          >
            In-Progress ({3})
          </StyledNavLink>
        </NavigationListItem>
        <NavigationListItem>
          <StyledNavLink
            name="live"
            $isActive={isActive === "live"}
            onClick={(e) => onActive(e.target.name)}
          >
            Live ({3})
          </StyledNavLink>
        </NavigationListItem>
      </NavigationList>
    </StyledRoadmapNav>
  );
}

export default RoadmapNav;
