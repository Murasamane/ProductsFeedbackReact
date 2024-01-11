/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import styled from "styled-components";
import { deleteFeedback } from "../../services/apiFeedbacks";
import { useNavigate } from "react-router-dom";
const DeleteButton = styled.button`
  border-radius: 10px;
  background: #d73737;
  color: #f2f4fe;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  padding: 1.1rem 2.4rem;
`;

function RemoveFeedback({ id }) {
  const queryClinet = useQueryClient();
  const navigate = useNavigate();
  const { mutate } = useMutation({
    mutationFn: deleteFeedback,
    onSuccess: () => {
      queryClinet.invalidateQueries(["allFeedbacks", "feedback"]);
      navigate("/");
    },
    onError: () => {
      console.log("Could not delete the feedback");
    },
  });
  function handleDelete() {
    mutate(id);
  }
  return <DeleteButton onClick={handleDelete}>Delete</DeleteButton>;
}

export default RemoveFeedback;
