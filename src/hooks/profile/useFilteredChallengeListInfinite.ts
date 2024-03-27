import {
  useInfiniteQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import QUERY_KEY from '@/constants/queryKey';
import { Challenge } from '@/types/challenge';

function useFilteredChallengeListInfinite(filter: string) {
  const queryKey = [QUERY_KEY.challengeList, filter];

  const queryFn = async (page: number) => {
    const { data } = await axios.get<{ data: Challenge }>(
      `/challenge/${filter}?page=${page}`, // 필터에 따라 다른 엔드포인트를 호출합니다.
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

export default useFilteredChallengeListInfinite;
