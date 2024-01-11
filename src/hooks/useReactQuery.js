import { useQuery } from "@tanstack/react-query";
import { getFeedbacks } from "../services/apiFeedbacks";

export function useReactQuery(queryKey) {
  const {
    isLoading,
    data: feedbacks,
    error,
  } = useQuery({
    queryKey: queryKey,
    queryFn: getFeedbacks,
    refetchOnReconnect: true,
  });
  return { feedbacks, isLoading, error };
}
