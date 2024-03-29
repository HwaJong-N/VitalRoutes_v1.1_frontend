import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import QUERY_KEY from '@/constants/queryKey.ts';

function useChallengeModifyMutation(challengeId: number) {
  const queryClient = useQueryClient();

  const mutationFn = (data : {
    title: string;
    content: string;
    type: string;
    tags: string[];
  }) => axios.patch(`/challenge/${challengeId}`, data);

  const onSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEY.challengeDetail],
    });
  }

  return useMutation({ mutationFn, onSuccess });
}

export default useChallengeModifyMutation;