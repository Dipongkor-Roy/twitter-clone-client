import { graphqlClient } from "@/clients/api";
import { getCurrentUserQuery } from "@/graphql/query/user";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const { data: user, isLoading, isError, refetch } = useQuery({
    queryKey: ["current-user"],
    queryFn: async () => {
      const res = await graphqlClient.request(getCurrentUserQuery);
      return res.getCurrentUser;
    },
  });

  return { user, isLoading, isError, refetch };
};
