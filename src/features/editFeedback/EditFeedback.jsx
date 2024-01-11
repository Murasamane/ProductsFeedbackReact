/* eslint-disable no-unused-vars */
import { FeatureGoBackLink } from "../addFeedback/AddFeedbackComponents";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editFeedback, getEditFeedback } from "../../services/apiFeedbacks";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import RemoveFeedback from "../removeFeedback/RemoveFeedback";
import {
  AddButton,
  ButtonGroup,
  CancelButton,
  EditDetailTextArea,
  EditFeedbackHeader,
  EditFeedbackTitle,
  EditInputField,
  EditParagraph,
  EditTitle,
  FormContainer,
  FormDivider,
  FormRow,
  Img,
  SecondaryButtonGroup,
  SelectCategory,
  SelectOption,
  StyledEditFeedback,
  Warning,
} from "./EditFeedbackComponents";
import Loader from "../../ui/Loader";

function EditFeedback() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const queryClinet = useQueryClient();
  const { mutate, isLoading } = useMutation({
    mutationFn: editFeedback,
    onSuccess: () => {
      queryClinet.invalidateQueries(["feedback", "currentEditFeedback"]);
      reset();
      navigate(-1);
    },
    onError: () => {
      console.log("failed to update");
    },
  });
  const { data: feedback, isLoading: isSubmitting } = useQuery({
    queryKey: ["currentEditFeedback"],
    queryFn: () => getEditFeedback(+id),
  });
  if (isSubmitting) return <Loader />;
  const { category, description, status, title } = feedback;

  function handleFormSubmit(data) {
    if (data.title.trim().length < 5 || data.description.trim().length < 5)
      return;
    const updatedFeedback = {
      id: feedback.id,
      title: data.title,
      description: data.description,
      category: data.category,
      status: data.status,
    };
    mutate(updatedFeedback);
  }
  return (
    <StyledEditFeedback>
      <EditFeedbackHeader>
        <FeatureGoBackLink to={-1}>
          <img src="/images/backarrow.png" alt="back" />
          <span>Go Back</span>
        </FeatureGoBackLink>
      </EditFeedbackHeader>
      <Img src="/images/editfeedbackpen.png" />
      <FormContainer onSubmit={handleSubmit(handleFormSubmit)}>
        <EditFeedbackTitle>Editing `{title}`</EditFeedbackTitle>
        <FormDivider>
          <FormRow>
            <div>
              <EditTitle>Feedback Title</EditTitle>
              <EditParagraph>Add a short, descriptive headline</EditParagraph>
            </div>
            <EditInputField
              type="text"
              placeholder={title}
              {...register("title", { minLength: 5, required: true })}
            />
            {errors.title && <Warning>Can not be empty</Warning>}
          </FormRow>
          <FormRow>
            <div>
              <EditTitle>Category</EditTitle>
              <EditParagraph>Choose a category for your feedback</EditParagraph>
            </div>
            <SelectCategory placeholder={category} {...register("category")}>
              <SelectOption value="feature">Feature</SelectOption>
              <SelectOption value="ui">UI</SelectOption>
              <SelectOption value="ux">UX</SelectOption>
              <SelectOption value="enhancement">Enhancement</SelectOption>
              <SelectOption value="bug">Bug</SelectOption>
            </SelectCategory>
          </FormRow>
          <FormRow>
            <div>
              <EditTitle>Update Status</EditTitle>
              <EditParagraph>Change feedback state</EditParagraph>
            </div>
            <SelectCategory placeholder={status} {...register("status")}>
              <SelectOption value="suggestion">Suggestion</SelectOption>
              <SelectOption value="planned">Planned</SelectOption>
              <SelectOption value="in-progress">In-Progress</SelectOption>
              <SelectOption value="live">Live</SelectOption>
            </SelectCategory>
          </FormRow>
          <FormRow>
            <div>
              <EditTitle>Feedback Detail</EditTitle>
              <EditParagraph>
                Include any specific comments on what should be improved, added,
                etc.
              </EditParagraph>
            </div>
            <EditDetailTextArea
              placeholder={description}
              {...register("description", { required: true, minLength: 5 })}
            />
            {errors.description && <Warning>Can not be empty</Warning>}
          </FormRow>
          <ButtonGroup>
            <RemoveFeedback id={id}>Delete</RemoveFeedback>
            <SecondaryButtonGroup>
              <CancelButton onClick={() => navigate(-1)}>Cancel</CancelButton>
              <AddButton type="submit">Edit Feedback</AddButton>
            </SecondaryButtonGroup>
          </ButtonGroup>
        </FormDivider>
      </FormContainer>
    </StyledEditFeedback>
  );
}

export default EditFeedback;
