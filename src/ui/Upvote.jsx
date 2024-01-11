import styled from "styled-components";

export const UpvoteContainer = styled.div`
  display: flex;
  flex-direction: ${({ direction }) =>
    direction === "row" ? "row" : "column"};
  justify-content: center;
  gap: 0.5rem;
  background-color: ${({ $upvoted }) => ($upvoted ? "#4661E6" : "#f2f4fe")};
  padding: 1.1rem;
  border-radius: 1rem;
  font-size: 1.6rem;
  align-items: center;
  cursor: pointer;
  /* max-width: 3.5rem; */
  max-width: ${({ direction }) => (direction === "row" ? "5.7rem" : "3.5rem")};
  min-width: 3.5rem;
  align-self: flex-start;
  &:hover {
    background-color: #cfd7ff;
  }
`;
