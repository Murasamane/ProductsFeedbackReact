/* eslint-disable no-unused-vars */
import { useFilterMode } from "../hooks/useFilterMode";
import { useReactQuery } from "../hooks/useReactQuery";
import FeedbackCard from "../ui/FeedbackCard";
import Loader from "../ui/Loader";
import styled from "styled-components";
import NoFeedback from "../ui/NoFeedback";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
function BugsPage() {
  const { feedbacks, isLoading } = useReactQuery(["allFeedbacks"]);
  const bugs = feedbacks?.filter((feedback) => feedback.category === "bug");
  const { filteredFeedbacks } = useFilterMode(bugs);

  if (isLoading) return <Loader />;
  if (bugs.length === 0) return <NoFeedback />;
  return (
    <StyledContainer>
      {filteredFeedbacks.map((feedback) => (
        <FeedbackCard feedback={feedback} key={feedback.id} />
      ))}
    </StyledContainer>
  );
}

export default BugsPage;
