import { useMutation, useQueryClient } from '@tanstack/react-query';
import QUERY_KEY from '@/constants/queryKey';
import axios from 'axios';
export default function useLike(challengeId: number) {
  const queryClient = useQueryClient();

  const mutationFn = async () => {
    const response = await axios.post(`/challenge/${challengeId}/like`);
    return response.data;
  };

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.like] });
  };

  return useMutation({
    mutationFn,
    onSuccess
  });
}
