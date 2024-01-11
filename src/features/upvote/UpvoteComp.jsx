/* eslint-disable react/prop-types */
import styled from "styled-components";
import { UpvoteContainer } from "../../ui/Upvote";
import { SvgContainer } from "../../ui/SvgContainer";
const UpvoteNumber = styled.span`
  color: ${(props) => (props["$upvoted"] ? `#fff` : "#3A4374")};
`;
function UpvoteComp({ handleUpvote, upvoted, upvotes, direction }) {
  return (
    <UpvoteContainer
      onClick={handleUpvote}
      $upvoted={upvoted}
      direction={direction}
    >
      <SvgContainer
        xmlns="http://www.w3.org/2000/svg"
        width="11"
        height="7"
        viewBox="0 0 11 7"
        fill="none"
      >
        <path
          d="M1.33447 6L5.33447 2L9.33447 6"
          stroke={upvoted ? `#fff` : `#4661E6`}
          strokeWidth="2"
        />
      </SvgContainer>
      <UpvoteNumber $upvoted={upvoted}>{upvotes}</UpvoteNumber>
    </UpvoteContainer>
  );
}

export default UpvoteComp;
