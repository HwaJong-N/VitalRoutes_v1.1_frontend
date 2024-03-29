import { useMutation, useQueryClient } from '@tanstack/react-query';
import QUERY_KEY from '@/constants/queryKey.ts';
import axios from 'axios';

export default function useHideComment(participationId: number) {
  const queryClient = useQueryClient();

  const mutationFn = async () => {
    const response = await axios.post(`/hide/participation/${participationId}`);
    return response.data;
  };

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.challengeDetail] });
  };

  return useMutation({
    mutationFn,
    onSuccess
  });
}