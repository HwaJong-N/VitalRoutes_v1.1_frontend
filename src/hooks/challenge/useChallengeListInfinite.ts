import {
  useInfiniteQuery,
} from '@tanstack/react-query';
import axios from 'axios';
import QUERY_KEY from '@/constants/queryKey';
import { Challenge } from '@/types/challenge';

function useChallengeListInfinite(selectedTag: string, searchQuery:string) {
  const queryKey = [QUERY_KEY.challengeList, selectedTag, searchQuery];
  console.log("searchQuery = ", searchQuery);

  const queryFn = async (page: number) => {
    const { data } = await axios.get<{ data: Challenge }>(
      `/challenge/list?page=${page}&searchType=${selectedTag}&searchWord=${searchQuery}`,
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
