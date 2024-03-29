import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import QUERY_KEY from '@/constants/queryKey.ts';
import { useNavigate } from 'react-router-dom';


function useChallengeDeleteMutation(challengeId: number) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutationFn = () => axios.delete(`/challenge/${challengeId}`);

  const onSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEY.challengeList],
    });
    navigate('/challenge');
  };

  return useMutation({ mutationFn, onSuccess });
}


export default useChallengeDeleteMutation;