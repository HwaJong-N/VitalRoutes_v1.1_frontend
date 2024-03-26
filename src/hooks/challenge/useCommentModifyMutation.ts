import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import QUERY_KEY from '@/constants/queryKey';

function useCommentModifyMutation(commentId: number) {
  const { id: challengeId } = useParams<{ id: string }>();

  const queryClient = useQueryClient();
  const mutationFn = (data: {
    content: string;
    uploadedFiles: { sequence: number; fileName: string }[];
  }) => axios.patch(`/participation/${commentId}`, data);

  const onSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [QUERY_KEY.comment, challengeId],
    });
  };

  return useMutation({ mutationFn, onSuccess });
}

export default useCommentModifyMutation;
