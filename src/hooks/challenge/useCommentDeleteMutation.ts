import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import QUERY_KEY from '@/constants/queryKey';

function useCommentDeleteMutation(commentId: number) {
  const { id: challengeId } = useParams<{ id: string }>();
  const queryClient = useQueryClient();
  const mutationFn = () => axios.delete(`/participation/${commentId}`);
  const onSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEY.comment, challengeId],
    });
  };

  return useMutation({ mutationFn, onSuccess });
}

export default useCommentDeleteMutation;
