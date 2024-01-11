import { Outlet } from "react-router-dom";
import styled from "styled-components";
import RoadmapHeader from "./RoadmapHeader";
import BackToTopBtn from "./BackToTopBtn";

const StyledRoadmapLayout = styled.div`
  max-width: 117.5rem;
  margin: 0 auto;
  height: 100dvh;
  padding: 3rem;
`;

function RoadmapLayout() {
  return (
    <StyledRoadmapLayout>
      <RoadmapHeader />
      <Outlet />
      <BackToTopBtn/>
    </StyledRoadmapLayout>
  );
}

export default RoadmapLayout;
