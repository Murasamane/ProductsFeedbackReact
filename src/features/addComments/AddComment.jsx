/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { getRandomNumberIdMillion } from "../../helpers/helpers";
import {
  CharacterCount,
  Container,
  FormContainer,
  FormTitle,
  StyledAddComment,
  SubmitButton,
  Textarea,
} from "./AddCommentStyled";
import { addComment } from "../../services/apiFeedbacks";
import { Warning } from "../editFeedback/EditFeedbackComponents";

function AddComment({ id, replyTo, handleReplyTo }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();

  const { mutate, isLoading: isCommenting } = useMutation({
    mutationFn: addComment,
    onSuccess: () => {
      queryClient.invalidateQueries("feedback");
      reset();
    },
    onError: (error) => {
      console.log(error);
    },
  });
  function handleOnSubmit(data) {
    if (data.content.trim().length < 5) return;
    const comment = {
      id: getRandomNumberIdMillion(),
      user: {
        image: "/assets/user-images/image-zena.jpg",
        name: "Zena Kelley",
        username: "velvetround",
      },
      content: data.content,
      replies: [],
    };
    mutate({ id: id, comment: comment });
    handleReplyTo("");
    reset();
  }
  return (
    <StyledAddComment>
      <FormTitle>Add Comment</FormTitle>
      <FormContainer onSubmit={handleSubmit(handleOnSubmit)}>
        <Textarea
          placeholder="Type your comment here"
          {...register("content", { minLength: 5, required: true })}
          defaultValue={`${replyTo}`}
        />
        {errors.content && <Warning>Must be more than 5 characters</Warning>}
        <Container>
          <CharacterCount>250 Characters left</CharacterCount>
          <SubmitButton disabled={isCommenting}>
            {isCommenting ? "Posting" : "Post Comment"}
          </SubmitButton>
        </Container>
      </FormContainer>
    </StyledAddComment>
  );
}

export default AddComment;
