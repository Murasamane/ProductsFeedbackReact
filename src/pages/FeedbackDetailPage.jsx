/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { downVote, getFeedback, upvote } from "../services/apiFeedbacks";
import { Link, NavLink, useParams } from "react-router-dom";
import { ContentDescription, ContentTag, ContentTitle } from "../ui/Content";
import styled from "styled-components";
import Comment from "../ui/Comment";
import SecondaryLoader from "../ui/SecondaryLoader";
import AddComment from "../features/addComments/AddComment";
import UpvoteComp from "../features/upvote/UpvoteComp";

const StyledFeaturePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.4rem;
  width: 120rem;
  max-width: 100%;
  margin: 5rem auto;
`;
const FeaetureHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FeatureGoBackLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: #647196;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const EditFeatureButton = styled(Link)`
  color: #f2f4fe;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 10px;
  background-color: #4661e6;
  text-decoration: none;
  padding: 1.1rem 2.5rem;
  border: none;
  cursor: pointer;
`;

const FeatureContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 4rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
  text-decoration: none;
`;

const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background-color: #fff;
  border-radius: 10px;
  padding: 2.4rem 3.4rem;
`;

const CommentTitle = styled.h2`
  color: #3a4374;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`;
function FeedbackDetailPage() {
  const { id } = useParams();
  const [replyTo, setReplyTo] = useState("");
  const { isLoading, data: feedback } = useQuery({
    queryKey: ["feedback", id],
    queryFn: () => getFeedback(id),
  });
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
  if (isLoading) return <SecondaryLoader />;
  const { category, comments, description, title, upvotes, upvoted } = feedback;

  function handleUpvote() {
    mutate();
  }

  const handleReplyTo = (name) => {
    setReplyTo(name);
  };
  return (
    <StyledFeaturePage>
      <FeaetureHeader>
        <FeatureGoBackLink to={-1}>
          <img src="/images/backarrow.png" alt="back" />
          <span>Go Back</span>
        </FeatureGoBackLink>
        <EditFeatureButton to={`/feedback/editfeedback/${id}`}>
          Edit Feedback
        </EditFeatureButton>
      </FeaetureHeader>
      <FeatureContainer>
        <UpvoteComp
          upvotes={upvotes}
          handleUpvote={handleUpvote}
          upvoted={upvoted}
          direction="column"
        />
        <ContentContainer>
          <ContentTitle>{title}</ContentTitle>
          <ContentDescription>{description}</ContentDescription>
          <ContentTag>{category}</ContentTag>
        </ContentContainer>
      </FeatureContainer>
      <CommentContainer>
        <CommentTitle>{comments ? comments.length : 0} Comments</CommentTitle>
        {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            onReplyTo={handleReplyTo}
          />
        ))}
      </CommentContainer>
      <AddComment id={+id} replyTo={replyTo} handleReplyTo={handleReplyTo} />
    </StyledFeaturePage>
  );
}

export default FeedbackDetailPage;
