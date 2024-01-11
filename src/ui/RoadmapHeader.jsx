import { Link } from "react-router-dom";
import styled from "styled-components";
import WhiteBackArrow from "./WhiteBackArrow";

const StyledRoadmapHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.7rem 5.2rem;
  border-radius: 10px;
  background: #373f68;
  width: 100%;
  margin-bottom: 4.8rem;
`;
const GoBackLink = styled(Link)`
  color: #fff;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const RoadmapTitle = styled.h2`
  color: #fff;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.333px;
`;

const HeaderLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const AddFeedbackButton = styled(Link)`
  background-color: #ad1fea;
  color: #f2f4fe;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;
function RoadmapHeader() {
  return (
    <StyledRoadmapHeader>
      <HeaderLinkContainer>
        <GoBackLink to="/">
          <WhiteBackArrow />
          <span>Go Back</span>
        </GoBackLink>
        <RoadmapTitle>Roadmap</RoadmapTitle>
      </HeaderLinkContainer>
      <AddFeedbackButton to="/feedback/addnewfeedback">
        + Add Feedback
      </AddFeedbackButton>
    </StyledRoadmapHeader>
  );
}

export default RoadmapHeader;
