/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import RoadMapDesktop from "../ui/RoadMapDesktop";
import MobileRoadmap from "../ui/MobileRoadmap";
import styled from "styled-components";
import SecondaryLoader from "../ui/SecondaryLoader";
import { useReactQuery } from "../hooks/useReactQuery";

const StyledRoadmapPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4.8rem;
`;

function RoadmapPage() {
  const [innerWidth, setInnerWidth] = useState(() => window.innerWidth);
  const { feedbacks, isLoading } = useReactQuery(["allFeedbacks"]);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up on unmount
    };
  }, []);


  if (isLoading) return <SecondaryLoader />;


  const plannedFeedbacks = feedbacks.filter(
    (feedback) => feedback.status === "planned"
  );
  const inProgressFeedback = feedbacks.filter(
    (feedback) => feedback.status === "in-progress"
  );
  const liveFeedback = feedbacks.filter(
    (feedback) => feedback.status === "live"
  );

  if (innerWidth <= 850) {
    return (
      <MobileRoadmap
        plannedFeedbacks={plannedFeedbacks}
        inProgressFeedback={inProgressFeedback}
        liveFeedback={liveFeedback}
      />
    );
  }
  return (
    <StyledRoadmapPage>
      <RoadMapDesktop
        plannedFeedbacks={plannedFeedbacks}
        inProgressFeedback={inProgressFeedback}
        liveFeedback={liveFeedback}
      />
    </StyledRoadmapPage>
  );
}

export default RoadmapPage;
