import { useMutation, useQueryClient } from '@tanstack/react-query';
import QUERY_KEY from '@/constants/queryKey.ts';
import axios from 'axios';

export default function useHideReply(commentId: number) {
  const queryClient = useQueryClient();

  const mutationFn = async () => {
    const response = await axios.post(`/hide/comment/${commentId}`);
    return response.data;
  };

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.comment] });
  };

  return useMutation({
    mutationFn,
    onSuccess
  });
}