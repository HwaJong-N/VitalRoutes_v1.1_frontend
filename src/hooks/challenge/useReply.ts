import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Reply } from '@/types/challenge';
import QUERY_KEY from '@/constants/queryKey';

export default function useReply(participationId: number) {
  const queryKey = [QUERY_KEY.reply, participationId];

  const queryFn = async (page: number) => {
    const { data } = await axios.get<{ data: Reply }>(
      `/comments/view/${participationId}?page=${page}`,
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
