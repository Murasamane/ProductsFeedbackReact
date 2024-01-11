/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContentDescription, ContentTag, ContentTitle } from "./Content";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { downVote, upvote } from "../services/apiFeedbacks";
import UpvoteComp from "../features/upvote/UpvoteComp";

const StyledFeedbackCard = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 4rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  max-width: 117.5rem;
`;

const CommentLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CommentCount = styled.span`
  color: #3a4374;
  text-align: center;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.222px;
`;

const ContentContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
`;

function FeedbackCard({ feedback }) {
  const { category, id, description, title, upvotes, comments, upvoted } =
    feedback;
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () =>
      upvoted === false
        ? upvote({ id: id, upvotes: upvotes })
        : downVote({ id: id, upvotes: upvotes }),
    onSuccess: () => {
      queryClient.invalidateQueries(["allFeedbacks"]);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  function handleUpvote() {
    mutate();
  }
  return (
    <StyledFeedbackCard>
      <UpvoteComp
        upvotes={upvotes}
        handleUpvote={handleUpvote}
        upvoted={upvoted}
        direction="column"
      />
      <ContentContainer to={`/feedback/${id}`}>
        <ContentTitle>{title}</ContentTitle>
        <ContentDescription>{description}</ContentDescription>
        <ContentTag>{category}</ContentTag>
      </ContentContainer>

      <CommentLogoContainer>
        <img src="/images/commentlogo.png" alt="comments" />
        <CommentCount>{comments?.length}</CommentCount>
      </CommentLogoContainer>
    </StyledFeedbackCard>
  );
}

export default FeedbackCard;
