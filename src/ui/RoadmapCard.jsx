/* eslint-disable react/prop-types */
import styled from "styled-components";
import { ContentTag } from "./Content";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { downVote, upvote } from "../services/apiFeedbacks";
import { Link } from "react-router-dom";
import UpvoteComp from "../features/upvote/UpvoteComp";
const RoadmapCardStatus = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  text-transform: capitalize;
`;

const RoadmapCardTitle = styled.h2`
  color: #3a4374;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
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
const RoadmapDescription = styled.p`
  color: #647196;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const RoadmapCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fff;
  padding: 3.1rem 3.2rem;
  border-top: 4px;
  border-top-color: ${(props) => props["$bgColor"]};
  border-top-style: solid;
  min-height: 28rem;
  max-width: 100%;
  gap: 2rem;
`;
const Flexbox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

function RoadmapCard({ feedback, color }) {
  const {
    title,
    status,
    description,
    category,
    comments,
    upvoted,
    id,
    upvotes,
  } = feedback;

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
    <RoadmapCardContainer $bgColor={color}>
      <RoadmapCardStatus>
        <img
          src={`/images/${
            status === "in-progress" ? "inprogress" : status
          }dot.png`}
          alt="status logo"
        />
        {status}
      </RoadmapCardStatus>
      <Link to={`/feedback/${id}`}>
        <RoadmapCardTitle>{title}</RoadmapCardTitle>
        <RoadmapDescription>{description}</RoadmapDescription>
      </Link>
      <ContentTag>{category}</ContentTag>
      <Flexbox>
        <UpvoteComp
          upvotes={upvotes}
          handleUpvote={handleUpvote}
          upvoted={upvoted}
          direction="row"
        />
        <Flexbox>
          <img src="/images/commentlogo.png" alt="" />
          <CommentCount>{comments.length}</CommentCount>
        </Flexbox>
      </Flexbox>
    </RoadmapCardContainer>
  );
}

export default RoadmapCard;
