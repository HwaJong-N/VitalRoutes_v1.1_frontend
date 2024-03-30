import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function useReplyWriteMutation() {
  const queryClient = useQueryClient();

  const mutationFn = (data: {
    participationId: number;
    content: string;
  }) => axios.post('/comments/save', data);

  const onSuccess = () => {
    queryClient.clear();
  };

  return useMutation({ mutationFn, onSuccess });
}