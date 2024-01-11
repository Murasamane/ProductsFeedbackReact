/* eslint-disable react/prop-types */
import { useContext, useReducer } from "react";
import { createContext } from "react";

const FilterContext = createContext();

const initialState = {
  col: "upvotes",
  ascending: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "mostUpvotes":
      return {
        ...state,
        col: "upvotes",
        ascending: false,
        actValue: "mostUpvotes",
      };
    case "leastUpvotes":
      return {
        ...state,
        col: "upvotes",
        ascending: true,
        actValue: "leastUpvotes",
      };

    case "mostComments":
      return {
        ...state,
        col: "comments",
        ascending: false,
        actValue: "mostComments",
      };
    case "leastComments":
      return {
        ...state,
        col: "comments",
        ascending: true,
        actValue: "leastComments",
      };
    default:
      return {
        ...initialState,
      };
  }
}
function FilterContextProvider({ children }) {
  const [{ col, ascending, actValue }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <FilterContext.Provider
      value={{
        col,
        ascending,
        actValue,
        dispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

const useFilter = () => {
  const context = useContext(FilterContext);

  return context;
};

export { FilterContextProvider, useFilter };
