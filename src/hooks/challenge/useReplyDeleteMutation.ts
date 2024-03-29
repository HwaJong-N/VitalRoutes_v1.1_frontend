import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import QUERY_KEY from '@/constants/queryKey.ts';

function useReplyDeleteMutation(replyId: number) {
  const queryClient = useQueryClient();
  const mutationFn = () => axios.delete(`/comments/${replyId}`);
  const onSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEY.reply],
    });
  };
  return useMutation({ mutationFn, onSuccess });
}

export default useReplyDeleteMutation;