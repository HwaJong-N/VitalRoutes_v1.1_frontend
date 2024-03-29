import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import QUERY_KEY from '@/constants/queryKey';

function useReplyModifyMutation(replyId: number) {
  const queryClient = useQueryClient();
  const mutationFn = (data: {
    content: string;
  }) => axios.patch(`/comments/${replyId}`, data);

  const onSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEY.reply],
    });
  };

  return useMutation({ mutationFn, onSuccess });
}

export default useReplyModifyMutation;
