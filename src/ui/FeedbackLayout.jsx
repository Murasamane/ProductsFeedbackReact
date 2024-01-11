import { Outlet } from "react-router-dom";
import styled from "styled-components";
import BackToTopBtn from "./BackToTopBtn";

const StyledFeedbackContainer = styled.div`
  position: relative; 
  max-width: 117.5rem;
  margin: 0 auto;
  height: 100dvh;
`;

function FeedbackLayout() {
  return (
    <StyledFeedbackContainer>
      <Outlet />
      <BackToTopBtn/>
    </StyledFeedbackContainer>
  );
}

export default FeedbackLayout;
