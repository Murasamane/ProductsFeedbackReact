export function useFetchFilter(filter, feedbacks = []) {
  switch (filter) {
    case "mostComments":
      return feedbacks.sort((a, b) => b.commentsCount - a.commentsCount);

    case "leastComments":
      return feedbacks.sort((a, b) => a.commentsCount - b.commentsCount);

    case "mostUpvotes":
      return feedbacks.sort((a, b) => b.upvotesCount - a.upvotesCount);

    case "leastUpvotes":
      return feedbacks.sort((a, b) => a.upvotesCount - b.upvotesCount);

    default:
      return feedbacks;
  }
}
