/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getFeedbacks } from "../services/apiFeedbacks";
import { FormContainer } from "../features/addComments/AddCommentStyled";
import { useFilter } from "../context/FilterContext";
import styled from "styled-components";
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #373f68;
  padding: 2.3rem;
  max-width: 117.5rem;
`;

const AddFeedbackButton = styled(Link)`
  background-color: #c75af6;
  color: #f2f4fe;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 1.2rem 2.4rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
`;

const FlexContainerHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

const Title = styled.h3`
  color: #fff;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`;

const SelectFilter = styled.select`
  border-radius: 10px;
  background: #373f68;
  color: #f2f4fe;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  border: none;
  padding: 1rem;
`;

const FilterOption = styled.option`
  color: #647196;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  background-color: #fff;
`;
function Header() {
  const { data } = useQuery({
    queryKey: ["feedbackSuggestions"],
    queryFn: getFeedbacks,
    refetchOnReconnect: true,
  });

  const statuses =
    data && data.filter((item) => item.status === "suggestion").length;
  const { dispatch, actValue } = useFilter();
  function handleFilter(e) {
    if (e.target.value === "mostUpvotes") {
      dispatch({ type: "mostUpvotes" });
    }
    if (e.target.value === "leastUpvotes") {
      dispatch({ type: "leastUpvotes" });
    }
    if (e.target.value === "mostComments") {
      dispatch({ type: "mostComments" });
    }
    if (e.target.value === "leastComments") {
      dispatch({ type: "leastComments" });
    }
  }

  return (
    <StyledHeader>
      <FlexContainerHeader>
        <FlexContainerHeader>
          <img src="/images/suggestionsbulb.png" alt="icon" />
          <Title>{statuses} Suggestions</Title>
        </FlexContainerHeader>
        <FormContainer>
          <SelectFilter
            name="selectfilter"
            onChange={handleFilter}
            value={actValue}
            id="filter"
          >
            <FilterOption value="mostUpvotes">Most Upvotes</FilterOption>
            <FilterOption value="leastUpvotes">Least Upvotes</FilterOption>
            <FilterOption value="mostComments">Most Comments</FilterOption>
            <FilterOption value="leastComments">Least Comments</FilterOption>
          </SelectFilter>
        </FormContainer>
      </FlexContainerHeader>
      <AddFeedbackButton to="/feedback/addnewfeedback">
        + Add Feedback
      </AddFeedbackButton>
    </StyledHeader>
  );
}

export default Header;
