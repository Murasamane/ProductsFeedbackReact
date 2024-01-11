import { useFilter } from "../context/FilterContext";

export function useFilterMode(filterTarget = []) {
  const { col, ascending } = useFilter();
  let filteredFeedbacks = filterTarget;

  if (col === "upvotes" && ascending === false)
    filteredFeedbacks = filterTarget.sort((a, b) => b.upvotes - a.upvotes);
  if (col === "upvotes" && ascending === true)
    filteredFeedbacks = filterTarget.sort((a, b) => a.upvotes - b.upvotes);

  if (col === "comments" && ascending === false)
    filteredFeedbacks = filterTarget.sort(
      (a, b) => b.comments.length - a.comments.length
    );
  if (col === "comments" && ascending === true)
    filteredFeedbacks = filterTarget.sort(
      (a, b) => a.comments.length - b.comments.length
    );
  return { filteredFeedbacks };
}
