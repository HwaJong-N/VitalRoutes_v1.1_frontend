import { useMutation, useQueryClient } from '@tanstack/react-query';
import QUERY_KEY from '@/constants/queryKey';
import axios from 'axios';
export default function useBookmark(challengeId: number) {
  const queryClient = useQueryClient();

  const mutationFn = async () => {
    const response = await axios.post(`/challenge/${challengeId}/bookmark`);
    return response.data;
  };

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: [QUERY_KEY.bookmark] });
  };

  return useMutation({
    mutationFn,
    onSuccess
  });
}
