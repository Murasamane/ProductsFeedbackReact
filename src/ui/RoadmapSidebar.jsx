import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getFeedbacks } from "../services/apiFeedbacks";
import Loader from "./Loader";
const StyledRoadmapSidebar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  padding: 2.4rem;
  gap: 1.5rem;
  @media (max-width: 860px) {
    padding: 1.5rem;
    flex-grow: 1;
  }
`;
const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;

const ListItemRoadmap = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
`;

const SecondaryHeading = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: -0.25px;
  color: #3a4374;
`;

const ViewLink = styled(Link)`
  color: #4661e6;
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
`;

function RoadmapSidebar() {
  const { data, isLoading } = useQuery({
    queryKey: ["counts"],
    queryFn: getFeedbacks,
  });

  if (isLoading) return <Loader />;
  const liveCount = data.filter(
    (feedback) => feedback.status === "live"
  ).length;
  const inProgressCount = data.filter(
    (feedback) => feedback.status === "in-progress"
  ).length;
  const plannedCount = data.filter(
    (feedback) => feedback.status === "planned"
  ).length;
  return (
    <StyledRoadmapSidebar>
      <FlexContainer>
        <SecondaryHeading>Roadmap</SecondaryHeading>
        <ViewLink to="/roadmap">View</ViewLink>
      </FlexContainer>
      <UnorderedList>
        <ListItemRoadmap>
          <span>
            <img src="/images/planneddot.png" alt="planned" /> Planned
          </span>
          <span>{plannedCount}</span>
        </ListItemRoadmap>
        <ListItemRoadmap>
          <span>
            <img src="/images/inprogressdot.png" alt="inprogress" /> In-Progress
          </span>
          <span>{inProgressCount}</span>
        </ListItemRoadmap>
        <ListItemRoadmap>
          <span>
            <img src="/images/livedot.png" alt="live" /> Live
          </span>
          <span>{liveCount}</span>
        </ListItemRoadmap>
      </UnorderedList>
    </StyledRoadmapSidebar>
  );
}

export default RoadmapSidebar;
