/* eslint-disable react/prop-types */
import styled from "styled-components";
import RoadmapNav from "./RoadmapNav";
import { useState } from "react";
import RoadmapCard from "./RoadmapCard";

const StyledMobileRoadmap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const RoadmapGridMobile = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  padding: 1rem;
  align-items: center;
`;
function MobileRoadmap({ plannedFeedbacks, inProgressFeedback, liveFeedback }) {
  const [isActive, setIsActive] = useState("planned");

  function handleActive(name) {
    setIsActive(name);
  }

  return (
    <StyledMobileRoadmap>
      <RoadmapNav isActive={isActive} onActive={handleActive} />
      <RoadmapGridMobile>
        {isActive === "planned" &&
          plannedFeedbacks.map((feedback) => (
            <RoadmapCard
              key={feedback.id}
              feedback={feedback}
              color={`#F49F85`}
            />
          ))}
        {isActive === "inprogress" &&
          inProgressFeedback.map((feedback) => (
            <RoadmapCard
              key={feedback.id}
              feedback={feedback}
              color={`#F49F85`}
            />
          ))}

        {isActive === "live" &&
          liveFeedback.map((feedback) => (
            <RoadmapCard
              key={feedback.id}
              feedback={feedback}
              color={`#62BCFA`}
            />
          ))}
      </RoadmapGridMobile>
    </StyledMobileRoadmap>
  );
}

export default MobileRoadmap;
