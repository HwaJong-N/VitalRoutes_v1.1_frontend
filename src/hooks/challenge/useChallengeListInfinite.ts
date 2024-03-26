import {
  useInfiniteQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import QUERY_KEY from '@/constants/queryKey';
import { Challenge } from '@/types/challenge';

function useChallengeListInfinite() {
  const queryKey = [QUERY_KEY.challengeList];

  const queryFn = async (page: number) => {
    const { data } = await axios.get<{ data: Challenge }>(
      `/challenge/list?page=${page}`,
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

export default useChallengeListInfinite;
