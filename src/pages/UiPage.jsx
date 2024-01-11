/* eslint-disable no-unused-vars */
import { useReactQuery } from "../hooks/useReactQuery";
import { useFilterMode } from "../hooks/useFilterMode";
import Loader from "../ui/Loader";
import FeedbackCard from "../ui/FeedbackCard";
import NoFeedback from "../ui/NoFeedback";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
function UiPage() {
  const { feedbacks, isLoading } = useReactQuery(["allFeedbacks"]);
  const uiFeedbacks = feedbacks?.filter(
    (feedback) => feedback.category === "ui"
  );
  const { filteredFeedbacks } = useFilterMode(uiFeedbacks);
  if (isLoading) return <Loader />;
  if (uiFeedbacks.length === 0) return <NoFeedback />;

  return (
    <StyledContainer>
      {filteredFeedbacks.map((feedback) => (
        <FeedbackCard feedback={feedback} key={feedback.id} />
      ))}
    </StyledContainer>
  );
}

export default UiPage;
