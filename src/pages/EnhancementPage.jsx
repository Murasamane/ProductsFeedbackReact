/* eslint-disable no-unused-vars */
import FeedbackCard from "../ui/FeedbackCard";
import Loader from "../ui/Loader";
import styled from "styled-components";
import NoFeedback from "../ui/NoFeedback";
import { useFilterMode } from "../hooks/useFilterMode";
import { useReactQuery } from "../hooks/useReactQuery";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
function EnhancementPage() {
  const { feedbacks, isLoading } = useReactQuery(["allFeedbacks"]);
  const enhancements = feedbacks?.filter(
    (feedback) => feedback.category === "enhancement"
  );
  const { filteredFeedbacks } = useFilterMode(enhancements);

  if (isLoading) return <Loader />;
  if (enhancements.length === 0) return <NoFeedback />;

  return (
    <StyledContainer>
      {filteredFeedbacks.map((feedback) => (
        <FeedbackCard feedback={feedback} key={feedback.id} />
      ))}
    </StyledContainer>
  );
}

export default EnhancementPage;
