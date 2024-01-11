/* eslint-disable no-unused-vars */
import { useFilterMode } from "../hooks/useFilterMode";
import { useReactQuery } from "../hooks/useReactQuery";
import FeedbackCard from "../ui/FeedbackCard";
import Loader from "../ui/Loader";
import NoFeedback from "../ui/NoFeedback";
import styled from "styled-components";

const StyledHomepage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
function Home() {
  const { isLoading, feedbacks } = useReactQuery(["allFeedbacks"]);
  const { filteredFeedbacks } = useFilterMode(feedbacks);

  if (isLoading) return <Loader />;
  if (feedbacks?.length === 0) return <NoFeedback />;

  return (
    <StyledHomepage>
      {feedbacks.length !== 0 &&
        filteredFeedbacks.map((feedback) => (
          <FeedbackCard feedback={feedback} key={feedback.id} />
        ))}
    </StyledHomepage>
  );
}

export default Home;
