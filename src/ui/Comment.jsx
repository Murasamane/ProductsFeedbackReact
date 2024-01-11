/* eslint-disable react/prop-types */
import {
  Container,
  Message,
  ProfileImage,
  ReplyButton,
  UserHandle,
  UserInfoDetails,
  UserInfoWrapper,
  UserName,
  UserTagName,
} from "./CommentComponents";

function Comment({ comment, onReplyTo }) {
  const { content, user } = comment;
  const { name, image, username } = user;

  const isWithUsername = content.split(" ")[0].includes("@");

  return (
    <Container>
      <UserInfoWrapper>
        <ProfileImage loading="lazy" srcSet={image} />
        <UserInfoDetails>
          <UserName>{name}</UserName>
          <UserHandle>@{username}</UserHandle>
        </UserInfoDetails>
        <ReplyButton onClick={() => onReplyTo(`@${username} `)}>
          Reply
        </ReplyButton>
      </UserInfoWrapper>
      {isWithUsername ? (
        <Message>
          <UserTagName>{content.split(" ")[0]}</UserTagName>
          <span>{content.split(" ").slice(1).join(" ")}</span>
        </Message>
      ) : (
        <Message>{content}</Message>
      )}
    </Container>
  );
}

export default Comment;
