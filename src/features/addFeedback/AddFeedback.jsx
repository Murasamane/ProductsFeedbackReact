import { useForm } from "react-hook-form";
import {
  AddFeedbackButton,
  AddFeedbackHeader,
  ButtonContainer,
  CancelButton,
  CategoryContainer,
  Container,
  Description,
  FeatureGoBackLink,
  InputField,
  Label,
  Option,
  PlusImage,
  Select,
  StyledAddFeedback,
  Title,
} from "./AddFeedbackComponents";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFeedback } from "../../services/apiFeedbacks";
import { useNavigate } from "react-router-dom";
import { Warning } from "../editFeedback/EditFeedbackComponents";

function AddFeedback() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isLoading: isAdding } = useMutation({
    mutationFn: addFeedback,
    onSuccess: () => {
      queryClient.invalidateQueries("feedback");
      navigate("/");
    },
    onError: () => {
      console.log("failed");
    },
  });
  function formSubmit(data) {
    if (data.title.trim().length < 5 || data.description.trim().length < 5)
      return;
    const newFeedback = {
      title: data.title,
      category: data.category,
      upvotes: 0,
      status: "suggestion",
      description: data.description,
      comments: [],
    };
    mutate(newFeedback);
    reset();
  }
  return (
    <StyledAddFeedback>
      <AddFeedbackHeader>
        <FeatureGoBackLink to={-1}>
          <img src="/images/backarrow.png" alt="back" />
          <span>Go Back</span>
        </FeatureGoBackLink>
      </AddFeedbackHeader>
      <PlusImage src="/images/plus.png" />
      <Container onSubmit={handleSubmit(formSubmit)}>
        <Title>Create New Feedback</Title>
        <Label>Feedback Title</Label>
        <Description>Add a short, descriptive headline</Description>
        <InputField
          type="text"
          {...register("title", { required: true, minLength: 5 })}
        />
        {errors.title && <Warning>Can`t be empty</Warning>}
        <Label>Category</Label>
        <Description>Choose a category for your feedback</Description>
        <CategoryContainer>
          <Select id="category select" {...register("category")}>
            <Option value="feature">Feature</Option>
            <Option value="ui">UI</Option>
            <Option value="ux">UX</Option>
            <Option value="enhancement">Enhancement</Option>
            <Option value="bug">Bug</Option>
          </Select>
        </CategoryContainer>
        <Label>Feedback Detail</Label>
        <Description>
          Include any specific comments on what should be improved, added, etc.
        </Description>
        <InputField
          type="text"
          {...register("description", { required: true, minLength: 5 })}
        />
        {errors.description && <Warning>Can`t be empty</Warning>}
        <ButtonContainer>
          <CancelButton onClick={() => navigate(-1)}>Cancel</CancelButton>
          <AddFeedbackButton>
            {isAdding ? "Adding..." : "Add Feedback"}
          </AddFeedbackButton>
        </ButtonContainer>
      </Container>
    </StyledAddFeedback>
  );
}

export default AddFeedback;
