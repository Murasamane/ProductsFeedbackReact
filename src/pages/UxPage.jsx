/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import { getFeedbacks } from "../services/apiFeedbacks";
import { useFilterMode } from "../hooks/useFilterMode";
import FeedbackCard from "../ui/FeedbackCard";
import Loader from "../ui/Loader";
import NoFeedback from "../ui/NoFeedback";
import styled from "styled-components";
import { useReactQuery } from "../hooks/useReactQuery";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
function UxPage() {
  const { feedbacks, isLoading } = useReactQuery(["allFeedbacks"]);
  const uxFeedbacks = feedbacks?.filter(
    (feedback) => feedback.category === "ux"
  );
  const { filteredFeedbacks } = useFilterMode(uxFeedbacks);

  if (isLoading) return <Loader />;
  if (uxFeedbacks.length === 0) return <NoFeedback />;

  return (
    <StyledContainer>
      {filteredFeedbacks.map((feedback) => (
        <FeedbackCard feedback={feedback} key={feedback.id} />
      ))}
    </StyledContainer>
  );
}

export default UxPage;
