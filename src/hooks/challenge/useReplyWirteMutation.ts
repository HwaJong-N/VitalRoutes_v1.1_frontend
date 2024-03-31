import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import QUERY_KEY from '@/constants/queryKey.ts';

export default function useReplyWriteMutation() {
  const queryClient = useQueryClient();

  const mutationFn = (data: {
    participationId: number;
    content: string;
  }) => axios.post('/comments/save', data);

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.comment] });
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.reply] });
  };

  return useMutation({ mutationFn, onSuccess });
}