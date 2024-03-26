import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import QUERY_KEY from '@/constants/queryKey';
import { ChallengeDetail } from '@/types/challenge';

export default function useChallengeDetail() {
  const { id } = useParams<{ id: string }>();

  const queryFn = async () => {
    const { data } = await axios.get<{ data: ChallengeDetail }>(
      `/challenge/${id}`,
    );
    return data.data;
  };

  const queryKey = [QUERY_KEY.challengeDetail, id];

  return useQuery({ queryKey, queryFn });
}
