import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Comment } from '@/types/challenge';
import QUERY_KEY from '@/constants/queryKey';

export default function useComment(challengeId: string) {
  const queryKey = [QUERY_KEY.comment, challengeId];

  const queryFn = async (page: number) => {
    const { data } = await axios.get<{ data: Comment }>(
      `/participation/view/${challengeId}?page=${page}`,
    );

    return data.data;
  };

  return useInfiniteQuery({
    queryKey,
    queryFn: async ({ pageParam }) => queryFn(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.remainFlag) return undefined;
      return pages.length;
    },
  });
}
